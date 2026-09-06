/**
 * Konfigurasi daftar siswa untuk aplikasi Modul Berkebun.
 * Anda dapat mengunggah daftar nama siswa ke Google Sheet,
 * lalu mempublikasikannya ke Web sebagai CSV untuk sinkronisasi otomatis.
 */
export const STUDENT_CONFIG = {
  // Tautan hasil publikasi web Google Sheets Anda dalam format CSV
  csvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRKazKDvhYbrP6KqRAkaLPrhwH1Y1NXN1Tl6km1yx5Ieoon623UPX0nhKATK8o6bqeBqGHGqpl7j0eI/pub?gid=0&single=true&output=csv',

  // Daftar nama siswa cadangan (Fallback) jika internet offline atau Google Sheet tidak dapat diakses
  fallbackStudents: {
    '8A': [
      'AHMAD ALFIAN',
      'ALYA RACHMAWATI',
      'BIMA SAPUTRA',
      'CHELSEA OLIVIA',
      'DWI CAHYO',
      'ELSA PUTRI',
      'FARHAN NUGRAHA',
      'GITA LESTARI',
      'HAFIDZ ARDIANSYAH',
      'INDRA KUSUMA'
    ],
    '8B': [
      'ADITYA PRATAMA',
      'ANNISA PUTRI',
      'BAGAS KARA',
      'DIAN LESTARI',
      'FAJAR SHIDIQ',
      'HANA AMALIA',
      'IHSAN MAULANA',
      'JESSICA VALENTINA',
      'KURNIAWAN',
      'LAILA RAMADHANI'
    ],
    '8C': [
      'AGUNG WIJAYA',
      'BELLA SAFIRA',
      'CANDRA WIJAYA',
      'DEWI SRI',
      'FAUZAN AZHIMA',
      'HENDRIX WONG',
      'INTAN PERMATA',
      'MUHAMMAD RIFQI',
      'NABILAH APRILLIA',
      'PUTRI AYU'
    ],
    '8D': [
      'ANDIKA PRATAMA',
      'CITRA LESTARI',
      'DIMAS PRADITYA',
      'EVI RAHMAWATI',
      'GILANG RAMADHAN',
      'IKHSAN NUL HAKIM',
      'NURUL HIDAYAH',
      'RIZKY AMALIA',
      'TEGAR SANTOSO',
      'ZAHRA AULIA'
    ],
    '8E': [
      'ARYA DWIPANGGA',
      'DESI RATNASARI',
      'ENDANG SETIOWATI',
      'FITRIANI',
      'HIDAYATULLAH',
      'IKAL MAULANA',
      'KARTIKA SARI',
      'MUHAMMAD ALIF',
      'RINI HANDAYANI',
      'YUSUF MAULANA'
    ],
    '8F': [
      'BAGUS SETIAWAN',
      'DHEA ANANDA',
      'FAJAR RAMADHAN',
      'INDAH PERMATASARI',
      'MOHAMMAD RIZAL',
      'NUR HALIZAH',
      'REZA ADITYA',
      'SITI AISYAH',
      'TRI WULANDARI',
      'WIDYA ASTUTI'
    ],
    '8G': [
      'ALDI MAULANA',
      'CINDY CLAUDIA',
      'FACHRI ALBAR',
      'INDAH CAHYANI',
      'MOHAMMAD REZA',
      'NURUL AZMI',
      'RENDI SAPUTRA',
      'SITI FATIMAH',
      'TIARA DEWI',
      'YUDHA PRATAMA'
    ],
    '8H': [
      'BAYU ADJI',
      'DENI SETIAWAN',
      'FARADILA',
      'IKHLASUL AMAL',
      'MOHAMMAD ILHAM',
      'NURUL IMAN',
      'RIAN HIDAYAT',
      'SRI WAHYUNI',
      'TITO ADITYA',
      'ZULKIFLI'
    ],
    '8I': [
      'BUDI SANTOSO',
      'DEVI ARIYANTI',
      'FEBRIYANTO',
      'IRFAN MAULANA',
      'MOHAMMAD YUSUF',
      'NURUL KHASANAH',
      'RIZAL EFENDI',
      'SITI KHODIJAH',
      'TAUFIK HIDAYAT',
      'ZULFA'
    ],
    'ADMIN': [
      'GURUSMP'
    ]
  } as Record<string, string[]>
};
