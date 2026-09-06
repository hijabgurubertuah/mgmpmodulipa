import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GardenDecorations } from './GardenDecorations';
import { studentService } from '../services/studentService';
import { RefreshCw } from 'lucide-react';

import { AppConfig } from '../types';

interface LoginProps {
  username: string;
  setUsername: (name: string) => void;
  userClass: string;
  setUserClass: (className: string) => void;
  onLogin: (e: React.FormEvent) => void;
  appConfig?: AppConfig;
}

/**
 * Login component with caching, dynamic ADMIN password conversion, and sleek rounded-2xl styling.
 */
export const Login: React.FC<LoginProps> = ({ username, setUsername, userClass, setUserClass, onLogin, appConfig }) => {
  const [studentDatabase, setStudentDatabase] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [refreshSuccess, setRefreshSuccess] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Load student list from Google Sheets / Local on mount
  useEffect(() => {
    studentService.getStudents().then((data) => {
      setStudentDatabase(data);
      setLoading(false);
      
      const savedTime = localStorage.getItem('ipa_student_database_last_updated');
      if (savedTime) {
        setLastUpdated(savedTime);
      }
    });
  }, []);

  // Handle forcing a dynamic sync from Google Sheets
  const handleRefresh = async () => {
    setIsRefreshing(true);
    setRefreshSuccess(false);
    try {
      const data = await studentService.getStudents(true); // forceRefresh = true
      setStudentDatabase(data);
      
      const savedTime = localStorage.getItem('ipa_student_database_last_updated');
      if (savedTime) {
        setLastUpdated(savedTime);
      }
      
      setRefreshSuccess(true);
      setTimeout(() => setRefreshSuccess(false), 3000); // Sembunyikan status sukses setelah 3 detik
    } catch (e) {
      console.error('Gagal menyegarkan data:', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Ambil daftar kelas secara dinamis dari database siswa
  const classes = Object.keys(studentDatabase)
    .filter(c => c !== 'GURU' && c !== 'ADMIN' && c !== 'TAMU') // Saring nama-nama kelas lama agar bersih
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  // Tambahkan 'TAMU' dan 'ADMIN' di akhir daftar kelas secara konsisten
  classes.push('TAMU');
  classes.push('ADMIN');

  // Handle class selection
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = e.target.value;
    setUserClass(selectedClass);
    if (selectedClass === 'TAMU') {
      setUsername('TAMU');
    } else {
      setUsername(''); // Reset nama yang terpilih saat ganti kelas
    }
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
                src={appConfig?.logoUrl || "https://i.ibb.co.com/kVLW5n61/logo-smpn-1-bengkalis-kecil-Copy.png"} 
                alt="Logo Sekolah" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h1 id="hero-title" className="text-xl md:text-3xl font-black leading-tight whitespace-pre-line text-center px-4" style={{ fontFamily: "'Playfair Display', serif", color: '#f3e8ff' }}>
              {appConfig?.loginTitle || "Selamat Datang \n di Modul Berkebun SMPN 1 Bengkalis"}
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
            <p id="hero-subtitle" className="text-sm md:text-base max-w-md leading-relaxed mx-auto px-4" style={{ color: '#d8b4fe', opacity: 0.8 }}>
              {appConfig?.loginQuote || "“Satu langkah kecil hari ini, Menyelamatkan hidup di masa depan”"}
            </p>
          </div>

          {/* Name & Class Dropdown Section */}
          <div className="fade-up-d3 mt-4 w-full max-w-xs md:max-w-sm">
            <form onSubmit={onLogin} className="flex flex-col gap-3">
              
              {/* Dropdown 1: Pilih Kelas (Rounded-2xl) */}
              <div className="relative">
                <select
                  value={userClass}
                  onChange={handleClassChange}
                  className="w-full px-6 py-4 rounded-2xl text-center text-lg font-semibold border-2 transition-all outline-none appearance-none cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#d8b4fe', color: '#410052' }}
                  required
                >
                  <option value="" disabled>{loading ? "MEMUAT KELAS..." : "PILIH KELAS"}</option>
                  {classes.map(c => (
                    <option key={c} value={c}>
                      {c === 'ADMIN' ? 'ADMIN' : c === 'TAMU' ? 'TAMU' : `KELAS ${c}`}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-violet-800">
                  ▼
                </div>
              </div>

              {/* Input 2: Pilih Nama Siswa atau Password jika ADMIN (Rounded-2xl) */}
              <div className="relative">
                {userClass === 'ADMIN' ? (
                  <input
                    type="password"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="KATA SANDI ADMIN"
                    className="w-full px-6 py-4 rounded-2xl text-center text-lg font-semibold border-2 transition-all outline-none"
                    style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#d8b4fe', color: '#410052' }}
                    required
                  />
                ) : (
                  <div className="relative">
                    <select
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-6 py-4 rounded-2xl text-center text-lg font-semibold border-2 transition-all outline-none appearance-none cursor-pointer disabled:opacity-60"
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
                )}
              </div>

              {/* Tombol MASUK (Rounded-2xl) */}
              <button 
                type="submit" 
                disabled={!username || !userClass}
                className="btn-garden pulse-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-xl font-bold tracking-wide mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)', color: '#fff', border: 'none', cursor: 'pointer' }}
              > 
                <span>MASUK</span> 
              </button>

              {/* Tombol Segarkan Data (Rounded-2xl) */}
              <div className="flex flex-col items-center gap-1.5 mt-3 pt-2 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 text-xs font-black text-violet-300 hover:text-white transition-all cursor-pointer bg-white/5 hover:bg-white/10 active:scale-95 disabled:opacity-50 px-4 py-2 rounded-2xl"
                >
                  <RefreshCw size={12} className={isRefreshing ? 'animate-spin' : ''} />
                  <span>
                    {isRefreshing 
                      ? 'MEMPERBARUI DATA...' 
                      : refreshSuccess 
                        ? 'DATA BERHASIL DISINKRONKAN!' 
                        : 'SEGARKAN DAFTAR NAMA'
                    }
                  </span>
                </button>
                {lastUpdated && (
                  <span className="text-[10px] text-violet-400 opacity-80 italic">
                    Pembaruan Terakhir: {lastUpdated}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Tagline */}
          <p id="tagline" className="fade-up-d3 mt-8 text-sm tracking-widest uppercase" style={{ color: '#d8b4fe', opacity: 0.6 }}>
            🍇 Kembali ke Alam 🍇
          </p>
          <p className="fade-up-d3 mt-2 text-[10px] font-bold tracking-wide" style={{ color: '#d8b4fe' }}>
            {appConfig?.loginTagline || "Copyright SMPN 1 BENGKALIS"}
          </p>
        </div>
      </main>
    </div>
  );
};
