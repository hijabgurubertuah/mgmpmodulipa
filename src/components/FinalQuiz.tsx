import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Trophy, 
  RefreshCw, 
  ArrowRight,
  Star,
  Zap,
  Target,
  Award,
  Loader2,
  LayoutDashboard
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { googleFormService } from '../services/googleFormService';
import { Theme } from '../types';
import { ThemeButton } from './ThemeButton';

import { QUIZ_MODULE_CONFIGS, Question } from '../config/quizConfig';

interface FinalQuizProps {
  theme: Theme;
  moduleNumber: number;
  username: string;
  userClass: string;
  onComplete: (score: number) => void;
}

export const FinalQuiz: React.FC<FinalQuizProps> = ({ theme, moduleNumber, username, userClass, onComplete }) => {
  const config = QUIZ_MODULE_CONFIGS[moduleNumber] || QUIZ_MODULE_CONFIGS[1];
  const QUESTIONS = config.questions;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean, message?: string} | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const isTeacher = username.toLowerCase() === 'gurusmp';

  // Persistence keys
  const KEY_INDEX = `ipa_quiz_mod${moduleNumber}_currentIndex`;
  const KEY_ANSWERS = `ipa_quiz_mod${moduleNumber}_answers`;
  const KEY_SHUFFLED = `ipa_quiz_mod${moduleNumber}_shuffledQuestions`;
  const KEY_SHOW_RESULT = `ipa_quiz_mod${moduleNumber}_showResult`;

  // --- Persistence & Teacher Auto-Fill ---
  useEffect(() => {
    if (isTeacher && Object.keys(answers).length === 0) {
      const teacherAnswers: Record<number, string> = {};
      QUESTIONS.forEach(q => {
        teacherAnswers[q.id] = q.correctId;
      });
      setAnswers(teacherAnswers);
    }

    const savedIndex = localStorage.getItem(KEY_INDEX);
    const savedAnswers = localStorage.getItem(KEY_ANSWERS);
    const savedShuffled = localStorage.getItem(KEY_SHUFFLED);
    const savedShowResult = localStorage.getItem(KEY_SHOW_RESULT);

    if (savedIndex) setCurrentIndex(parseInt(savedIndex, 10));
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (e) {
        console.error("Failed to parse saved answers", e);
      }
    }
    if (savedShowResult) setShowResult(savedShowResult === 'true');
    
    if (savedShuffled) {
      try {
        setShuffledQuestions(JSON.parse(savedShuffled));
      } catch (e) {
        const shuffled = QUESTIONS.map(q => ({
          ...q,
          options: [...q.options].sort(() => Math.random() - 0.5)
        }));
        setShuffledQuestions(shuffled);
      }
    } else {
      const shuffled = QUESTIONS.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
      setShuffledQuestions(shuffled);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_INDEX, currentIndex.toString());
  }, [currentIndex, KEY_INDEX]);

  useEffect(() => {
    localStorage.setItem(KEY_ANSWERS, JSON.stringify(answers));
  }, [answers, KEY_ANSWERS]);

  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      localStorage.setItem(KEY_SHUFFLED, JSON.stringify(shuffledQuestions));
    }
  }, [shuffledQuestions, KEY_SHUFFLED]);

  useEffect(() => {
    localStorage.setItem(KEY_SHOW_RESULT, showResult.toString());
  }, [showResult, KEY_SHOW_RESULT]);

  // Shuffle options on mount or restart - ONLY if not loaded from persistence
  useEffect(() => {
    if (showResult === false && Object.keys(answers).length === 0 && shuffledQuestions.length === 0) {
      const shuffled = QUESTIONS.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
      setShuffledQuestions(shuffled);
    }
  }, [showResult, answers]);

  if (shuffledQuestions.length === 0) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-indigo-600/20 blur-xl rounded-full" 
          />
        </div>
        <div className="space-y-1">
          <p className="text-lg font-black text-slate-800">Menyiapkan Soal...</p>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sabar ya, ilmu sedang diracik! 🌱</p>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  const totalQuestions = shuffledQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const nextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    shuffledQuestions.forEach(q => {
      if (answers[q.id] === q.correctId) {
        correct++;
      }
    });
    return correct;
  };

  const handleFinish = async () => {
    const score = calculateScore();
    setShowResult(true);
    
    if (score === totalQuestions) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#EC4899', '#3B82F6']
      });
    }
  };

  const handleSendToSheet = async () => {
    if (isSubmitting || submitStatus?.success) return;
    
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);
    
    setIsSubmitting(true);

    // Kirim ke Google Form
    const result = await googleFormService.submitQuizResult(
      username,
      userClass,
      `Kuis Modul ${moduleNumber}: ${config.title}`,
      percentage,
      config.formId
    );
    
    setSubmitStatus(result);
    setIsSubmitting(false);

    if (result.success) {
      setShowSuccessPopup(true);
    }
  };

  const handleSuccessOk = () => {
    setShowSuccessPopup(false);
    window.open('https://s.shopee.co.id/3B42ZFRWkc', '_blank');
    onComplete(calculateScore());
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setDirection(0);
    
    // Re-shuffle on restart
    const shuffled = QUESTIONS.map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));
    setShuffledQuestions(shuffled);
    
    // Clear persistence for new start
    localStorage.removeItem(KEY_INDEX);
    localStorage.removeItem(KEY_ANSWERS);
    localStorage.removeItem(KEY_SHUFFLED);
    localStorage.removeItem(KEY_SHOW_RESULT);
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMotivationalContent = () => {
    if (percentage === 100) return {
      title: "Sempurna!",
      message: "Luar biasa! Kamu benar-benar memahami pentingnya berkebun dan ketahanan pangan. Kamu siap menjadi pahlawan pangan!",
      color: "text-emerald-500"
    };
    if (percentage >= 80) return {
      title: "Luar Biasa Bagus!",
      message: "Hebat sekali! Pemahamanmu sudah sangat matang. Sedikit lagi menuju sempurna!",
      color: "text-blue-500"
    };
    if (percentage >= 60) return {
      title: "Bagus!",
      message: "Kerja bagus! Kamu sudah paham dasar-dasarnya, tapi masih ada beberapa hal yang perlu dipelajari lagi.",
      color: "text-amber-500"
    };
    return {
      title: "Terus Semangat!",
      message: "Jangan menyerah! Mari baca kembali materinya dan coba lagi. Kamu pasti bisa!",
      color: "text-rose-500"
    };
  };

  const motivation = getMotivationalContent();

  if (showResult) {
    return (
      <div className="w-full py-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white/50"
        >
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 p-6 text-center text-white space-y-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Trophy size={48} className="mx-auto mb-2 drop-shadow-lg" />
              <h2 className="text-2xl font-black tracking-tight">Hasil Kuis</h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-xs">{username} - {userClass}</p>
            </motion.div>
          </div>

          <div className="p-8 text-center space-y-6">
            <div className="space-y-4 flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.4 }}
                className="text-9xl font-black"
                style={{ color: theme.bgMain }}
              >
                {percentage}
              </motion.div>
              
              {/* Tombol Kirim Nilai (Hanya jika >= 76 atau Guru) */}
              <div className="w-full max-w-xs mx-auto space-y-3">
                {(percentage >= 76 || isTeacher) ? (
                  !submitStatus && !isSubmitting ? (
                    <ThemeButton
                      theme={theme}
                      onClick={handleSendToSheet}
                      fullWidth
                      style={{ backgroundColor: theme.bgMain, background: theme.bgMain, color: '#ffffff' }}
                    >
                      <CheckCircle2 size={20} />
                      <span>KIRIM NILAI</span>
                    </ThemeButton>
                  ) : isSubmitting ? (
                    <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold animate-pulse py-4">
                      <Loader2 className="animate-spin" size={20} />
                      <span>Mengirim nilai...</span>
                    </div>
                  ) : submitStatus ? (
                    <div className={`flex items-center justify-center gap-2 font-bold py-4 ${submitStatus.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                      <CheckCircle2 size={20} />
                      <span>{submitStatus.message}</span>
                    </div>
                  ) : null
                ) : (
                  <div className="p-4 bg-rose-50 rounded-2xl border-2 border-rose-100 mb-2">
                    <p className="text-rose-600 font-black text-sm uppercase tracking-tight">Nilai minimal 76 untuk kirim nilai</p>
                  </div>
                )}

                {/* Tombol Ulangi Kuis (Tampil jika belum berhasil kirim) */}
                {!submitStatus && (
                  <ThemeButton 
                    theme={theme}
                    variant="ghost"
                    onClick={handleRestart}
                    fullWidth
                  >
                    <RefreshCw size={20} />
                    <span>ULANGI KUIS</span>
                  </ThemeButton>
                )}

                {/* Tombol Lihat Rekap Nilai (Hanya untuk Guru) */}
                {isTeacher && (
                  <ThemeButton 
                    theme={theme}
                    variant="outline"
                    onClick={() => {
                      onComplete(calculateScore());
                    }}
                    fullWidth
                  >
                    <LayoutDashboard size={20} />
                    <span>LIHAT REKAP NILAI</span>
                  </ThemeButton>
                )}
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
              <h3 className="text-xl font-black" style={{ color: theme.bgMain }}>{motivation.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                {motivation.message}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {/* No Restart or Finish buttons as requested for Modul 1 */}
            </div>
          </div>
        </motion.div>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccessPopup && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] p-8 max-w-xs w-full text-center space-y-6 shadow-2xl"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Berhasil!</h3>
                  <p className="text-slate-700 font-bold">Nilai sudah terkirim</p>
                </div>
                <ThemeButton 
                  theme={theme}
                  onClick={handleSuccessOk}
                  fullWidth
                  style={{ backgroundColor: theme.bgMain, background: theme.bgMain, color: '#ffffff' }}
                >
                  OK
                </ThemeButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="w-full space-y-2 py-0.5">
      <div className="w-full max-w-2xl mx-auto space-y-2">
        {/* Header Stats */}
        <div className="bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border-2 border-white/60 shadow-sm flex justify-between items-center px-4">
          <h2 className="text-sm md:text-base font-black text-slate-800 flex items-center gap-2 whitespace-nowrap">
            <Zap className="text-yellow-500 fill-yellow-500 shrink-0" size={16} />
            🌱 Kuis: {config.title} 🌱
          </h2>
          <div className="text-right">
            <div className="text-lg font-black text-indigo-600">
              {currentIndex + 1}<span className="text-slate-300 text-sm">/{totalQuestions}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-50 p-0.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-sm"
          />
        </div>

        {/* Question Card */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction * 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 50, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border-2 border-slate-100 space-y-4"
            >
              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-snug text-justify">
                  {currentQuestion.question}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option.id;
                    return (
                      <ThemeButton
                        key={option.id}
                        theme={theme}
                        variant={isSelected ? 'primary' : 'secondary'}
                        onClick={() => handleAnswer(option.id)}
                        fullWidth
                        className="text-left justify-start px-6 relative overflow-hidden"
                        style={isSelected ? { backgroundColor: theme.accent } : { color: '#1e293b', border: '2px solid #f1f5f9' }}
                      >
                        {isSelected && (
                          <motion.div 
                            layoutId="glow"
                            className="absolute inset-0 bg-white/10 blur-md"
                          />
                        )}
                        <span className="relative z-10 leading-tight">{option.text}</span>
                      </ThemeButton>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 pt-1">
          <ThemeButton
            theme={theme}
            variant="ghost"
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            size="sm"
          >
            <ChevronLeft size={18} />
            <span className="hidden md:inline">Sebelumnya</span>
          </ThemeButton>

          {isTeacher && (
            <ThemeButton 
              theme={theme}
              variant="outline"
              onClick={() => setShowResult(true)}
              size="sm"
            >
              <Trophy size={14} />
              <span>LIHAT HASIL</span>
            </ThemeButton>
          )}

          {currentIndex === totalQuestions - 1 ? (
            <ThemeButton
              theme={theme}
              onClick={handleFinish}
              disabled={answeredCount < totalQuestions}
              className="flex-1"
            >
              <CheckCircle2 size={18} />
              <span>Selesai</span>
            </ThemeButton>
          ) : (
            <ThemeButton
              theme={theme}
              onClick={nextQuestion}
              fullWidth
              className="flex-1"
            >
              <span>Selanjutnya</span>
              <ChevronRight size={18} />
            </ThemeButton>
          )}
        </div>

        {/* Question Navigation Grid */}
        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border-2 border-white/60 shadow-sm space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Navigasi Soal</span>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-bold text-slate-500">Sudah</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-[9px] font-bold text-slate-500">Belum</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
            {shuffledQuestions.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isCurrent = currentIndex === idx;
              
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-9 rounded-xl font-black text-xs transition-all flex items-center justify-center border-2 ${
                    isCurrent 
                      ? 'border-indigo-500 scale-110 z-10 shadow-md ring-4 ring-indigo-500/10' 
                      : 'border-transparent'
                  } ${
                    isAnswered 
                      ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20' 
                      : 'bg-rose-500 text-white shadow-sm shadow-rose-500/20'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tombol Lihat Rekap Nilai (Hanya untuk Guru) - Dibawah Nomor Soal */}
        {isTeacher && (
          <div className="mt-4">
            <ThemeButton 
              theme={theme}
              size="lg"
              fullWidth
              onClick={() => {
                onComplete(calculateScore());
              }}
            >
              <LayoutDashboard size={24} />
              <span>LIHAT REKAP NILAI SISWA</span>
            </ThemeButton>
          </div>
        )}
      </div>
    </div>
  );
};
