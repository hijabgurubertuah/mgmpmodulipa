import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, ExternalLink, ArrowLeft } from 'lucide-react';

interface RekapNilaiProps {
  onBack: () => void;
}

export const RekapNilai: React.FC<RekapNilaiProps> = ({ onBack }) => {
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1PQywXD1s-NPxnJPzw_vinTG-lvYn24FBQsLP-_LazeY/edit?usp=sharing";
  // Convert to embed URL for better viewing in iframe
  const embedUrl = "https://docs.google.com/spreadsheets/d/1PQywXD1s-NPxnJPzw_vinTG-lvYn24FBQsLP-_LazeY/preview";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-[2.5rem] border-2 border-white/60 shadow-xl space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-xl font-black text-slate-800">
            Rekap Nilai
          </h2>
          
          <a 
            href={spreadsheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-[10px] md:text-xs shadow-lg transition-all active:scale-95 shrink-0"
          >
            <span>BUKA REKAP</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="relative h-[800px] w-full bg-slate-100 rounded-3xl overflow-hidden border-4 border-slate-200/50 shadow-inner">
          <iframe 
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
};
