
export interface Question {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  correctId: string;
}

export interface QuizModuleConfig {
  title: string;
  formId: string;
  entryMapping?: {
    name: string;
    userClass: string;
    quizName: string;
    score: string;
    date?: string;
  };
  questions: Question[];
}

export const QUIZ_MODULE_CONFIGS: Record<number, QuizModuleConfig> = {
  1: {
    title: "Pentingnya Berkebun",
    formId: '1FAIpQLScPEq4lH7-oyl_HypqoWOmOK_8cnynrzXcouHuTwI29u8es2A', 
    questions: [
      {
        id: 1,
        question: "Istilah untuk perjalanan makanan dari awal hingga ke konsumen adalah...",
        options: [
          { id: 'A', text: "Distribusi" },
          { id: 'B', text: "Rantai pangan" },
          { id: 'C', text: "Produksi" },
          { id: 'D', text: "Konsumsi" }
        ],
        correctId: 'B'
      },
      {
        id: 2,
        question: "Rantai pangan dimulai dari...",
        options: [
          { id: 'A', text: "Konsumen" },
          { id: 'B', text: "Pedagang" },
          { id: 'C', text: "Petani" },
          { id: 'D', text: "Distributor" }
        ],
        correctId: 'C'
      },
      {
        id: 3,
        question: "Rantai pangan disebut rapuh karena...",
        options: [
          { id: 'A', text: "Mudah rusak" },
          { id: 'B', text: "Bergantung pada banyak faktor dan bisa terganggu" },
          { id: 'C', text: "Makanannya sedikit" },
          { id: 'D', text: "Harganya mahal" }
        ],
        correctId: 'B'
      },
      {
        id: 4,
        question: "Contoh gangguan rantai pangan adalah...",
        options: [
          { id: 'A', text: "Panen berhasil" },
          { id: 'B', text: "Banjir menghambat distribusi" },
          { id: 'C', text: "Harga stabil" },
          { id: 'D', text: "Pasar ramai" }
        ],
        correctId: 'B'
      },
      {
        id: 5,
        question: "Dampak utama gangguan rantai pangan adalah...",
        options: [
          { id: 'A', text: "Makanan berlebih" },
          { id: 'B', text: "Makanan sulit didapat" },
          { id: 'C', text: "Harga murah" },
          { id: 'D', text: "Distribusi cepat" }
        ],
        correctId: 'B'
      },
      {
        id: 6,
        question: "Ketahanan pangan keluarga berarti...",
        options: [
          { id: 'A', text: "Menyimpan makanan" },
          { id: 'B', text: "Membeli makanan" },
          { id: 'C', text: "Mampu memenuhi kebutuhan pangan sendiri" },
          { id: 'D', text: "Menjual makanan" }
        ],
        correctId: 'C'
      },
      {
        id: 7,
        question: "Peristiwa yang menunjukkan pentingnya ketahanan pangan adalah...",
        options: [
          { id: 'A', text: "Liburan" },
          { id: 'B', text: "Pandemi COVID-19" },
          { id: 'C', text: "Panen raya" },
          { id: 'D', text: "Diskon pasar" }
        ],
        correctId: 'B'
      },
      {
        id: 8,
        question: "Keluarga yang memiliki kebun sendiri saat krisis akan...",
        options: [
          { id: 'A', text: "Panik" },
          { id: 'B', text: "Bergantung pada bantuan" },
          { id: 'C', text: "Lebih tenang" },
          { id: 'D', text: "Tidak makan" }
        ],
        correctId: 'C'
      },
      {
        id: 9,
        question: "Menanam di rumah melatih...",
        options: [
          { id: 'A', text: "Konsumsi" },
          { id: 'B', text: "Kemandirian pangan" },
          { id: 'C', text: "Perdagangan" },
          { id: 'D', text: "Transportasi" }
        ],
        correctId: 'B'
      },
      {
        id: 10,
        question: "Dalam Islam, menanam tanaman bernilai...",
        options: [
          { id: 'A', text: "Hiburan" },
          { id: 'B', text: "Sedekah" },
          { id: 'C', text: "Kewajiban mutlak" },
          { id: 'D', text: "Permainan" }
        ],
        correctId: 'B'
      },
      {
        id: 11,
        question: "Jika tanaman dimakan makhluk lain, maka...",
        options: [
          { id: 'A', text: "Rugi" },
          { id: 'B', text: "Tidak berpengaruh" },
          { id: 'C', text: "Mendapat pahala" },
          { id: 'D', text: "Dosa" }
        ],
        correctId: 'C'
      },
      {
        id: 12,
        question: "“Hidup dari alam” dalam budaya Melayu berarti...",
        options: [
          { id: 'A', text: "Tinggal di alam" },
          { id: 'B', text: "Bergantung pada alam untuk kebutuhan hidup" },
          { id: 'C', text: "Bermain di alam" },
          { id: 'D', text: "Menghindari kota" }
        ],
        correctId: 'B'
      },
      {
        id: 13,
        question: "Menanam dua tanaman dalam satu pot disebut...",
        options: [
          { id: 'A', text: "Rotasi tanaman" },
          { id: 'B', text: "Hidroponik" },
          { id: 'C', text: "Tumpang sari" },
          { id: 'D', text: "Monokultur" }
        ],
        correctId: 'C'
      },
      {
        id: 14,
        question: "Sawi dipilih karena...",
        options: [
          { id: 'A', text: "Mahal" },
          { id: 'B', text: "Cepat panen" },
          { id: 'C', text: "Sulit dirawat" },
          { id: 'D', text: "Tidak butuh air" }
        ],
        correctId: 'B'
      },
      {
        id: 15,
        question: "Cabai dipilih karena...",
        options: [
          { id: 'A', text: "Cepat panen" },
          { id: 'B', text: "Tidak perlu dirawat" },
          { id: 'C', text: "Berbuah dalam jangka panjang" },
          { id: 'D', text: "Murah" }
        ],
        correctId: 'C'
      },
      {
        id: 16,
        question: "Dalam satu pot, posisi cabai sebaiknya di...",
        options: [
          { id: 'A', text: "Pinggir" },
          { id: 'B', text: "Tengah pot" },
          { id: 'C', text: "Luar pot" },
          { id: 'D', text: "Atas tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 17,
        question: "Posisi sawi dalam pot adalah...",
        options: [
          { id: 'A', text: "Tengah" },
          { id: 'B', text: "Pinggir pot" },
          { id: 'C', text: "Di luar" },
          { id: 'D', text: "Di bawah" }
        ],
        correctId: 'B'
      },
      {
        id: 18,
        question: "Tujuan utama tumpang sari sawi dan cabai adalah...",
        options: [
          { id: 'A', text: "Menghemat pot" },
          { id: 'B', text: "Hasil cepat dan jangka panjang sekaligus" },
          { id: 'C', text: "Mengurangi air" },
          { id: 'D', text: "Memperindah pot" }
        ],
        correctId: 'B'
      },
      {
        id: 19,
        question: "Jika rantai pangan terputus, solusi paling tepat adalah...",
        options: [
          { id: 'A', text: "Menunggu bantuan" },
          { id: 'B', text: "Membeli lebih banyak" },
          { id: 'C', text: "Menanam sendiri sebagian kebutuhan pangan" },
          { id: 'D', text: "Tidak makan" }
        ],
        correctId: 'C'
      },
      {
        id: 20,
        question: "Manfaat utama dari proyek menanam ini adalah...",
        options: [
          { id: 'A', text: "Nilai sekolah" },
          { id: 'B', text: "Hiburan" },
          { id: 'C', text: "Keterampilan hidup mandiri" },
          { id: 'D', text: "Popularitas" }
        ],
        correctId: 'C'
      }
    ]
  },
  // Placeholders for modules 2-8
  2: { 
    title: "Ayo Berkebun di Bengkalis", 
    formId: '1FAIpQLScCGTABZ1WEovtAL87d8VUFFOEXSj4WAANqannrJlIc_CXXrw', 
    entryMapping: {
      name: 'entry.111012139',
      userClass: 'entry.1530135141',
      quizName: 'entry.283943708',
      score: 'entry.1757966967'
    },
    questions: [
      {
        id: 1,
        question: "Mengapa kenaikan harga BBM dapat menyebabkan harga bahan makanan di Bengkalis ikut meningkat?",
        options: [
          { id: 'A', text: "Karena sebagian besar kebutuhan pangan Bengkalis dikirim melalui jalur laut yang bergantung pada biaya bahan bakar" },
          { id: 'B', text: "Karena masyarakat Bengkalis lebih banyak membeli makanan dari luar negeri" },
          { id: 'C', text: "Karena tanaman di Bengkalis hanya dapat tumbuh saat harga BBM stabil" },
          { id: 'D', text: "Karena kapal pengangkut bahan pangan tidak memerlukan biaya operasional lain" }
        ],
        correctId: 'A'
      },
      {
        id: 2,
        question: "Apa risiko utama jika pengiriman barang dari daratan Sumatera terhenti sementara?",
        options: [
          { id: 'A', text: "Produksi kapal di Bengkalis akan meningkat" },
          { id: 'B', text: "Persediaan kebutuhan pokok masyarakat dapat terganggu" },
          { id: 'C', text: "Semua masyarakat akan langsung beralih menjadi petani" },
          { id: 'D', text: "Harga hasil kebun otomatis turun drastis" }
        ],
        correctId: 'B'
      },
      {
        id: 3,
        question: "Mengapa nenek moyang Melayu tetap menanam tanaman pangan di sekitar rumah?",
        options: [
          { id: 'A', text: "Karena hasil kebun selalu lebih mahal daripada barang pasar" },
          { id: 'B', text: "Karena berkebun membantu menjaga ketersediaan pangan keluarga dalam berbagai keadaan" },
          { id: 'C', text: "Karena masyarakat dahulu belum mengenal perdagangan sama sekali" },
          { id: 'D', text: "Karena semua tanaman wajib ditanam di halaman rumah adat Melayu" }
        ],
        correctId: 'B'
      },
      {
        id: 4,
        question: "Makna perkataan “Tanah tidak pernah ingkar janji” adalah …",
        options: [
          { id: 'A', text: "tanah dapat menghasilkan manfaat jika dirawat dan dimanfaatkan dengan baik" },
          { id: 'B', text: "tanah selalu memberikan panen melimpah tanpa perawatan" },
          { id: 'C', text: "setiap orang wajib memiliki kebun yang luas" },
          { id: 'D', text: "hasil kebun lebih penting daripada perdagangan" }
        ],
        correctId: 'A'
      },
      {
        id: 5,
        question: "Mengapa berkebun dianggap mencerminkan kemandirian dalam budaya Melayu?",
        options: [
          { id: 'A', text: "Karena berkebun menunjukkan kemampuan seseorang memenuhi sebagian kebutuhan hidupnya sendiri" },
          { id: 'B', text: "Karena orang yang berkebun tidak membutuhkan bantuan siapa pun" },
          { id: 'C', text: "Karena semua masyarakat Melayu bekerja sebagai petani" },
          { id: 'D', text: "Karena hasil kebun selalu cukup untuk dijual setiap hari" }
        ],
        correctId: 'A'
      },
      {
        id: 6,
        question: "Pepatah “Alam terkembang jadi guru” mengajarkan bahwa …",
        options: [
          { id: 'A', text: "alam harus dimanfaatkan sebanyak mungkin tanpa batas" },
          { id: 'B', text: "manusia dapat memperoleh pelajaran hidup melalui pengamatan terhadap alam" },
          { id: 'C', text: "semua ilmu pengetahuan berasal dari pekerjaan berkebun" },
          { id: 'D', text: "alam hanya berguna bagi masyarakat desa" }
        ],
        correctId: 'B'
      },
      {
        id: 7,
        question: "Singkong dianggap penting sebagai cadangan pangan karena …",
        options: [
          { id: 'A', text: "umbinya dapat tumbuh tanpa air sama sekali" },
          { id: 'B', text: "tanaman ini mampu bertahan pada kondisi panas maupun genangan air" },
          { id: 'C', text: "singkong hanya cocok ditanam di wilayah rawa" },
          { id: 'D', text: "seluruh bagian tanaman singkong tidak dapat dimanfaatkan" }
        ],
        correctId: 'B'
      },
      {
        id: 8,
        question: "Mengapa kangkung dan bayam sering dipilih untuk kebun rumah?",
        options: [
          { id: 'A', text: "Karena masa tumbuhnya relatif cepat dan dapat dipanen lebih dari sekali" },
          { id: 'B', text: "Karena membutuhkan pupuk kimia dalam jumlah besar" },
          { id: 'C', text: "Karena hanya cocok tumbuh di lahan luas" },
          { id: 'D', text: "Karena tidak membutuhkan sinar matahari" }
        ],
        correctId: 'A'
      },
      {
        id: 9,
        question: "Apa persamaan manfaat kunyit, jahe, lengkuas, dan serai bagi masyarakat Melayu?",
        options: [
          { id: 'A', text: "Semuanya hanya digunakan sebagai tanaman hias" },
          { id: 'B', text: "Digunakan sebagai rempah masakan sekaligus bahan pengobatan tradisional" },
          { id: 'C', text: "Hanya dapat tumbuh di dataran tinggi" },
          { id: 'D', text: "Seluruhnya dipanen setiap minggu" }
        ],
        correctId: 'B'
      },
      {
        id: 10,
        question: "Mengapa ubi jalar cocok dijadikan cadangan makanan keluarga?",
        options: [
          { id: 'A', text: "Karena seluruh bagian tanaman harus segera dimakan" },
          { id: 'B', text: "Karena umbinya dapat disimpan cukup lama setelah dipanen" },
          { id: 'C', text: "Karena hanya tumbuh pada musim tertentu" },
          { id: 'D', text: "Karena membutuhkan lahan sawah yang luas" }
        ],
        correctId: 'B'
      },
      {
        id: 11,
        question: "Apa kelebihan utama tanaman pepaya dibanding beberapa tanaman buah lain?",
        options: [
          { id: 'A', text: "Dapat tumbuh tanpa tanah" },
          { id: 'B', text: "Relatif cepat berbuah dan mampu menghasilkan dalam waktu lama" },
          { id: 'C', text: "Hanya cocok ditanam di tanah berpasir" },
          { id: 'D', text: "Tidak memerlukan air hujan" }
        ],
        correctId: 'B'
      },
      {
        id: 12,
        question: "Mengapa hasil kebun sendiri dianggap lebih sehat?",
        options: [
          { id: 'A', text: "Karena ukuran hasil panennya selalu lebih besar" },
          { id: 'B', text: "Karena penggunaan bahan pengawet dan pestisida berbahaya dapat dikurangi" },
          { id: 'C', text: "Karena seluruh hasil kebun bebas dari serangga" },
          { id: 'D', text: "Karena tidak memerlukan proses pencucian sebelum dimakan" }
        ],
        correctId: 'B'
      },
      {
        id: 13,
        question: "Apa yang menunjukkan bahwa berkebun tidak selalu membutuhkan lahan luas?",
        options: [
          { id: 'A', text: "Semua tanaman dapat tumbuh di dalam rumah tanpa cahaya" },
          { id: 'B', text: "Polybag dan media tanam memungkinkan tanaman ditanam di tempat terbatas" },
          { id: 'C', text: "Tanaman sayur hanya dapat hidup di balkon rumah" },
          { id: 'D', text: "Berkebun modern tidak lagi memerlukan tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 14,
        question: "Mengapa sayuran daun disebut tanaman panen cepat?",
        options: [
          { id: 'A', text: "Karena sebagian besar dapat dipanen dalam waktu sekitar 2–4 minggu" },
          { id: 'B', text: "Karena harus dipanen sebelum tumbuh besar" },
          { id: 'C', text: "Karena hanya hidup beberapa hari" },
          { id: 'D', text: "Karena membutuhkan banyak air setiap jam" }
        ],
        correctId: 'A'
      },
      {
        id: 15,
        question: "Fungsi bambu pada budidaya kacang panjang adalah …",
        options: [
          { id: 'A', text: "menjaga tanah tetap lembap" },
          { id: 'B', text: "menjadi tempat rambatan tanaman agar tumbuh lebih baik" },
          { id: 'C', text: "menggantikan fungsi pupuk kandang" },
          { id: 'D', text: "mempercepat perubahan warna daun" }
        ],
        correctId: 'B'
      },
      {
        id: 16,
        question: "Mengapa kacang tanah cocok ditanam di lahan tertentu di Bengkalis?",
        options: [
          { id: 'A', text: "Karena tanaman ini tumbuh baik pada tanah berpasir dan relatif kering" },
          { id: 'B', text: "Karena hanya dapat hidup di tanah rawa" },
          { id: 'C', text: "Karena membutuhkan suhu dingin sepanjang tahun" },
          { id: 'D', text: "Karena akar tanaman harus selalu terendam air" }
        ],
        correctId: 'A'
      },
      {
        id: 17,
        question: "Apa manfaat tambahan tanaman kacang-kacangan selain sebagai sumber pangan?",
        options: [
          { id: 'A', text: "Membantu memperbaiki kesuburan tanah di sekitarnya" },
          { id: 'B', text: "Mengurangi kemampuan tanah menyimpan air" },
          { id: 'C', text: "Membuat tanaman lain sulit tumbuh" },
          { id: 'D', text: "Menghilangkan seluruh unsur hara tanah" }
        ],
        correctId: 'A'
      },
      {
        id: 18,
        question: "Mengapa cabai rawit cocok ditanam di pekarangan rumah atau polybag?",
        options: [
          { id: 'A', text: "Karena tanaman ini memerlukan tempat yang sempit dan tahan cuaca panas" },
          { id: 'B', text: "Karena cabai rawit hanya dapat hidup di pot kecil" },
          { id: 'C', text: "Karena tanaman ini tidak memerlukan perawatan sama sekali" },
          { id: 'D', text: "Karena akar cabai tidak membutuhkan tanah" }
        ],
        correctId: 'A'
      },
      {
        id: 19,
        question: "Selain sebagai bumbu masakan, serai juga dimanfaatkan untuk …",
        options: [
          { id: 'A', text: "mempercepat pertumbuhan pohon besar" },
          { id: 'B', text: "membantu mengurangi keberadaan nyamuk di sekitar rumah" },
          { id: 'C', text: "menggantikan fungsi pupuk tanaman" },
          { id: 'D', text: "meningkatkan kadar garam dalam tanah" }
        ],
        correctId: 'B'
      },
      {
        id: 20,
        question: "Mengapa berkebun dapat melatih rasa tanggung jawab?",
        options: [
          { id: 'A', text: "Karena tanaman harus dirawat secara teratur agar dapat tumbuh dan menghasilkan" },
          { id: 'B', text: "Karena semua tanaman dapat tumbuh tanpa perhatian" },
          { id: 'C', text: "Karena berkebun hanya dilakukan saat musim panen" },
          { id: 'D', text: "Karena hasil panen selalu berhasil tanpa perawatan" }
        ],
        correctId: 'A'
      },
      {
        id: 21,
        question: "Apa faktor utama yang membuat Bengkalis cocok untuk berbagai jenis tanaman?",
        options: [
          { id: 'A', text: "Curah hujan cukup tinggi dan tanahnya relatif subur" },
          { id: 'B', text: "Seluruh wilayah Bengkalis berupa tanah pegunungan" },
          { id: 'C', text: "Suhu Bengkalis selalu dingin sepanjang tahun" },
          { id: 'D', text: "Semua tanaman mendapatkan pupuk alami dari laut" }
        ],
        correctId: 'A'
      },
      {
        id: 22,
        question: "Mengapa masyarakat Melayu dahulu hampir selalu memiliki kebun kecil di rumah?",
        options: [
          { id: 'A', text: "Untuk menjaga ketersediaan kebutuhan pangan harian keluarga" },
          { id: 'B', text: "Untuk menggantikan seluruh fungsi pasar tradisional" },
          { id: 'C', text: "Untuk memenuhi aturan adat tertentu" },
          { id: 'D', text: "Untuk menyimpan hasil tangkapan laut" }
        ],
        correctId: 'A'
      },
      {
        id: 23,
        question: "Mengapa singkong dijuluki tanaman “asuransi”?",
        options: [
          { id: 'A', text: "Karena dapat tetap tumbuh dalam berbagai kondisi dan dipanen saat diperlukan" },
          { id: 'B', text: "Karena membutuhkan biaya penanaman yang sangat mahal" },
          { id: 'C', text: "Karena hanya tumbuh pada musim hujan" },
          { id: 'D', text: "Karena seluruh hasil panennya harus dijual" }
        ],
        correctId: 'A'
      },
      {
        id: 24,
        question: "Apa manfaat daun pisang dalam kehidupan masyarakat Melayu?",
        options: [
          { id: 'A', text: "Digunakan sebagai bahan pembungkus makanan tradisional" },
          { id: 'B', text: "Dijadikan pengganti pupuk kandang" },
          { id: 'C', text: "Digunakan untuk mempercepat pertumbuhan tanaman lain" },
          { id: 'D', text: "Menjadi bahan utama membuat perahu" }
        ],
        correctId: 'A'
      },
      {
        id: 25,
        question: "Pelajaran penting yang dipahami Daus setelah pergi ke toko pertanian adalah …",
        options: [
          { id: 'A', text: "Berkebun hanya cocok dilakukan oleh masyarakat desa" },
          { id: 'B', text: "Berkebun tetap dapat dilakukan meskipun memiliki lahan terbatas" },
          { id: 'C', text: "Semua tanaman harus ditanam langsung di tanah luas" },
          { id: 'D', text: "Berkebun modern tidak lagi membutuhkan perawatan" }
        ],
        correctId: 'B'
      }
    ] 
  },
  3: { 
    title: "Tanaman Membutuhkan Pupuk", 
    formId: '1FAIpQLSfeoXJ6162_Gj7IEagtkJrjR0VvkvW0XL2Kevr_OLO2A5um7w', 
    entryMapping: {
      name: 'entry.637224933',
      userClass: 'entry.1829667939',
      quizName: 'entry.247201619',
      score: 'entry.1430025283'
    },
    questions: [
      {
        id: 1,
        question: "Tanaman memerlukan pupuk karena ...",
        options: [
          { id: 'A', text: "tanah selalu memiliki unsur hara yang cukup" },
          { id: 'B', text: "unsur hara dalam tanah dapat berkurang setelah digunakan tanaman" },
          { id: 'C', text: "pupuk membuat tanaman tidak perlu air" },
          { id: 'D', text: "semua tanaman hanya bisa hidup dengan pupuk kimia" }
        ],
        correctId: 'B'
      },
      {
        id: 2,
        question: "Salah satu tanda tanaman kekurangan unsur hara adalah ...",
        options: [
          { id: 'A', text: "daun menjadi hijau segar" },
          { id: 'B', text: "batang semakin kuat" },
          { id: 'C', text: "daun menguning dan pertumbuhan lambat" },
          { id: 'D', text: "bunga tumbuh lebih banyak" }
        ],
        correctId: 'C'
      },
      {
        id: 3,
        question: "Fungsi utama pupuk bagi tanaman adalah ...",
        options: [
          { id: 'A', text: "mengganti air dalam tanah" },
          { id: 'B', text: "menambah unsur hara untuk pertumbuhan tanaman" },
          { id: 'C', text: "membuat tanah menjadi kering" },
          { id: 'D', text: "mengurangi cahaya matahari" }
        ],
        correctId: 'B'
      },
      {
        id: 4,
        question: "Tanaman yang mendapat cukup pupuk biasanya memiliki ciri ...",
        options: [
          { id: 'A', text: "batang lemah dan mudah roboh" },
          { id: 'B', text: "daun layu dan pucat" },
          { id: 'C', text: "pertumbuhan lambat" },
          { id: 'D', text: "daun hijau segar dan batang kuat" }
        ],
        correctId: 'D'
      },
      {
        id: 5,
        question: "Pupuk alami dapat dibuat dari ...",
        options: [
          { id: 'A', text: "sisa sayuran dan kulit buah" },
          { id: 'B', text: "botol kaca dan besi" },
          { id: 'C', text: "plastik dan kaleng" },
          { id: 'D', text: "kertas berlapis aluminium" }
        ],
        correctId: 'A'
      },
      {
        id: 6,
        question: "Salah satu keuntungan membuat pupuk sendiri adalah ...",
        options: [
          { id: 'A', text: "membuat sampah organik semakin banyak" },
          { id: 'B', text: "menghemat biaya dan mengurangi sampah" },
          { id: 'C', text: "membuat tanaman cepat mati" },
          { id: 'D', text: "membuat tanah kehilangan unsur hara" }
        ],
        correctId: 'B'
      },
      {
        id: 7,
        question: "Sampah organik yang dapat dimanfaatkan menjadi pupuk adalah ...",
        options: [
          { id: 'A', text: "daun kering dan air cucian beras" },
          { id: 'B', text: "pecahan kaca dan baterai bekas" },
          { id: 'C', text: "plastik dan karet" },
          { id: 'D', text: "kaleng dan besi tua" }
        ],
        correctId: 'A'
      },
      {
        id: 8,
        question: "Pengertian pupuk kompos adalah ...",
        options: [
          { id: 'A', text: "pupuk kimia berbentuk cair" },
          { id: 'B', text: "pupuk alami dari hasil penguraian bahan organik" },
          { id: 'C', text: "pupuk yang dibuat dari campuran plastik" },
          { id: 'D', text: "pupuk yang hanya digunakan di sawah" }
        ],
        correctId: 'B'
      },
      {
        id: 9,
        question: "Berikut yang termasuk bahan pembuatan kompos adalah ...",
        options: [
          { id: 'A', text: "kulit buah dan daun kering" },
          { id: 'B', text: "kaca dan logam" },
          { id: 'C', text: "plastik dan kain" },
          { id: 'D', text: "baterai dan kabel" }
        ],
        correctId: 'A'
      },
      {
        id: 10,
        question: "Salah satu manfaat pupuk kompos adalah ...",
        options: [
          { id: 'A', text: "membuat tanah menjadi gembur" },
          { id: 'B', text: "membuat akar sulit tumbuh" },
          { id: 'C', text: "mengurangi unsur hara tanah" },
          { id: 'D', text: "membuat tanah semakin keras" }
        ],
        correctId: 'A'
      },
      {
        id: 11,
        question: "Pupuk kompos baik digunakan karena ...",
        options: [
          { id: 'A', text: "mengandung banyak bahan kimia berbahaya" },
          { id: 'B', text: "dapat merusak tanah dalam waktu singkat" },
          { id: 'C', text: "aman bagi lingkungan dan mudah dibuat" },
          { id: 'D', text: "hanya cocok untuk tanaman hias" }
        ],
        correctId: 'C'
      },
      {
        id: 12,
        question: "Langkah yang tepat dalam membuat pupuk kompos adalah ...",
        options: [
          { id: 'A', text: "membakar semua sampah rumah tangga" },
          { id: 'B', text: "mengumpulkan bahan organik lalu membiarkannya terurai" },
          { id: 'C', text: "mencampur plastik dengan tanah" },
          { id: 'D', text: "menjemur sampah tanpa proses penguraian" }
        ],
        correctId: 'B'
      },
      {
        id: 13,
        question: "Pupuk organik cair adalah ...",
        options: [
          { id: 'A', text: "pupuk alami berbentuk cair dari bahan organik" },
          { id: 'B', text: "pupuk kimia yang dicampur air" },
          { id: 'C', text: "pupuk dari plastik yang dilelehkan" },
          { id: 'D', text: "pupuk berbentuk batu" }
        ],
        correctId: 'A'
      },
      {
        id: 14,
        question: "Bahan yang dapat digunakan untuk membuat POC adalah ...",
        options: [
          { id: 'A', text: "kulit buah dan air cucian beras" },
          { id: 'B', text: "kaleng dan besi" },
          { id: 'C', text: "kaca dan plastik" },
          { id: 'D', text: "pasir dan semen" }
        ],
        correctId: 'A'
      },
      {
        id: 15,
        question: "Pupuk organik cair lebih cepat diserap tanaman karena ...",
        options: [
          { id: 'A', text: "bentuk cair memudahkan unsur hara diserap akar dan daun" },
          { id: 'B', text: "pupuk cair membuat tanah menjadi keras" },
          { id: 'C', text: "pupuk cair tidak mengandung unsur hara" },
          { id: 'D', text: "semua tanaman hanya membutuhkan pupuk cair" }
        ],
        correctId: 'A'
      },
      {
        id: 16,
        question: "Salah satu kelebihan pupuk organik cair adalah ...",
        options: [
          { id: 'A', text: "sulit digunakan pada tanaman pot" },
          { id: 'B', text: "membuat tanaman lebih segar dan berdaun lebat" },
          { id: 'C', text: "menyebabkan tanaman cepat layu" },
          { id: 'D', text: "membuat tanah menjadi tandus" }
        ],
        correctId: 'B'
      },
      {
        id: 17,
        question: "Cara membuat pupuk organik cair yang benar adalah ...",
        options: [
          { id: 'A', text: "merendam bahan organik lalu membiarkannya mengalami peragian" },
          { id: 'B', text: "membakar sampah organik hingga menjadi abu" },
          { id: 'C', text: "mencampur plastik dengan air" },
          { id: 'D', text: "menjemur kulit buah tanpa air" }
        ],
        correctId: 'A'
      },
      {
        id: 18,
        question: "Persamaan pupuk kompos dan pupuk organik cair adalah ...",
        options: [
          { id: 'A', text: "sama-sama dibuat dari bahan alami" },
          { id: 'B', text: "sama-sama berbentuk cair" },
          { id: 'C', text: "sama-sama mengandung bahan kimia berbahaya" },
          { id: 'D', text: "sama-sama dibuat di pabrik besar" }
        ],
        correctId: 'A'
      },
      {
        id: 19,
        question: "Mengubah sampah dapur menjadi pupuk bermanfaat untuk ...",
        options: [
          { id: 'A', text: "menambah jumlah sampah" },
          { id: 'B', text: "mencemari lingkungan" },
          { id: 'C', text: "mengurangi sampah dan membantu pertumbuhan tanaman" },
          { id: 'D', text: "membuat tanah kehilangan unsur hara" }
        ],
        correctId: 'C'
      },
      {
        id: 20,
        question: "Sikap yang dapat dikembangkan dari kegiatan membuat pupuk sendiri adalah ...",
        options: [
          { id: 'A', text: "malas dan bergantung pada orang lain" },
          { id: 'B', text: "kreatif dan mandiri" },
          { id: 'C', text: "boros dan ceroboh" },
          { id: 'D', text: "tidak peduli lingkungan" }
        ],
        correctId: 'B'
      }
    ] 
  },
  4: { title: "Modul 4", formId: 'PLACEHOLDER_FORM_ID_4', questions: [] },
  5: { title: "Modul 5", formId: 'PLACEHOLDER_FORM_ID_5', questions: [] },
  6: { title: "Modul 6", formId: 'PLACEHOLDER_FORM_ID_6', questions: [] },
  7: { title: "Modul 7", formId: 'PLACEHOLDER_FORM_ID_7', questions: [] },
  8: { title: "Modul 8", formId: 'PLACEHOLDER_FORM_ID_8', questions: [] },
};
