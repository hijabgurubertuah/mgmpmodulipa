import { STUDENT_CONFIG } from '../config/studentConfig';

/**
 * Layanan untuk mengambil daftar nama siswa secara dinamis
 * dari Google Spreadsheet yang dipublikasikan sebagai CSV,
 * atau dari cadangan lokal jika tidak ada koneksi.
 */
export const studentService = {
  /**
   * Mengambil nama siswa per kelas.
   * Format Google Sheet disarankan memiliki kolom pertama: Kelas, kolom kedua: Nama.
   */
  getStudents: async (): Promise<Record<string, string[]>> => {
    try {
      // Endpoint ekspor CSV dari spreadsheet yang dipublikasikan ke web
      const url = STUDENT_CONFIG.csvUrl;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000); // 6 detik batas waktu tunggu

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Gagal mengunduh berkas dari Google Sheets');
      }

      const text = await response.text();
      const lines = text.split(/\r?\n/);
      
      const data: Record<string, string[]> = {};

      // Proses setiap baris CSV (lewati baris judul pertama jika kolomnya "Kelas" dan "Nama")
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

          // Hindari memasukkan baris tajuk/header tabel
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

      // Pastikan kelas GURU selalu ada sebagai bypass untuk guru
      if (!data['GURU']) {
        data['GURU'] = ['GURUSMP'];
      } else if (!data['GURU'].includes('GURUSMP')) {
        data['GURU'].push('GURUSMP');
      }

      // Urutkan nama siswa di setiap kelas secara alfabetis
      Object.keys(data).forEach((kelas) => {
        data[kelas].sort();
      });

      console.log('Daftar siswa berhasil dimuat secara real-time dari Google Sheets!');
      return data;
    } catch (error) {
      console.warn(
        'Koneksi offline atau Google Sheet belum di-publish ke web. Menggunakan database lokal fallback:',
        error
      );
      return STUDENT_CONFIG.fallbackStudents;
    }
  }
};
