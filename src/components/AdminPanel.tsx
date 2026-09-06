import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { 
  Save, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Eye, 
  Settings, 
  Layers, 
  FileSpreadsheet, 
  Video, 
  Image, 
  PlusCircle, 
  ArrowLeft, 
  Play, 
  Check, 
  X,
  FileText,
  ListOrdered,
  Sparkles,
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { Theme } from '../types';
import { firebaseService, ModuleData, Page } from '../services/firebaseService';
import { Rekap } from './Rekap';

interface AdminPanelProps {
  theme: Theme;
  onPreviewToggle: () => void;
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ theme, onPreviewToggle, onLogout }) => {
  const [modules, setModules] = useState<ModuleData[]>([]);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [selectedPageIdx, setSelectedPageIdx] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'materi' | 'rekap' | 'settings'>('materi');
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  // State for dynamic text settings
  const [appConfig, setAppConfig] = useState<any>({
    logoUrl: '',
    loginTitle: '',
    loginQuote: '',
    loginTagline: '',
    homeTitle: '',
    homeQuote: '',
    schoolName: '',
    sidebarTitle: '',
    sidebarSubtitle: ''
  });

  // Current editing module deep state copy
  const [editingModule, setEditingModule] = useState<ModuleData | null>(null);

  useEffect(() => {
    loadModules();
    loadAppConfig();
  }, []);

  const loadAppConfig = async () => {
    try {
      const config = await firebaseService.getAppConfig();
      setAppConfig(config);
    } catch (error) {
      console.error("Error loading app config:", error);
    }
  };

  const handleSaveAppConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await firebaseService.saveAppConfig(appConfig);
      showToast('Setelan teks & logo berhasil disimpan ke Cloud!', 'success');
      // Force refresh AppConfig across client
      window.location.reload();
    } catch (e) {
      showToast('Gagal menyimpan setelan ke Cloud.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const loadModules = async () => {
    setLoading(true);
    try {
      const data = await firebaseService.getAllModules();
      setModules(data);
      if (data.length > 0) {
        setSelectedModuleId(data[0].id);
        // Clone for editing
        setEditingModule(JSON.parse(JSON.stringify(data[0])));
        setSelectedPageIdx(0);
      }
    } catch (error) {
      showToast('Gagal memuat materi dari database.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleModuleChange = (moduleId: number) => {
    const mod = modules.find(m => m.id === moduleId);
    if (mod) {
      setSelectedModuleId(moduleId);
      setEditingModule(JSON.parse(JSON.stringify(mod)));
      setSelectedPageIdx(0);
    }
  };

  // Add a brand new module (Modul 9, 10...)
  const handleAddNewModule = async () => {
    const nextId = modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1;
    const newMod: ModuleData = {
      id: nextId,
      title: `Modul Baru ${nextId}`,
      pages: [
        {
          id: 0,
          title: "Halaman 1",
          content: "Silakan isi materi pembelajaran Anda di sini."
        }
      ]
    };

    setLoading(true);
    try {
      await firebaseService.saveModule(newMod);
      const updated = await firebaseService.getAllModules();
      setModules(updated);
      setSelectedModuleId(nextId);
      setEditingModule(newMod);
      setSelectedPageIdx(0);
      showToast(`Modul ${nextId} berhasil dibuat!`, 'success');
    } catch (e) {
      showToast('Gagal menambahkan modul baru.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCurrentModule = async () => {
    if (!editingModule) return;
    setSaving(true);
    try {
      await firebaseService.saveModule(editingModule);
      // Update in local list
      setModules(prev => prev.map(m => m.id === editingModule.id ? editingModule : m));
      showToast('Modul berhasil disimpan ke Cloud!', 'success');
    } catch (e) {
      showToast('Gagal menyimpan ke Cloud Firestore.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefault = async () => {
    const pwd = window.prompt("PERINGATAN! Semua materi kustom yang Anda ubah akan dihapus dan dikembalikan ke bawaan default terakhir.\n\nUntuk melanjutkan, silakan masukkan kata sandi administrator (Sandi: gurusmp):");
    if (pwd === null) return; // User cancelled the prompt
    if (pwd.trim().toLowerCase() !== 'gurusmp') {
      showToast('Sandi salah! Akses reset modul ditolak.', 'error');
      return;
    }
    setLoading(true);
    try {
      await firebaseService.resetAllModulesToDefault();
      await loadModules();
      showToast('Semua modul dikembalikan ke setelan default!', 'success');
    } catch (e) {
      showToast('Gagal mereset modul.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSetAsDefault = async () => {
    const pwd = window.prompt("TINDAKAN SENSITIF! Anda akan menetapkan seluruh susunan materi saat ini sebagai DEFAULT BARU.\n\nDi masa depan, menekan tombol 'Reset Bawaan' akan mengembalikan materi ke kondisi saat ini.\n\nUntuk melanjutkan, silakan masukkan kata sandi administrator (Sandi: gurusmp):");
    if (pwd === null) return; // User cancelled the prompt
    if (pwd.trim().toLowerCase() !== 'gurusmp') {
      showToast('Sandi salah! Akses ditolak.', 'error');
      return;
    }
    setLoading(true);
    try {
      await firebaseService.saveCurrentAsDefault();
      showToast('Berhasil menyimpan materi saat ini sebagai default baru!', 'success');
    } catch (e) {
      showToast('Gagal menetapkan default baru ke Cloud.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Page mutation helpers
  const updatePageField = (field: keyof Page, value: any) => {
    if (!editingModule) return;
    setEditingModule(prev => {
      if (!prev) return null;
      const pages = [...prev.pages];
      pages[selectedPageIdx] = {
        ...pages[selectedPageIdx],
        [field]: value
      };
      return { ...prev, pages };
    });
  };

  const addPage = () => {
    if (!editingModule) return;
    const pages = [...editingModule.pages];
    const newPageId = pages.length > 0 ? Math.max(...pages.map(p => p.id)) + 1 : 0;
    const newPage: Page = {
      id: newPageId,
      title: `Halaman ${pages.length + 1}`,
      content: "Isi materi halaman baru..."
    };
    
    setEditingModule(prev => {
      if (!prev) return null;
      return { ...prev, pages: [...prev.pages, newPage] };
    });
    setSelectedPageIdx(pages.length);
  };

  const deletePage = (idx: number) => {
    if (!editingModule) return;
    if (editingModule.pages.length <= 1) {
      showToast('Modul harus memiliki minimal 1 halaman!', 'error');
      return;
    }
    if (!window.confirm("Apakah Anda yakin ingin menghapus halaman ini?")) return;

    setEditingModule(prev => {
      if (!prev) return null;
      const filtered = prev.pages.filter((_, i) => i !== idx);
      // Re-map IDs to maintain order
      const remapped = filtered.map((p, i) => ({ ...p, id: i }));
      return { ...prev, pages: remapped };
    });
    setSelectedPageIdx(0);
  };

  // Quiz Editor Helper inside pages
  const handleQuizQuestionChange = (questionText: string) => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    const updatedQuiz = {
      question: questionText,
      options: currentPage.quiz?.options || [
        { id: 'A', text: '', isCorrect: true },
        { id: 'B', text: '', isCorrect: false }
      ]
    };
    updatePageField('quiz', updatedQuiz);
  };

  const handleQuizOptionChange = (optIdx: number, fields: Record<string, any>) => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    if (!currentPage.quiz) return;

    const options = [...currentPage.quiz.options];
    options[optIdx] = {
      ...options[optIdx],
      ...fields
    };

    // If setting isCorrect: true, make all others false
    if (fields.isCorrect) {
      options.forEach((opt, idx) => {
        if (idx !== optIdx) opt.isCorrect = false;
      });
    }

    updatePageField('quiz', {
      ...currentPage.quiz,
      options
    });
  };

  const addQuizOption = () => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    const quiz = currentPage.quiz || { question: 'Pertanyaan Tantangan?', options: [] };
    const nextLetter = String.fromCharCode(65 + quiz.options.length); // A, B, C, D...
    
    const newOptions = [
      ...quiz.options,
      { id: nextLetter, text: `Pilihan ${nextLetter}`, isCorrect: quiz.options.length === 0 }
    ];

    updatePageField('quiz', {
      ...quiz,
      options: newOptions
    });
  };

  const removeQuizOption = (idx: number) => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    if (!currentPage.quiz) return;
    
    const filtered = currentPage.quiz.options.filter((_, i) => i !== idx);
    updatePageField('quiz', {
      ...currentPage.quiz,
      options: filtered
    });
  };

  // Final Quiz Question Handlers (For Final Quiz page types)
  const handleFinalQuizQuestionChange = (qIdx: number, field: string, value: any) => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    const questions = [...(currentPage.questions || [])];

    if (!questions[qIdx]) {
      questions[qIdx] = { id: `q${qIdx + 1}`, question: '', options: [{ id: 'a', text: '' }, { id: 'b', text: '' }, { id: 'c', text: '' }], correctId: 'a' };
    }

    if (field === 'question') {
      questions[qIdx].question = value;
    } else if (field === 'correctId') {
      questions[qIdx].correctId = value;
    }

    updatePageField('questions', questions);
  };

  const handleFinalQuizOptionChange = (qIdx: number, optIdx: number, text: string) => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    const questions = [...(currentPage.questions || [])];
    
    if (questions[qIdx]) {
      const options = [...questions[qIdx].options];
      options[optIdx] = { ...options[optIdx], text };
      questions[qIdx].options = options;
      updatePageField('questions', questions);
    }
  };

  const addFinalQuizQuestion = () => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    const questions = [...(currentPage.questions || [])];
    const nextIdx = questions.length;
    
    questions.push({
      id: `q${nextIdx + 1}`,
      question: `Soal nomor ${nextIdx + 1}`,
      options: [
        { id: 'a', text: 'Pilihan A' },
        { id: 'b', text: 'Pilihan B' },
        { id: 'c', text: 'Pilihan C' }
      ],
      correctId: 'a'
    });
    updatePageField('questions', questions);
  };

  const removeFinalQuizQuestion = (idx: number) => {
    if (!editingModule) return;
    const currentPage = editingModule.pages[selectedPageIdx];
    const questions = (currentPage.questions || []).filter((_, i) => i !== idx);
    updatePageField('questions', questions);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-white space-y-4" style={{ backgroundColor: '#2d0039' }}>
        <div className="w-12 h-12 border-4 border-t-purple-400 border-white/20 rounded-full animate-spin"></div>
        <p className="text-lg font-black tracking-widest">MEMUAT PENGATURAN DATABASE...</p>
      </div>
    );
  }

  const currentPage = editingModule?.pages[selectedPageIdx];

  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-100 font-sans pb-16 flex flex-col">
      {/* Dynamic Header */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-violet-600 rounded-2xl shadow-lg">
            <Settings className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              ADMIN
            </h1>
          </div>
        </div>

        {/* Global Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Tab Group */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('materi')}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all active:scale-95 ${
                activeTab === 'materi' 
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40' 
                  : 'hover:bg-slate-850 text-slate-400 hover:text-slate-200'
              }`}
              title="Kelola Materi Pembelajaran"
            >
              <Icons.BookOpen size={18} />
            </button>

            <button
              onClick={() => setActiveTab('rekap')}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all active:scale-95 ${
                activeTab === 'rekap' 
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40' 
                  : 'hover:bg-slate-850 text-slate-400 hover:text-slate-200'
              }`}
              title="Daftar Nilai & Progres Siswa"
            >
              <GraduationCap size={18} />
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all active:scale-95 ${
                activeTab === 'settings' 
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40' 
                  : 'hover:bg-slate-850 text-slate-400 hover:text-slate-200'
              }`}
              title="Setelan Tampilan Teks & Logo"
            >
              <Icons.Palette size={18} />
            </button>
          </div>

          <div className="h-6 w-[1px] bg-slate-800 mx-1 hidden sm:block" />

          {/* Action Group */}
          <button 
            onClick={onPreviewToggle}
            className="w-10 h-10 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl flex items-center justify-center active:scale-95 transition-all"
            title="Lihat Pratinjau Tampilan Siswa (Preview)"
          >
            <Eye size={18} />
          </button>

          <button 
            onClick={handleSetAsDefault}
            className="w-10 h-10 bg-sky-500/10 hover:bg-sky-500/25 text-sky-400 border border-sky-500/30 rounded-xl flex items-center justify-center active:scale-95 transition-all"
            title="Jadikan Struktur Materi Saat Ini Sebagai Default (Sandi: gurusmp)"
          >
            <Check size={18} />
          </button>

          <button 
            onClick={handleResetToDefault}
            className="w-10 h-10 bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 border border-amber-500/30 rounded-xl flex items-center justify-center active:scale-95 transition-all"
            title="Reset Seluruh Materi ke Setelan Default Bawaan (Sandi: gurusmp)"
          >
            <RotateCcw size={18} />
          </button>

          <button 
            onClick={onLogout}
            className="w-10 h-10 bg-rose-600 hover:bg-rose-700 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-rose-900/20 active:scale-95 transition-all"
            title="Keluar Sesi Guru"
          >
            <Icons.LogOut size={18} />
          </button>
        </div>
      </header>

      {/* Main Panel Content */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 mt-6 flex-1 flex flex-col">
        {activeTab === 'rekap' ? (
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl">
            <h2 className="text-lg font-black text-slate-100 uppercase tracking-wider mb-6 flex items-center gap-2">
              <GraduationCap className="text-emerald-400" size={20} />
              <span>Daftar Nilai Kuis & Progres Seluruh Siswa</span>
            </h2>
            <Rekap onBack={() => setActiveTab('materi')} theme={theme} />
          </div>
        ) : activeTab === 'settings' ? (
          <div className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl max-w-4xl mx-auto w-full">
            <h2 className="text-lg font-black text-slate-100 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              <Icons.Palette className="text-violet-400" size={20} />
              <span>Setelan Tampilan Teks & Logo Aplikasi</span>
            </h2>
            
            <form onSubmit={handleSaveAppConfig} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Bagian Logo */}
                <div className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
                  <h3 className="text-sm font-black text-violet-300 uppercase tracking-wider flex items-center gap-2">
                    <Icons.Image size={16} />
                    <span>Identitas & Logo Sekolah</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">URL Logo Sekolah (PNG/JPG)</label>
                      <input 
                        type="url"
                        value={appConfig.logoUrl}
                        onChange={(e) => setAppConfig({ ...appConfig, logoUrl: e.target.value })}
                        placeholder="Contoh: https://i.ibb.co.com/..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Nama Sekolah</label>
                      <input 
                        type="text"
                        value={appConfig.schoolName}
                        onChange={(e) => setAppConfig({ ...appConfig, schoolName: e.target.value })}
                        placeholder="SMPN 1 Bengkalis"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                    
                    {/* Pratinjau Logo */}
                    {appConfig.logoUrl && (
                      <div className="pt-2 flex flex-col items-center gap-2">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pratinjau Logo</span>
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                          <img 
                            src={appConfig.logoUrl} 
                            alt="Pratinjau Logo" 
                            className="w-20 h-20 object-contain mx-auto"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as any).src = 'https://placehold.co/100x100?text=Error+Load';
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bagian Sidebar */}
                <div className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
                  <h3 className="text-sm font-black text-violet-300 uppercase tracking-wider flex items-center gap-2">
                    <Icons.LayoutDashboard size={16} />
                    <span>Teks Header Sidebar</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Judul Sidebar (Baris 1)</label>
                      <input 
                        type="text"
                        value={appConfig.sidebarTitle}
                        onChange={(e) => setAppConfig({ ...appConfig, sidebarTitle: e.target.value })}
                        placeholder="Yuk Berkebun"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Subjudul Sidebar (Baris 2)</label>
                      <input 
                        type="text"
                        value={appConfig.sidebarSubtitle}
                        onChange={(e) => setAppConfig({ ...appConfig, sidebarSubtitle: e.target.value })}
                        placeholder="Modul Digital"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Bagian Halaman Login */}
                <div className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-800 md:col-span-2">
                  <h3 className="text-sm font-black text-violet-300 uppercase tracking-wider flex items-center gap-2">
                    <Icons.Lock size={16} />
                    <span>Teks Halaman Login</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Judul Login (Mendukung Enter/Baris Baru)</label>
                      <textarea 
                        value={appConfig.loginTitle}
                        onChange={(e) => setAppConfig({ ...appConfig, loginTitle: e.target.value })}
                        placeholder="Selamat Datang &#10;di Modul Berkebun SMPN 1 Bengkalis"
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Kutipan / Subjudul Login</label>
                      <textarea 
                        value={appConfig.loginQuote}
                        onChange={(e) => setAppConfig({ ...appConfig, loginQuote: e.target.value })}
                        placeholder="“Satu langkah kecil hari ini, Menyelamatkan hidup di masa depan”"
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Bagian Halaman Utama (Home) */}
                <div className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-800 md:col-span-2">
                  <h3 className="text-sm font-black text-violet-300 uppercase tracking-wider flex items-center gap-2">
                    <Icons.Home size={16} />
                    <span>Teks Halaman Utama (Dashboard) & Footer</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Judul Sambutan Dashboard (Mendukung Enter/Baris Baru)</label>
                      <textarea 
                        value={appConfig.homeTitle}
                        onChange={(e) => setAppConfig({ ...appConfig, homeTitle: e.target.value })}
                        placeholder="Selamat Datang &#10;di Modul Berkebun &#10;SMPN 1 Bengkalis"
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-bold block mb-1">Kutipan Penasihat (Nasihat di bawah tombol mulai)</label>
                      <textarea 
                        value={appConfig.homeQuote}
                        onChange={(e) => setAppConfig({ ...appConfig, homeQuote: e.target.value })}
                        placeholder='"Janganlah engkau mengucapkan perkataan..."'
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs text-slate-400 font-bold block mb-1">Teks Hak Cipta / Footer (Copyright)</label>
                      <input 
                        type="text"
                        value={appConfig.loginTagline}
                        onChange={(e) => setAppConfig({ ...appConfig, loginTagline: e.target.value })}
                        placeholder="Copyright © SMPN 1 BENGKALIS"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-600 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Tombol Simpan Setelan */}
              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button 
                  type="submit"
                  disabled={saving}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2 active:scale-95 transition-all"
                >
                  <Save size={16} />
                  <span>{saving ? 'Menyimpan...' : 'Simpan Semua Setelan'}</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start flex-1">
            {/* 1. Sidebar Modul & Halaman */}
            <div className="lg:col-span-1 space-y-6">
              {/* Module Dropdown Selector */}
              <div className="bg-slate-950 p-4 rounded-3xl border border-slate-800 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Pilih Modul</label>
                <div className="relative">
                  <select
                    value={selectedModuleId || ''}
                    onChange={(e) => handleModuleChange(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-sm font-black text-violet-300 outline-none appearance-none cursor-pointer"
                  >
                    {modules.map(m => (
                      <option key={m.id} value={m.id}>MODUL {m.id} : {m.title.substring(0, 18)}...</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>

                <button
                  onClick={handleAddNewModule}
                  className="w-full py-2.5 bg-violet-600/10 hover:bg-violet-600/20 text-violet-300 border border-violet-600/30 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Plus size={14} />
                  <span>Tambah Modul {modules.length + 1}</span>
                </button>
              </div>

              {/* Page Navigator List */}
              <div className="bg-slate-950 p-4 rounded-3xl border border-slate-800 space-y-3 flex flex-col">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Daftar Halaman</label>
                  <span className="px-2 py-0.5 bg-slate-850 rounded text-[9px] font-mono text-slate-400">{editingModule?.pages.length || 0} hal</span>
                </div>

                <div className="space-y-1 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {editingModule?.pages.map((p, idx) => {
                    const isSelected = selectedPageIdx === idx;
                    return (
                      <div 
                        key={p.id}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer group ${
                          isSelected 
                            ? 'bg-violet-600 text-white font-black shadow-md' 
                            : 'bg-slate-900 hover:bg-slate-850 text-slate-300'
                        }`}
                        onClick={() => setSelectedPageIdx(idx)}
                      >
                        <span className="text-xs truncate font-bold">
                          {idx + 1}. {p.title || `Halaman ${idx + 1}`}
                        </span>
                        
                        {/* Only show page delete button if more than 1 page */}
                        {(editingModule?.pages.length > 1) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deletePage(idx);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-rose-600 hover:text-white rounded transition-all ml-1"
                            title="Hapus Halaman"
                          >
                            <Trash2 size={11} />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={addPage}
                  className="w-full py-2.5 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-300 border border-emerald-600/30 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 mt-2"
                >
                  <PlusCircle size={14} />
                  <span>Tambah Halaman</span>
                </button>
              </div>
            </div>

            {/* 2. Main Page Editor Form */}
            <div className="lg:col-span-3 space-y-6">
              {editingModule && currentPage && (
                <div className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                  {/* Module & Page Title Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nama/Judul Modul {editingModule.id}</label>
                      <input 
                        type="text"
                        value={editingModule.title}
                        onChange={(e) => setEditingModule(prev => prev ? { ...prev, title: e.target.value } : null)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-100 outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Judul Halaman {selectedPageIdx + 1}</label>
                      <input 
                        type="text"
                        value={currentPage.title}
                        onChange={(e) => updatePageField('title', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-sm font-bold text-slate-100 outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Page Attributes & Switches */}
                  <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {/* Game Page Switch */}
                    <div className="flex flex-col space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Tipe Halaman Game?</span>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            const currentVal = !!currentPage.isGame;
                            updatePageField('isGame', !currentVal);
                            if (!currentVal) {
                              updatePageField('isFinalQuiz', false);
                              updatePageField('isSheet', false);
                            }
                          }}
                          className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex ${currentPage.isGame ? 'bg-violet-600 justify-end' : 'bg-slate-700 justify-start'}`}
                        >
                          <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                        </button>
                        <span className="text-xs font-black">{currentPage.isGame ? 'YA (GAME)' : 'TIDAK'}</span>
                      </div>
                    </div>

                    {/* Final Quiz Page Switch */}
                    <div className="flex flex-col space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Tipe Kuis Akhir?</span>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            const currentVal = !!currentPage.isFinalQuiz;
                            updatePageField('isFinalQuiz', !currentVal);
                            if (!currentVal) {
                              updatePageField('isGame', false);
                              updatePageField('isSheet', false);
                            }
                          }}
                          className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex ${currentPage.isFinalQuiz ? 'bg-violet-600 justify-end' : 'bg-slate-700 justify-start'}`}
                        >
                          <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                        </button>
                        <span className="text-xs font-black">{currentPage.isFinalQuiz ? 'YA (KUIS)' : 'TIDAK'}</span>
                      </div>
                    </div>

                    {/* Google Sheet Embed Switch */}
                    <div className="flex flex-col space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Embed Google Sheet?</span>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            const currentVal = !!currentPage.isSheet;
                            updatePageField('isSheet', !currentVal);
                            if (!currentVal) {
                              updatePageField('isGame', false);
                              updatePageField('isFinalQuiz', false);
                            }
                          }}
                          className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex ${currentPage.isSheet ? 'bg-violet-600 justify-end' : 'bg-slate-700 justify-start'}`}
                        >
                          <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                        </button>
                        <span className="text-xs font-black">{currentPage.isSheet ? 'YA (SHEET)' : 'TIDAK'}</span>
                      </div>
                    </div>

                    {/* Google Form Switch */}
                    <div className="flex flex-col space-y-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Embed Google Form?</span>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            const currentVal = !!currentPage.isForm;
                            updatePageField('isForm', !currentVal);
                          }}
                          className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex ${currentPage.isForm ? 'bg-violet-600 justify-end' : 'bg-slate-700 justify-start'}`}
                        >
                          <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                        </button>
                        <span className="text-xs font-black">{currentPage.isForm ? 'YA (FORM)' : 'TIDAK'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Standard Text Content Editor */}
                  {!currentPage.isGame && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                          <FileText size={12} className="text-violet-400" />
                          <span>Teks Materi Halaman (Bisa format Markdown / Tebal dengan **kata**)</span>
                        </label>
                        <span className="text-[9px] font-mono text-slate-500">{currentPage.content?.length || 0} karakter</span>
                      </div>
                      <textarea
                        value={currentPage.content || ''}
                        onChange={(e) => updatePageField('content', e.target.value)}
                        placeholder="Masukkan isi materi pelajaran disini..."
                        rows={10}
                        className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3.5 px-4 text-sm font-medium text-slate-200 outline-none focus:border-violet-500 transition-all leading-relaxed custom-scrollbar"
                      />
                    </div>
                  )}

                  {/* Google Sheet URLs */}
                  {currentPage.isSheet && (
                    <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl space-y-4">
                      <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <FileSpreadsheet size={14} />
                        <span>Pengaturan Google Sheet Tersemat (Embed)</span>
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tautan Web Google Sheet (Published web URL / Embed link)</label>
                        <input 
                          type="text"
                          value={currentPage.sheetUrl || ''}
                          onChange={(e) => updatePageField('sheetUrl', e.target.value)}
                          placeholder="https://docs.google.com/spreadsheets/d/e/2PACX-.../pubhtml?widget=true&headers=false"
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-mono text-slate-100 outline-none focus:border-emerald-500 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Google Form URLs */}
                  {currentPage.isForm && (
                    <div className="p-4 bg-sky-950/20 border border-sky-500/20 rounded-2xl space-y-4">
                      <h4 className="text-xs font-black text-sky-400 uppercase tracking-wider flex items-center gap-2">
                        <FileSpreadsheet size={14} />
                        <span>Pengaturan Google Form Tersemat (Embed)</span>
                      </h4>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tautan Formulir Google Form</label>
                        <input 
                          type="text"
                          value={currentPage.formUrl || ''}
                          onChange={(e) => updatePageField('formUrl', e.target.value)}
                          placeholder="https://docs.google.com/forms/d/e/1FAIpQLS.../viewform"
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-mono text-slate-100 outline-none focus:border-sky-500 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Media Links Editor (Images, Videos, Drive Folders) */}
                  {!currentPage.isGame && !currentPage.isFinalQuiz && (
                    <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-4">
                      <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={14} className="text-violet-400" />
                        <span>Link Gambar, Video & Folder Drive Penunjang</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                            <Image size={11} />
                            <span>Link Gambar / Poster (Direct Image URL)</span>
                          </label>
                          <input 
                            type="text"
                            value={currentPage.imageUrl || ''}
                            onChange={(e) => updatePageField('imageUrl', e.target.value)}
                            placeholder="https://i.ibb.co.com/..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-mono text-slate-100 outline-none focus:border-violet-500 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                            <Video size={11} />
                            <span>Link Video Pembelajaran (YouTube Embed / MP4)</span>
                          </label>
                          <input 
                            type="text"
                            value={currentPage.videoUrl || ''}
                            onChange={(e) => updatePageField('videoUrl', e.target.value)}
                            placeholder="https://www.youtube.com/embed/..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-mono text-slate-100 outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trigger/Kalimat Motivasi Atas</label>
                          <input 
                            type="text"
                            value={currentPage.triggerQuestion || ''}
                            onChange={(e) => updatePageField('triggerQuestion', e.target.value)}
                            placeholder="Kalimat pemantik sebelum teks utama..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-medium text-slate-100 outline-none focus:border-violet-500 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Prompt Salin ChatGPT/Gemini</label>
                          <input 
                            type="text"
                            value={currentPage.copyablePrompt || ''}
                            onChange={(e) => updatePageField('copyablePrompt', e.target.value)}
                            placeholder="Prompt teks yang bisa disalin siswa dengan sekali klik..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-medium text-slate-100 outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Google Drive Folder Switch & Link */}
                      <div className="border-t border-slate-800 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Embed Folder Google Drive?</span>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              type="button"
                              onClick={() => updatePageField('isDriveFolder', !currentPage.isDriveFolder)}
                              className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex ${currentPage.isDriveFolder ? 'bg-violet-600 justify-end' : 'bg-slate-700 justify-start'}`}
                            >
                              <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                            </button>
                            <span className="text-xs font-black">{currentPage.isDriveFolder ? 'YA' : 'TIDAK'}</span>
                          </div>
                        </div>

                        {currentPage.isDriveFolder && (
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tautan Folder Google Drive</label>
                            <input 
                              type="text"
                              value={currentPage.driveFolderUrl || ''}
                              onChange={(e) => updatePageField('driveFolderUrl', e.target.value)}
                              placeholder="https://drive.google.com/drive/folders/..."
                              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 px-4 text-xs font-mono text-slate-100 outline-none focus:border-violet-500 transition-all"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Page-Specific Challenge/Quiz Editor (Tantangan Halaman) */}
                  {!currentPage.isGame && !currentPage.isFinalQuiz && (
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle size={14} />
                          <span>Editor Pertanyaan Tantangan Halaman</span>
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400">Aktifkan Tantangan?</span>
                          <button
                            type="button"
                            onClick={() => {
                              if (currentPage.quiz) {
                                updatePageField('quiz', null);
                              } else {
                                updatePageField('quiz', {
                                  question: 'Apakah kamu sudah paham materi di atas?',
                                  options: [
                                    { id: 'YA', text: 'Sudah Paham!', isCorrect: true },
                                    { id: 'BELUM', text: 'Belum Paham', isCorrect: false }
                                  ]
                                });
                              }
                            }}
                            className={`w-12 h-6 rounded-full p-1 transition-all duration-300 flex ${currentPage.quiz ? 'bg-amber-500 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                          </button>
                        </div>
                      </div>

                      {currentPage.quiz && (
                        <div className="space-y-4 animate-in fade-in duration-200">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Kalimat Pertanyaan Tantangan</label>
                            <input 
                              type="text"
                              value={currentPage.quiz.question}
                              onChange={(e) => handleQuizQuestionChange(e.target.value)}
                              placeholder="Masukkan soal pertanyaan kuis disini..."
                              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-bold text-slate-100 outline-none focus:border-amber-500 transition-all"
                            />
                          </div>

                          {/* Options list */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Opsi Pilihan Ganda (Centang bulatan hijau untuk jawaban benar)</label>
                              <button
                                type="button"
                                onClick={addQuizOption}
                                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[10px] uppercase rounded-lg transition-all"
                              >
                                Tambah Opsi
                              </button>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                              {currentPage.quiz.options.map((opt, oIdx) => (
                                <div key={opt.id} className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
                                  {/* correct marker checkbox */}
                                  <button
                                    type="button"
                                    onClick={() => handleQuizOptionChange(oIdx, { isCorrect: true })}
                                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                      opt.isCorrect 
                                        ? 'bg-emerald-600 text-white' 
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                    }`}
                                    title={opt.isCorrect ? "Opsi Jawaban Benar" : "Jadikan Jawaban Benar"}
                                  >
                                    {opt.isCorrect ? <Check size={14} /> : opt.id}
                                  </button>

                                  <input 
                                    type="text"
                                    value={opt.text}
                                    onChange={(e) => handleQuizOptionChange(oIdx, { text: e.target.value })}
                                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg py-1.5 px-3 text-xs text-slate-200 outline-none focus:border-amber-500"
                                    placeholder="Teks Pilihan..."
                                  />

                                  {/* Custom redirect / message toggle for advanced workflows */}
                                  <input 
                                    type="text"
                                    value={opt.customMessage || ''}
                                    onChange={(e) => handleQuizOptionChange(oIdx, { customMessage: e.target.value })}
                                    className="w-1/4 bg-slate-900 border border-slate-700 rounded-lg py-1.5 px-3 text-[10px] text-slate-400 outline-none"
                                    placeholder="Pesan khusus..."
                                    title="Pesan pop-up jika opsi ini dipilih"
                                  />

                                  {currentPage.quiz!.options.length > 2 && (
                                    <button
                                      type="button"
                                      onClick={() => removeQuizOption(oIdx)}
                                      className="p-1.5 hover:bg-rose-600 text-rose-400 hover:text-white rounded-lg transition-all"
                                    >
                                      <Trash2 size={13} />
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. Final Quiz Questions Editor (If isFinalQuiz page) */}
                  {currentPage.isFinalQuiz && (
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-black text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                          <ListOrdered size={14} />
                          <span>Editor Kuis Akhir Modul (Daftar Soal Utama)</span>
                        </h3>
                        <button
                          type="button"
                          onClick={addFinalQuizQuestion}
                          className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white font-black text-xs uppercase rounded-xl transition-all flex items-center gap-1 shadow"
                        >
                          <Plus size={12} />
                          <span>Tambah Pertanyaan Kuis</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {(!currentPage.questions || currentPage.questions.length === 0) ? (
                          <div className="text-center py-6 text-slate-500 text-xs italic bg-slate-950 rounded-xl border border-dashed border-slate-800">
                            Belum ada soal kuis akhir. Silakan klik tombol 'Tambah Pertanyaan Kuis' di atas.
                          </div>
                        ) : (
                          currentPage.questions.map((q, qIdx) => (
                            <div key={q.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 relative group/question">
                              <button
                                type="button"
                                onClick={() => removeFinalQuizQuestion(qIdx)}
                                className="absolute right-4 top-4 opacity-0 group-hover/question:opacity-100 p-1.5 bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white rounded-xl transition-all"
                                title="Hapus Soal Kuis"
                              >
                                <Trash2 size={14} />
                              </button>

                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 bg-violet-950 border border-violet-800 text-violet-300 rounded-lg text-xs font-mono font-black">Soal {qIdx + 1}</span>
                                <input 
                                  type="text"
                                  value={q.question}
                                  onChange={(e) => handleFinalQuizQuestionChange(qIdx, 'question', e.target.value)}
                                  placeholder="Teks pertanyaan kuis akhir..."
                                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg py-1.5 px-3 text-xs font-bold text-slate-100 outline-none focus:border-violet-500"
                                />
                              </div>

                              {/* Answers Options Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {q.options.map((opt, oIdx) => {
                                  const isCorrect = q.correctId === opt.id;
                                  return (
                                    <div key={opt.id} className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-850">
                                      <button
                                        type="button"
                                        onClick={() => handleFinalQuizQuestionChange(qIdx, 'correctId', opt.id)}
                                        className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-all ${
                                          isCorrect 
                                            ? 'bg-emerald-600 text-white' 
                                            : 'bg-slate-850 text-slate-400 hover:bg-slate-800'
                                        }`}
                                        title={isCorrect ? "Opsi Jawaban Benar" : "Jadikan Jawaban Benar"}
                                      >
                                        {opt.id.toUpperCase()}
                                      </button>
                                      <input 
                                        type="text"
                                        value={opt.text}
                                        onChange={(e) => handleFinalQuizOptionChange(qIdx, oIdx, e.target.value)}
                                        placeholder={`Jawaban ${opt.id.toUpperCase()}`}
                                        className="flex-1 bg-transparent text-xs text-slate-200 outline-none border-b border-transparent focus:border-slate-700 py-0.5"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}

                  {/* FOOTER BAR: Save Button */}
                  <div className="border-t border-slate-800 pt-6 flex items-center justify-end">
                    <button
                      onClick={handleSaveCurrentModule}
                      disabled={saving}
                      className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-black rounded-2xl shadow-xl shadow-violet-900/30 flex items-center gap-2.5 active:scale-95 transition-all disabled:opacity-50"
                    >
                      {saving ? (
                        <>
                          <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                          <span>MENYIMPAN...</span>
                        </>
                      ) : (
                        <>
                          <Save size={18} />
                          <span>SIMPAN KE CLOUD FIRESTORE</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={`fixed bottom-6 right-6 px-6 py-4 rounded-2xl shadow-2xl border flex items-center gap-3 z-[100] ${
              toast.type === 'success' 
                ? 'bg-slate-900 border-emerald-500 text-emerald-400' 
                : 'bg-slate-900 border-rose-500 text-rose-400'
            }`}
          >
            {toast.type === 'success' ? <Check size={18} /> : <X size={18} />}
            <span className="text-xs font-black uppercase tracking-wider">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
