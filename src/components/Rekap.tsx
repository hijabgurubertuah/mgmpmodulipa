import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  FileSpreadsheet, 
  GraduationCap, 
  BookOpen, 
  ClipboardList, 
  AlertCircle 
} from 'lucide-react';
import { Theme } from '../types';
import { ThemeButton } from './ThemeButton';

interface RekapProps {
  onBack: () => void;
  theme: Theme;
}

const darkenColor = (hex: string, amount: number = 0.25) => {
  if (!hex || !hex.startsWith('#')) return hex;
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  r = Math.max(0, Math.floor(r * (1 - amount)));
  g = Math.max(0, Math.floor(g * (1 - amount)));
  b = Math.max(0, Math.floor(b * (1 - amount)));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export const Rekap: React.FC<RekapProps> = ({ onBack, theme }) => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const MODULES_CONFIG = [
    {
      id: 1,
      title: "Nilai Modul 1",
      subtitle: "Mengapa Berkebun itu Penting?",
      sheetUrl: "https://docs.google.com/spreadsheets/d/1PQywXD1s-NPxnJPzw_vinTG-lvYn24FBQsLP-_LazeY/edit?usp=sharing",
      embedUrl: "https://docs.google.com/spreadsheets/d/1PQywXD1s-NPxnJPzw_vinTG-lvYn24FBQsLP-_LazeY/preview",
      available: true
    },
    {
      id: 2,
      title: "Nilai Modul 2",
      subtitle: "Mengenal Tanaman Sayuran",
      sheetUrl: "https://docs.google.com/spreadsheets/d/1BzZ1lxqbmbY36KLjKMpIdItHvcj0S4RR2CgXVhf8f3w/edit?usp=sharing",
      embedUrl: "https://docs.google.com/spreadsheets/d/1BzZ1lxqbmbY36KLjKMpIdItHvcj0S4RR2CgXVhf8f3w/preview",
      available: true
    },
    {
      id: 3,
      title: "Nilai Modul 3",
      subtitle: "Membuat Kompos",
      sheetUrl: "https://docs.google.com/spreadsheets/d/1xj49kl2EsjWO6Fl01-7oKZLh2IBzyLJLx0vezWRXibk/edit?usp=sharing",
      embedUrl: "https://docs.google.com/spreadsheets/d/1xj49kl2EsjWO6Fl01-7oKZLh2IBzyLJLx0vezWRXibk/preview",
      available: true
    },
    { id: 4, title: "Nilai Modul 4", subtitle: "Perawatan Tanaman Sawi", available: false },
    { id: 5, title: "Nilai Modul 5", subtitle: "Kendala & Hama Penyakit Sawi", available: false },
    { id: 6, title: "Nilai Modul 6", subtitle: "Panen & Pascapanen Sawi", available: false },
    { id: 7, title: "Nilai Modul 7", subtitle: "Pascapanen & Pengolahan Hasil Sawi", available: false },
    { id: 8, title: "Nilai Modul 8", subtitle: "Rencana Usaha Kelompok", available: false }
  ];

  const currentModuleData = selectedModule ? MODULES_CONFIG.find(m => m.id === selectedModule) : null;
  const darkThemeColor = darkenColor(theme.bgMain, 0.25);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 pb-12">
      <AnimatePresence mode="wait">
        {selectedModule === null ? (
          // GRID SELECTION VIEW (MINIMIZED)
          <motion.div
            key="grid-selection"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-4"
          >
            {/* Header Card (Minimized) */}
            <div className="bg-white/85 backdrop-blur-md p-4 rounded-2xl border-2 border-white/60 shadow-lg text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-100" style={{ color: theme.bgMain }}>
                  <ClipboardList size={22} />
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight text-slate-950">
                    Rekap Nilai Siswa
                  </h1>
                </div>
              </div>
            </div>

            {/* Modules Grid (Minimized & Highly Compact) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MODULES_CONFIG.map((mod) => (
                <motion.div
                  key={mod.id}
                  whileHover={mod.available ? { scale: 1.02 } : {}}
                  whileTap={mod.available ? { scale: 0.98 } : {}}
                  onClick={() => {
                    if (mod.available) {
                      setSelectedModule(mod.id);
                    }
                  }}
                  className={`bg-white/85 backdrop-blur-sm p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all group ${
                    mod.available 
                      ? 'border-white/60 hover:border-white/90 cursor-pointer shadow-md hover:shadow-xl' 
                      : 'border-slate-100/40 opacity-50 cursor-not-allowed select-none'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white shrink-0 shadow-sm relative overflow-hidden"
                      style={{
                        background: mod.available 
                          ? `linear-gradient(135deg, ${theme.bgMain}, ${darkThemeColor})`
                          : 'linear-gradient(135deg, #cbd5e1, #94a3b8)'
                      }}
                    >
                      {mod.id}
                    </div>

                    <div className="space-y-0.5 min-w-0 pr-1">
                      <h4 className="font-black text-sm text-slate-800 leading-tight group-hover:text-emerald-750 transition-colors truncate">
                        {mod.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-bold truncate">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center pl-2">
                    {mod.available ? (
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-slate-50 border group-hover:bg-white group-hover:shadow-sm"
                        style={{ color: theme.bgMain }}
                      >
                        <FileSpreadsheet size={15} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100">
                        <AlertCircle size={14} className="text-slate-300" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          // INDIVIDUAL EMBED VIEW (MINIMIZED)
          <motion.div
            key="sheet-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-4"
          >
            {/* Navigation Card (Minimized) */}
            <div className="bg-white/85 backdrop-blur-md p-4 rounded-xl border-2 border-white/60 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base shadow-md shrink-0 animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${theme.bgMain}, ${darkThemeColor})`
                    }}
                  >
                    {currentModuleData?.id}
                  </div>
                  <div>
                    <h2 className="text-base font-black text-slate-800 leading-tight">
                      {currentModuleData?.title} 
                    </h2>
                    <p className="text-[11px] font-bold text-slate-500">
                      {currentModuleData?.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="px-3.5 py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all active:scale-95 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft size={13} />
                    <span>Ganti Modul</span>
                  </button>

                  <a
                    href={currentModuleData?.sheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all active:scale-95 text-white flex items-center justify-center gap-1.5 shadow-sm"
                    style={{
                      backgroundColor: theme.bgMain,
                      background: `linear-gradient(135deg, ${theme.bgMain}, ${darkThemeColor})`
                    }}
                  >
                    <span>Sheets</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Embed Loader & Container */}
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border-2 border-white/60 shadow-lg overflow-hidden relative">
              <div className="relative h-[680px] w-full bg-slate-50 rounded-xl overflow-hidden border-2 border-slate-100 shadow-inner flex items-center justify-center">
                
                {/* Loader Placeholder behind the iframe */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 pointer-events-none z-0">
                  <div 
                    className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-emerald-500 animate-spin"
                    style={{ borderTopColor: theme.bgMain }}
                  />
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest animate-pulse">
                    Memuat Lembar Nilai...
                  </p>
                </div>

                {/* Substantially sized iframe */}
                <iframe 
                  src={currentModuleData?.embedUrl}
                  className="absolute inset-0 w-full h-full border-0 z-10 rounded-xl"
                  allowFullScreen
                  title={`Lembar Nilai ${currentModuleData?.title}`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
