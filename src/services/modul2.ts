/**
 * Service for handling Modul 2 data.
 */

export const modul2Service = {
  getIntroduction: () => ({
    title: "Modul 2: Ayo Berkebun di Bengkalis",
    pages: [
      {
        id: 0,
        title: "NILAI MODUL 1",
        isSheet: true,
        sheetUrl: "https://docs.google.com/spreadsheets/d/1PQywXD1s-NPxnJPzw_vinTG-lvYn24FBQsLP-_LazeY/preview",
        content: "",
        quiz: {
          question: "Apakah kamu sudah mengecek namamu?",
          options: [
            { id: 'A', text: "Sudah, lanjut ke materi", isCorrect: true },
            { id: 'B', text: "Saya belum mengerjakan Modul 1", isCorrect: true, redirectModule: 1, redirectPage: 0 }
          ]
        }
      },
      {
        id: 1,
        title: "Motivasi Sebelum Belajar",
        triggerQuestion: "Ketulusan hati adalah awal dari ilmu.",
        videoUrl: "https://www.youtube.com/embed/DcQV9kWaK6o",
        content: "Sebelum kita mulai belajar tentang persiapan lahan, mari kita renungkan sejenak: ketika kamu ke sekolah, apakah kamu belajar bersungguh-sungguh untuk membalas jasa orang tuamu? Mari kita luruskan niat kita agar ilmu yang kita pelajari hari ini bermanfaat.",
        quiz: {
          question: "Apakah kamu siap belajar dengan sungguh-sungguh?",
          options: [
            { id: 'A', text: "Ya, saya siap!", isCorrect: true },
            { id: 'B', text: "Saya akan berusaha", isCorrect: true }
          ]
        }
      },
      {
        id: 2,
        title: "Mungkinkah di pulau bengkalis terjadi krisis bahan makanan?",
        content: "Fakta: Bengkalis 100% Bergantung pada Jalur Laut\n\nBeras, minyak goreng, gula, tepung, bahkan sayuran, semuanya datang dari luar pulau bengkalis.\n\nJika BBM di Pulau Bengkalis langka atau harganya naik drastis akibat situasi global, biaya transportasi kapal juga akan meningkat. Akibatnya, harga bahan makanan dapat naik hingga 2–3 kali lipat dalam waktu singkat. Selain itu, jika terjadi bencana di daratan Sumatera, pengiriman barang ke pulau-pulau, termasuk Bengkalis, dapat terhenti sementara.\n\nKarena itu, masyarakat Bengkalis perlu memiliki sumber pangan sendiri. Sejak dahulu, nenek moyang Melayu Riau tidak sepenuhnya bergantung pada kiriman dari luar daerah. Mereka menanam ubi, pisang, sayuran, dan rempah-rempah di sekitar rumah sebagai cadangan makanan.\n\nTanah dataran rendah Bengkalis yang subur sangat cocok digunakan untuk berkebun. Dengan berkebun, masyarakat dapat memiliki persediaan makanan sendiri sehingga kebutuhan pangan tetap terpenuhi meskipun pengiriman barang terhambat.",
        quiz: {
          question: "Mengapa berkebun penting bagi masyarakat Bengkalis?",
          options: [
            { id: 'A', text: "Agar bisa menjual kapal", isCorrect: false },
            { id: 'B', text: "Karena tanah Bengkalis tidak subur", isCorrect: false },
            { id: 'C', text: "Untuk memiliki cadangan makanan sendiri saat pengiriman barang terhambat", isCorrect: true },
            { id: 'D', text: "Supaya harga BBM menjadi murah", isCorrect: false }
          ]
        }
      },
      {
        id: 3,
        title: "KISAH DAUS — KUNJUNGAN KE RUMAH NENEK DI KAMPUNG",
        content: "Daus berkunjung ke rumah neneknya di pinggir kampung Bengkalis. Di halaman rumah nenek tumbuh berbagai tanaman, seperti pisang, singkong, kangkung, bayam, cabai, kunyit, dan jahe.\n\n“Nek, mengapa nenek masih menanam semua ini? Bukankah bisa membeli di pasar?” tanya Daus.\n\nNenek tersenyum sambil memetik kangkung.\n“Daus, orang Melayu tidak boleh selalu bergantung kepada orang lain. Selama ada tanah, air, dan kemauan bekerja, kita tidak perlu takut kekurangan makanan.”\n\n“Tapi sekarang sudah banyak warung, Nek,” jawab Daus.\n\n“Warung bisa saja tutup atau barangnya habis, Nak. Namun tanah yang dirawat dengan baik akan terus memberi hasil,” kata nenek.",
        quiz: {
          question: "Mengapa nenek Daus tetap menanam berbagai tanaman meskipun kebutuhan bisa dibeli di pasar?",
          options: [
            { id: 'A', text: "Karena hasil kebun lebih mahal dijual", isCorrect: false },
            { id: 'B', text: "Karena berkebun membantu masyarakat lebih mandiri dan tidak sepenuhnya bergantung pada kiriman atau warung", isCorrect: true },
            { id: 'C', text: "Karena semua orang kampung wajib menjadi petani", isCorrect: false },
            { id: 'D', text: "Karena tanaman di kebun hanya digunakan sebagai hiasan", isCorrect: false }
          ]
        }
      },
      {
        id: 4,
        title: "TRADISI DAN FALSAFAH BERKEBUN MELAYU",
        content: "Orang Melayu Riau dan Tradisi Berkebun\n\nSejak dahulu, masyarakat Melayu di Kepulauan Riau, termasuk Bengkalis, telah terbiasa berkebun. Berkebun bukan hanya untuk memenuhi kebutuhan makanan, tetapi juga menjadi bagian dari kebijaksanaan hidup yang diwariskan turun-temurun.\n\n📜 Falsafah Hidup Melayu tentang Alam dan Berkebun\n\nMasyarakat Melayu memiliki pepatah, “Alam terkembang jadi guru,” yang berarti manusia dapat belajar banyak dari alam jika mau memperhatikan dan menjaganya.\n\nOrang Melayu mengenal berbagai tanaman yang bermanfaat, bukan hanya sebagai bahan makanan, tetapi juga sebagai obat dan rempah-rempah. Dahulu, hampir setiap rumah memiliki kebun kecil di belakang rumah sebagai sumber kebutuhan sehari-hari.\n\nBagi masyarakat Melayu, berkebun juga menjadi tanda tanggung jawab dan kemandirian, karena menunjukkan kemampuan seseorang dalam menjaga kebutuhan diri dan keluarganya.",
        quiz: {
          question: "Makna pepatah Melayu “Alam terkembang jadi guru” adalah …",
          options: [
            { id: 'A', text: "manusia harus tinggal jauh di hutan", isCorrect: false },
            { id: 'B', text: "alam hanya berguna sebagai tempat berkebun", isCorrect: false },
            { id: 'C', text: "manusia dapat belajar dari alam dengan cara memperhatikan dan menjaganya", isCorrect: true },
            { id: 'D', text: "semua pelajaran harus dilakukan di luar ruangan", isCorrect: false }
          ]
        }
      },
      {
        id: 5,
        title: "Tanaman Warisan Nenek Moyang di Bengkalis",
        content: "Orang yang bisa menanam tidak akan pernah benar-benar lapar.\n\n🍌 Pisang\nPisang banyak ditanam di kampung-kampung Melayu. Buahnya dapat dimakan, jantungnya dijadikan sayur, dan daunnya digunakan untuk membungkus makanan.\n\n🌿 Singkong (ubi kayu)\nSingkong merupakan tanaman yang tahan panas dan tahan terhadap genangan air. Umbinya dapat dijadikan makanan pokok pengganti beras.\n\n🥬 Kangkung dan bayam\nKangkung dan bayam mudah tumbuh serta dapat dipanen berkali-kali. Sayuran ini juga kaya akan zat besi yang baik bagi tubuh.\n\n🫚 Kunyit, jahe, lengkuas, dan serai\nTanaman rempah ini sering digunakan sebagai bumbu masakan dan bahan obat tradisional.\n\n🍠 Ubi jalar\nDaun ubi jalar dapat dimasak menjadi sayur, sedangkan umbinya menjadi sumber makanan yang mengenyangkan dan tahan disimpan lebih lama.\n\n🍈 Pepaya\nPepaya mudah tumbuh di berbagai jenis tanah, cepat berbuah, dan kaya akan vitamin yang baik untuk kesehatan.",
        quiz: {
          question: "Tanaman apa yang jantungnya bisa dijadikan sayur dan daunnya untuk membungkus makanan?",
          options: [
            { id: 'A', text: "Singkong", isCorrect: false },
            { id: 'B', text: "Pisang", isCorrect: true },
            { id: 'C', text: "Pepaya", isCorrect: false },
            { id: 'D', text: "Ubi jalar", isCorrect: false }
          ]
        }
      },
      {
        id: 6,
        title: "Mengapa Kita Harus Bangga Berkebun?",
        content: "• Berkebun adalah keterampilan penting yang diwariskan oleh nenek moyang Melayu.\n• Orang yang mampu berkebun dianggap mandiri dan mampu memenuhi kebutuhan hidupnya sendiri.\n• Berkebun melatih kesabaran, tanggung jawab, dan rasa syukur terhadap alam.\n• Hasil kebun sendiri biasanya lebih sehat karena dapat mengurangi penggunaan bahan pengawet dan pestisida berbahaya.\n• Berkebun juga merupakan bagian dari warisan budaya Melayu Riau yang perlu dijaga dan diteruskan kepada generasi berikutnya.",
        quiz: {
          question: "1. Mengapa masyarakat Melayu dahulu tetap menanam singkong meskipun memiliki makanan pokok lain?",
          options: [
            { id: 'A', text: "Karena singkong hanya bisa tumbuh di kota", isCorrect: false },
            { id: 'B', text: "Karena singkong tahan terhadap panas dan genangan air sehingga dapat menjadi cadangan pangan", isCorrect: true },
            { id: 'C', text: "Karena singkong lebih mahal daripada beras", isCorrect: false },
            { id: 'D', text: "Karena singkong hanya digunakan sebagai tanaman hias", isCorrect: false }
          ]
        }
      },
      {
        id: 7,
        title: "DAUS — DI TOKO PERTANIAN BENGKALIS",
        content: "Suatu hari, Daus pergi bersama ayahnya ke sebuah toko pertanian di Bengkalis. Di dalam toko terdapat berbagai bibit tanaman, pupuk, dan peralatan berkebun.\n\n“Ayah, tanaman apa yang cocok ditanam di Bengkalis?” tanya Daus sambil melihat rak-rak bibit.\n\nPak penjaga toko tersenyum lalu menjelaskan, “Masyarakat Bengkalis sebenarnya sangat beruntung. Tanah di daerah ini subur, curah hujannya cukup tinggi, dan dataran rendahnya cocok untuk banyak jenis tanaman.”\n\nDaus kemudian berkata, “Tapi kami tinggal di perumahan, Pak. Halamannya tidak luas.”\n\n“Tidak masalah,” jawab penjaga toko. “Sekarang berkebun bisa dilakukan di mana saja. Ada polybag, sekam, dan pupuk kandang yang membantu tanaman tumbuh dengan baik. Bahkan balkon rumah pun dapat dijadikan kebun kecil yang produktif.”\n\nDaus pun mulai memahami bahwa berkebun tidak harus membutuhkan lahan yang luas. Dengan kemauan dan perawatan yang baik, siapa saja dapat menanam sayur atau tanaman bermanfaat di rumah.",
        quiz: {
          question: "Mengapa masyarakat Bengkalis dianggap beruntung untuk berkebun?",
          options: [
            { id: 'A', text: "Karena semua tanaman harus dibeli dari luar daerah", isCorrect: false },
            { id: 'B', text: "Karena Bengkalis memiliki tanah subur dan curah hujan yang mendukung pertumbuhan tanaman", isCorrect: true },
            { id: 'C', text: "Karena berkebun hanya dapat dilakukan di toko pertanian", isCorrect: false },
            { id: 'D', text: "Karena semua rumah di Bengkalis memiliki kebun yang sangat luas", isCorrect: false }
          ]
        }
      },
      {
        id: 8,
        title: "Tanaman Ini bisa di tanam di tanah Bengkalis",
        content: "Kategori Sayuran Daun : Panen Cepat (2–4 Minggu)\n\nSayuran daun sangat cocok ditanam di Bengkalis karena mudah tumbuh, perawatannya sederhana, dan dapat dipanen dalam waktu singkat. Tanaman ini juga cocok ditanam di halaman rumah, pot, maupun polybag.\n\n🌿 Kangkung Darat\nKangkung darat dapat tumbuh hampir di semua jenis tanah dan tahan terhadap cuaca panas Bengkalis. Setelah dipanen, tanaman ini dapat tumbuh kembali sehingga bisa dipanen berulang kali.\n\n🌊 Kangkung Air\nKangkung air dapat tumbuh di tempat berair seperti ember, parit kecil, atau wadah sederhana. Tanaman ini bahkan dapat tumbuh tanpa tanah.\n\n🌿 Bayam Hijau\nBayam hijau tumbuh cepat dan kaya zat besi yang baik untuk kesehatan tubuh. Tanaman ini cocok ditanam di pot atau polybag kecil.\n\n🌿 Sawi Hijau\nSawi hijau cukup tahan terhadap cuaca panas dan bibitnya mudah ditemukan di toko pertanian di Bengkalis.\n\n🌿 Pakcoy\nPakcoy banyak ditanam di kebun rumah perkotaan karena dapat tumbuh baik di polybag dan tidak membutuhkan lahan yang luas.\n\n⏱️ Bibit atau benih sayuran daun umumnya dapat dibeli di toko pertanian Bengkalis dengan harga yang terjangkau, mulai dari sekitar Rp2.000–Rp5.000 per bungkus.",
        quiz: {
          question: "Mengapa sayuran daun cocok ditanam di Bengkalis?",
          options: [
            { id: 'A', text: "Karena hanya dapat tumbuh di daerah dingin", isCorrect: false },
            { id: 'B', text: "Karena membutuhkan lahan yang sangat luas", isCorrect: false },
            { id: 'C', text: "Karena mudah tumbuh, cepat dipanen, dan cocok ditanam di lahan sempit", isCorrect: true },
            { id: 'D', text: "Karena semua sayuran daun harus ditanam di sawah", isCorrect: false }
          ]
        }
      },
      {
        id: 9,
        title: "Kategori Umbi-Umbian sebagai Cadangan Pangan Utama (3–8 Bulan)",
        content: "Tanaman umbi-umbian sangat penting bagi masyarakat Bengkalis karena dapat menjadi cadangan pangan dalam jangka waktu yang lebih lama. Selain mudah ditanam, sebagian besar tanaman umbi juga tahan terhadap perubahan cuaca dan tidak memerlukan perawatan yang rumit.\n\n🌿 Singkong / Ubi Kayu\nSingkong termasuk tanaman yang sangat cocok ditanam di Bengkalis. Tanaman ini tahan terhadap panas maupun genangan air. Umbinya dapat dijadikan makanan pokok pengganti beras, sedangkan daunnya dapat dimasak menjadi sayur. Singkong sering disebut sebagai tanaman “cadangan pangan” karena tetap dapat tumbuh meskipun perawatannya sederhana.\n\n🟠 Ubi Jalar\nUbi jalar cocok ditanam di dataran rendah seperti Bengkalis. Daunnya dapat dimanfaatkan sebagai sayur, sedangkan umbinya dapat disimpan cukup lama sebagai persediaan makanan.\n\n🟤 Talas\nTalas tumbuh baik di tanah yang lembap dan banyak ditemukan di kampung-kampung Bengkalis. Umbinya dapat diolah menjadi berbagai jenis makanan.\n\n⚠️ Mengapa Singkong Disebut Tanaman “Asuransi”?\nSingkong disebut tanaman “asuransi” karena mudah tumbuh, tahan terhadap berbagai kondisi cuaca, dan dapat dipanen saat dibutuhkan. Karena itu, singkong menjadi salah satu tanaman penting untuk menjaga cadangan pangan keluarga.",
        quiz: {
          question: "Mengapa singkong dianggap sebagai tanaman “asuransi” oleh masyarakat?",
          options: [
            { id: 'A', text: "Karena hanya dapat tumbuh di daerah perkotaan", isCorrect: false },
            { id: 'B', text: "Karena membutuhkan perawatan yang sangat sulit", isCorrect: false },
            { id: 'C', text: "Karena tahan terhadap berbagai kondisi dan dapat menjadi cadangan pangan saat diperlukan", isCorrect: true },
            { id: 'D', text: "Karena hanya dimanfaatkan daunnya saja", isCorrect: false }
          ]
        }
      },
      {
        id: 10,
        title: "Kategori Buah dan Rempah (Produktif Jangka Panjang)",
        content: "Tanaman buah dan rempah sangat cocok ditanam di Bengkalis karena dapat tumbuh dalam waktu lama dan terus menghasilkan. Selain bermanfaat sebagai bahan makanan, tanaman ini juga sering digunakan sebagai obat tradisional dan kebutuhan sehari-hari masyarakat Melayu.\n\n🍌 Pisang\nPisang menjadi salah satu tanaman yang hampir selalu ada di rumah masyarakat Melayu. Tanaman ini mudah tumbuh, cepat berkembang, dan dapat terus menghasilkan buah. Selain buahnya, daun dan jantung pisang juga dapat dimanfaatkan untuk kebutuhan memasak.\n\n🍈 Pepaya\nPepaya termasuk tanaman yang cepat berbuah, biasanya mulai menghasilkan dalam waktu sekitar 6–9 bulan. Setelah itu, pohonnya dapat terus berbuah selama beberapa tahun.\n\n🌶️ Cabai Rawit\nCabai rawit tahan terhadap cuaca panas Bengkalis and cocok ditanam di pot maupun polybag. Tanaman ini tidak membutuhkan lahan yang luas tetapi tetap dapat menghasilkan banyak buah.\n\n🫚 Kunyit dan Jahe\nKunyit dan jahe termasuk tanaman rempah yang mudah dirawat. Sekali ditanam, tanaman ini dapat dipanen berkali-kali dan bermanfaat sebagai bumbu masakan maupun obat tradisional.\n\n🌾 Serai\nSerai mudah tumbuh lebat di pekarangan rumah. Selain digunakan sebagai bumbu masakan, serai juga dipercaya dapat membantu mengusir nyamuk.",
        quiz: {
          question: "Mengapa tanaman buah dan rempah cocok dijadikan tanaman produktif jangka panjang?",
          options: [
            { id: 'A', text: "Karena hanya dapat dipanen satu kali", isCorrect: false },
            { id: 'B', text: "Karena membutuhkan lahan yang sangat luas", isCorrect: false },
            { id: 'C', text: "Karena dapat terus tumbuh dan menghasilkan dalam waktu yang lama", isCorrect: true },
            { id: 'D', text: "Karena semua tanaman rempah harus ditanam di sawah", isCorrect: false }
          ]
        }
      },
      {
        id: 11,
        title: "Kategori Kacang-Kacangan — Sumber Protein Nabati",
        content: "Tanaman kacang-kacangan merupakan sumber protein nabati yang baik bagi tubuh. Selain bermanfaat sebagai bahan makanan, tanaman ini juga cukup mudah ditanam di wilayah Bengkalis karena cocok dengan iklim hangat dan tanah dataran rendah.\n\n🫘 Kacang Panjang\nKacang panjang tumbuh dengan cara merambat dan biasanya menggunakan bambu atau kayu sebagai penyangga. Tanaman ini cukup produktif di dataran rendah Bengkalis dan dapat dipanen berkali-kali.\n\n🫘 Buncis\nBuncis dapat tumbuh baik di suhu hangat dan biasanya dapat dipanen dalam waktu sekitar 45–60 hari. Sayuran ini sering digunakan dalam berbagai masakan sehari-hari.\n\n🥜 Kacang Tanah\nKacang tanah cocok ditanam di tanah berpasir dan lahan yang relatif kering. Selain bijinya dapat dimakan, tanaman ini juga membantu memperbaiki kondisi tanah.\n\n💡 Keistimewaan Tanaman Kacang-Kacangan\nTanaman kacang-kacangan memiliki kemampuan membantu menyuburkan tanah secara alami. Hal ini karena akarnya dapat membantu menambah unsur hara tertentu yang dibutuhkan tanaman lain.",
        quiz: {
          question: "Apa keistimewaan tanaman kacang-kacangan selain sebagai sumber makanan?",
          options: [
            { id: 'A', text: "Dapat tumbuh tanpa air sama sekali", isCorrect: false },
            { id: 'B', text: "Membantu menyuburkan tanah secara alami", isCorrect: true },
            { id: 'C', text: "Hanya cocok ditanam di daerah pegunungan", isCorrect: false },
            { id: 'D', text: "Tidak memerlukan cahaya matahari", isCorrect: false }
          ]
        }
      },
      {
        id: 12,
        title: "Istirahat Sejenak: Mengasah Ingatan",
        content: "Ayo segarkan ingatanmu tentang berbagai tanaman yang bisa ditanam di Bengkalis!",
        isGame: true
      },
      {
        id: 13,
        title: "Kuis Akhir Modul 2",
        isFinalQuiz: true,
        content: "Selamat! Kamu telah menyelesaikan materi Ayo Berkebun di Bengkalis. Mari uji pemahamanmu secara menyeluruh.",
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
            question: "Apa persamaan manfaat kunyit, jahe, lengkuas, and serai bagi masyarakat Melayu?",
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
              { id: 'D', text: "Berkebun modern tidak lagi memerlukan perawatan" }
            ],
            correctId: 'B'
          }
        ]
      }
    ]
  })
};
