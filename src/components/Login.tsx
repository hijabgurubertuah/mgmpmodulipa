import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GardenDecorations } from './GardenDecorations';
import { studentService } from '../services/studentService';

interface LoginProps {
  username: string;
  setUsername: (name: string) => void;
  userClass: string;
  setUserClass: (className: string) => void;
  onLogin: (e: React.FormEvent) => void;
}

/**
 * Login component for the name selection dropdown screen.
 */
export const Login: React.FC<LoginProps> = ({ username, setUsername, userClass, setUserClass, onLogin }) => {
  const [studentDatabase, setStudentDatabase] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState<boolean>(true);

  // Load student list from Google Sheets / Local on mount
  useEffect(() => {
    studentService.getStudents().then((data) => {
      setStudentDatabase(data);
      setLoading(false);
    });
  }, []);

  // Ambil daftar kelas secara dinamis dari database siswa
  const classes = Object.keys(studentDatabase).sort((a, b) => {
    if (a === 'GURU') return 1;
    if (b === 'GURU') return -1;
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });

  // Handle class selection
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = e.target.value;
    setUserClass(selectedClass);
    setUsername(''); // Reset nama yang terpilih saat ganti kelas
  };

  const studentNamesInClass = userClass ? (studentDatabase[userClass] || []) : [];

  return (
    <div id="app-wrapper" className="w-full h-screen overflow-hidden relative leaf-pattern" style={{ background: '#410052', fontFamily: "'Nunito', sans-serif" }}>
      <GardenDecorations />
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="bg-black/20 backdrop-blur-md p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl max-w-xl w-full flex flex-col items-center">
          
          {/* Title */}
          <div className="fade-up-d1 flex flex-col items-center gap-3 mb-4">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ perspective: 1000 }}
            >
              <img 
                src="https://i.ibb.co.com/kVLW5n61/logo-smpn-1-bengkalis-kecil-Copy.png" 
                alt="Logo SMPN 1 Bengkalis" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h1 id="hero-title" className="text-xl md:text-3xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#f3e8ff' }}>
              Selamat Datang <br/> di Modul Berkebun SMPN 1 Bengkalis
            </h1>
          </div>

          {/* Decorative line */}
          <div className="fade-up-d1 flex items-center gap-3 my-2">
            <div style={{ background: '#d8b4fe', height: '2px', width: '40px', borderRadius: '2px' }}></div>
            <span className="text-lg">🍇</span>
            <div style={{ background: '#d8b4fe', height: '2px', width: '40px', borderRadius: '2px' }}></div>
          </div>

          {/* Subtitle */}
          <div className="fade-up-d2 space-y-1">
            <p id="hero-subtitle" className="text-sm md:text-base max-w-md leading-relaxed mx-auto" style={{ color: '#d8b4fe', opacity: 0.8 }}>
              “Satu langkah kecil hari ini, Menyelamatkan hidup di masa depan”
            </p>
          </div>

          {/* Name & Class Dropdown Section */}
          <div className="fade-up-d3 mt-4 w-full max-w-xs md:max-w-sm">
            <form onSubmit={onLogin} className="flex flex-col gap-3">
              
              {/* Dropdown 1: Pilih Kelas */}
              <div className="relative">
                <select
                  value={userClass}
                  onChange={handleClassChange}
                  className="w-full px-6 py-4 rounded-full text-center text-lg font-semibold border-2 transition-all outline-none appearance-none cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#d8b4fe', color: '#410052' }}
                  required
                >
                  <option value="" disabled>{loading ? "MEMUAT KELAS..." : "PILIH KELAS"}</option>
                  {classes.map(c => (
                    <option key={c} value={c}>{c === 'GURU' ? 'GURU' : `KELAS ${c}`}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-violet-800">
                  ▼
                </div>
              </div>

              {/* Dropdown 2: Pilih Nama Siswa */}
              <div className="relative">
                <select
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-center text-lg font-semibold border-2 transition-all outline-none appearance-none cursor-pointer disabled:opacity-60"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#d8b4fe', color: '#410052' }}
                  required
                  disabled={!userClass || loading}
                >
                  <option value="" disabled>
                    {!userClass 
                      ? "PILIH KELAS TERLEBIH DAHULU" 
                      : loading 
                        ? "MEMUAT DAFTAR NAMA..." 
                        : "PILIH NAMA ANDA"
                    }
                  </option>
                  {studentNamesInClass.map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-violet-800">
                  ▼
                </div>
              </div>

              {/* Tombol MASUK */}
              <button 
                type="submit" 
                disabled={!username || !userClass}
                className="btn-garden pulse-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xl font-bold tracking-wide mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)', color: '#fff', border: 'none', cursor: 'pointer' }}
              > 
                <span>MASUK</span> 
              </button>
            </form>
          </div>

          {/* Tagline */}
          <p id="tagline" className="fade-up-d3 mt-8 text-sm tracking-widest uppercase" style={{ color: '#d8b4fe', opacity: 0.6 }}>
            🍇 Kembali ke Alam 🍇
          </p>
          <p className="fade-up-d3 mt-2 text-[10px] font-bold tracking-wide" style={{ color: '#d8b4fe' }}>
            Copyright SMPN 1 BENGKALIS
          </p>
        </div>
      </main>
    </div>
  );
};
