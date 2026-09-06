import { STUDENT_CONFIG } from '../config/studentConfig';

/**
 * Layanan untuk mengambil daftar nama siswa secara dinamis
 * dari Google Spreadsheet dengan sistem penyimpanan lokal (cache)
 * agar menghemat kuota internet dan mempercepat proses masuk.
 */
export const studentService = {
  /**
   * Mengambil nama siswa per kelas.
   * @param forceRefresh jika true, memaksa sistem mengunduh ulang dari Google Sheets dan memperbarui cache.
   */
  getStudents: async (forceRefresh: boolean = false): Promise<Record<string, string[]>> => {
    // 1. Jika tidak dipaksa segarkan, coba ambil dari penyimpanan lokal (cache) terlebih dahulu
    if (!forceRefresh) {
      const cached = localStorage.getItem('ipa_student_database');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Object.keys(parsed).length > 0) {
            console.log('Memuat daftar siswa dari penyimpanan lokal (Cache) - Hemat Kuota Internet.');
            return parsed;
          }
        } catch (e) {
          console.error('Gagal memproses cache siswa, mengunduh ulang...', e);
        }
      }
    }

    // 2. Ambil data terbaru dari Google Sheets (jika cache kosong atau tombol Segarkan diklik)
    try {
      const url = STUDENT_CONFIG.csvUrl;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 detik batas waktu tunggu

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Gagal mengunduh data terbaru dari Google Sheets');
      }

      const text = await response.text();
      const lines = text.split(/\r?\n/);
      const data: Record<string, string[]> = {};

      // Proses penguraian CSV
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Pisahkan kolom menggunakan koma atau titik koma (regional Indonesia)
        let parts = line.split(',');
        if (parts.length < 2) {
          parts = line.split(';');
        }

        if (parts.length >= 2) {
          const rawKelas = parts[0].trim().replace(/^["']|["']$/g, '').toUpperCase();
          const rawNama = parts[1].trim().replace(/^["']|["']$/g, '').toUpperCase();

          // Hindari baris judul/header
          if (
            rawKelas === 'KELAS' || 
            rawNama === 'NAMA' || 
            rawNama === 'NAMA LENGKAP' ||
            !rawKelas || 
            !rawNama
          ) {
            continue;
          }

          if (!data[rawKelas]) {
            data[rawKelas] = [];
          }
          if (!data[rawKelas].includes(rawNama)) {
            data[rawKelas].push(rawNama);
          }
        }
      }

      // Pastikan hak akses bypass ADMIN selalu ada
      if (!data['ADMIN']) {
        data['ADMIN'] = ['GURUSMP'];
      } else if (!data['ADMIN'].includes('GURUSMP')) {
        data['ADMIN'].push('GURUSMP');
      }

      // Urutkan nama alfabetis per kelas
      Object.keys(data).forEach((kelas) => {
        data[kelas].sort();
      });

      // Simpan data terbaru ke dalam cache dan hapus data lama agar tidak bentrok
      localStorage.setItem('ipa_student_database', JSON.stringify(data));
      localStorage.setItem('ipa_student_database_last_updated', new Date().toLocaleString('id-ID'));

      console.log('Cache daftar siswa berhasil diperbarui dengan data spreadsheet terbaru.');
      return data;
    } catch (error) {
      console.warn('Gagal menghubungi Google Sheets. Mencoba memuat cache lama...', error);

      // Jika gagal ambil data baru (misal sedang offline), gunakan cache lama jika ada
      const cached = localStorage.getItem('ipa_student_database');
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch (e) {}
      }

      // Jika benar-benar kosong, gunakan nama fallback bawaan aplikasi
      return STUDENT_CONFIG.fallbackStudents;
    }
  }
};
