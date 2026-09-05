export const modul4Service = {
  getIntroduction: () => ({
    title: "Modul 4: Mendesain Kebun di Rumah",
    pages: [
      {
        id: 0,
        title: "NILAI MODUL 3",
        isSheet: true,
        sheetUrl: "https://docs.google.com/spreadsheets/d/1xj49kl2EsjWO6Fl01-7oKZLh2IBzyLJLx0vezWRXibk/preview",
        content: "Pastikan nilaimu sudah ada. Jika belum ada, kerjakan Modul 3 terlebih dahulu.",
        quiz: {
          question: "Apakah nilaimu sudah ada?",
          options: [
            { id: 'A', text: "Sudah Ada", isCorrect: true },
            { id: 'B', text: "Belum", isCorrect: true, redirectModule: 3, redirectPage: 0 }
          ]
        }
      },
      {
        id: 1,
        title: "YUK RANCANG KEBUNMU. APA YANG AKAN KAMU TANAM DI RUMAH?",
        content: "Berkebun di rumah bukan hanya tentang menaruh benih di tanah. Ini adalah proyek kreatif untuk mendesain tempat hidup baru bagi tumbuhan!\n\nSebelum mulai menanam, tanyakanlah pada dirimu sendiri:\n1. Apakah kamu ingin menanam sayuran konsumsi harian seperti bayam, kangkung, atau sawi?\n2. Ataukah tanaman apotek hidup (rempah-rempah) seperti jahe, kunyit, atau serai?\n3. Bagaimana kamu akan menyusun wadah tanaman agar mendapat sinar matahari yang cukup?\n\nMari kita mulai merancang proyek kebun impian kita!",
        quiz: {
          question: "Sebelum mulai merancang kebun di rumah, hal dasar apa yang harus kita perhatikan?",
          options: [
            { id: 'A', text: "Menentukan jenis tanaman dan lokasi yang cukup mendapat sinar matahari", isCorrect: true },
            { id: 'B', text: "Membeli tanaman hias plastik yang tidak butuh perawatan", isCorrect: false },
            { id: 'C', text: "Harus memiliki lahan sawah yang sangat luas terlebih dahulu", isCorrect: false }
          ]
        }
      },
      {
        id: 2,
        title: "B. TUJUAN PEMBELAJARAN",
        content: "Setelah mengikuti kegiatan ini, siswa diharapkan mampu:\n\n1. Merancang kebun sederhana di rumah.\n2. Menentukan tanaman yang cocok ditanam.\n3. Menyusun langkah berkebun secara runtut.\n4. Membuat poster proyek kebun menggunakan bantuan teknologi digital seperti ChatGPT atau Gemini.\n5. Menampilkan ide kreatif dalam bentuk poster yang menarik.",
        quiz: {
          question: "Manakah di bawah ini yang merupakan salah satu tujuan pembelajaran utama dari kegiatan ini?",
          options: [
            { id: 'A', text: "Membuat poster proyek kebun menggunakan bantuan teknologi digital seperti ChatGPT atau Gemini", isCorrect: true },
            { id: 'B', text: "Mencari bibit tanaman paling mahal di pasar tradisional", isCorrect: false },
            { id: 'C', text: "Menjual semua peralatan berkebun di sekolah", isCorrect: false }
          ]
        }
      },
      {
        id: 3,
        title: "PERSIAPAN WADAH TANAM",
        content: "Lahan sempit bukan halangan untuk berkebun. Kamu bisa menggunakan pot, polibag, atau wadah bekas lainnya untuk menyalurkan kreativitas berkebunmu di rumah dengan cara yang hemat dan praktis.\n\nBeberapa alternatif wadah tanam:\n🌿 Polibag: Praktis, memiliki ventilasi yang baik, dan sangat terjangkau.\n🏺 Pot Plastik: Rapi, tahan lama, dan mudah disusun di pekarangan rumah.\n♻️ Botol/Ember Bekas: Membantu meminimalkan sampah rumah tangga sekaligus menghemat biaya.",
        quiz: {
          question: "Mengapa pemanfaatan botol atau ember bekas sebagai wadah sangat disarankan untuk kebun lahan sempit?",
          options: [
            { id: 'A', text: "Membantu mendaur ulang sampah plastik serta lebih hemat biaya", isCorrect: true },
            { id: 'B', text: "Karena botol bekas bisa mengeluarkan pupuk otomatis", isCorrect: false },
            { id: 'C', text: "Karena tanaman tidak boleh diletakkan di pot plastik biasa", isCorrect: false }
          ]
        }
      },
      {
        id: 4,
        title: "MATERI SINGKAT",
        content: "Berkebun dapat dilakukan di rumah dengan lahan kecil maupun menggunakan pot dan botol bekas. Sebelum menanam, kita perlu menyiapkan media tanam, memilih bibit, dan menentukan tempat yang cukup terkena sinar matahari.\n\nMerancang kebun membantu kita belajar:\n• hidup sehat,\n• mandiri dan kreatif,\n• hemat,\n• dan peduli lingkungan.",
        quiz: {
          question: "Apa saja manfaat pembelajaran dan karakter yang dilatih lewat aktivitas merancang kebun sendiri?",
          options: [
            { id: 'A', text: "Hidup sehat, mandiri dan kreatif, hemat, serta peduli terhadap lingkungan sekitar", isCorrect: true },
            { id: 'B', text: "Belajar cara memesan jasa berkebun profesional lewat internet", isCorrect: false },
            { id: 'C', text: "Belajar menebang pohon-pohon rindang", isCorrect: false }
          ]
        }
      },
      {
        id: 5,
        title: "“DESAIN KEBUN IMPIANKU”",
        content: "Buatlah poster proyek kebun rumah dengan ketentuan berikut:\n\nPoster HARUS memuat:\n✅ Judul kebun\n✅ Foto siswa\n✅ Jenis tanaman yang akan ditanam\n✅ Alat dan bahan sederhana\n✅ Langkah singkat berkebun\n✅ Desain menarik dan berwarna",
        quiz: {
          question: "Unsur manakah di bawah ini yang harus wajib ada dan ditampilkan di dalam poster proyek kebun kamu?",
          options: [
            { id: 'A', text: "Judul kebun, foto siswa, jenis tanaman, alat/bahan, langkah berkebun, dan desain berwarna", isCorrect: true },
            { id: 'B', text: "Daftar harga beras nasional", isCorrect: false },
            { id: 'C', text: "Foto halaman rumah tetangga", isCorrect: false }
          ]
        }
      },
      {
        id: 6,
        title: "PETUNJUK KEGIATAN",
        content: "Petunjuk Kegiatan:\n1. Kerjakan secara individu\n2. Gunakan HP untuk mencari inspirasi dan membuat desain poster.\n3. Kalian boleh menggunakan:\n   • ChatGPT\n   • Gemini\n   • Canva\n   • Aplikasi desain lainnya.\n4. Poster dibuat semenarik mungkin.\n5. Gunakan bahasa yang jelas dan mudah dipahami.\n6. Mengunggah hasil desain sebagai bukti kerja ke google form yang telah disediakan.",
        quiz: {
          question: "Aplikasi apa saja yang diperbolehkan untuk mempermudah perancangan ide dan pembuatan poster?",
          options: [
            { id: 'A', text: "Menggunakan ChatGPT, Gemini, Canva, atau aplikasi desain kreatif lainnya", isCorrect: true },
            { id: 'B', text: "Hanya boleh menggunakan pensil gambar hitam putih di kertas biasa", isCorrect: false },
            { id: 'C', text: "Tidak diperbolehkan memakai bantuan internet sama sekali", isCorrect: false }
          ]
        }
      },
      {
        id: 7,
        title: "NAMA & JUDUL KEBUN",
        content: "Judul Kebun bebas kamu kreasikan sendiri berdasarkan imajinasimu.\n\nIni Contohnya saja:\n• Kebun Sehatku\n• Green Home Garden\n• Kebun Mini Keluargaku\n• Fresh Vegetable Garden\n\nKamu sangat dianjurkan untuk menggunakan nama karangan kreatifmu sendiri agar poster buatanmu terlihat orisinal!",
        quiz: {
          question: "Apakah kamu wajib menggunakan contoh judul di atas untuk postermu?",
          options: [
            { id: 'A', text: "Tidak wajib, saya bebas berkreasi membuat judul kebun orisinal sendiri", isCorrect: true },
            { id: 'B', text: "Ya, saya harus menyontek persis salah satu judul dari contoh di atas", isCorrect: false }
          ]
        }
      },
      {
        id: 8,
        title: "PANDUAN MEMBUAT POSTER DENGAN AI",
        content: "Gunakan prompt berikut untuk membantu membuat ide poster di ChatGPT atau Gemini.\n\n*Catatan: Bagian berlatar kuning/tebal di bawah ini dapat kamu ubah sesuai kondisi masing-masing sebelum mengirimkannya ke AI!*\n\nSalinlah prompt atau teks di bawah ini dengan mengklik tombol **Salin Prompt**, lalu ubahlah isinya sesuai data dirimu. Kemudian tempelkan di ChatGPT ataupun Gemini, tunggu beberapa saat maka posterpun jadi.",
        copyablePrompt: "Buatkan desain poster portrait ukuran A4, judul **“KEBUNKU SEHAT, AKUPUN SEHAT”**. tanaman yang akan saya tanam adalah **BAYAM** di **POLIBAG**, langkah berkebun sederhana, dan desain **DISERTAI ILUSTRASI 3D** yang menarik **WARNA BIRU DAN HIJAU**, sertakan juga foto saya yang saya unggah ( **UBAH POSE FOTO SAYA DAN BUAT AGAR BERPAKAIAN SEPERTI PETANI SUKSES** ), nama saya adalah **HENDRIX WONG** Kelas **8C**, Siswa **SMPN 1 Bengkalis**. Sloganku adalah **AYO BERKEBUN, HIJAUKAN RUMAHMU**.",
        quiz: {
          question: "Apa isi data penting di dalam teks prompt salinan di atas yang harus kamu sesuaikan sebelum dikirimkan ke AI?",
          options: [
            { id: 'A', text: "Ubah nama, kelas, jenis tanaman, dan judul poster sesuai data diri asli saya", isCorrect: true },
            { id: 'B', text: "Memakai nama Hendrix Wong tanpa melakukan penyesuaian data pribadi", isCorrect: false }
          ]
        }
      },
      {
        id: 9,
        title: "CONTOH DESAIN POSTER KEBUN KITA",
        content: "Berikut adalah salah satu contoh visual poster kebun sehat hasil olahan AI.\n\nSilakan kreasikan sendiri karyamu agar terlihat menarik dan merepresentasikan ide rancangan kebun impianmu di rumah!",
        imageUrl: "https://i.ibb.co.com/rRhR4WJC/file-000000001d487208b16baff8a804e103.png",
        imagePreviewUrl: "https://i.ibb.co.com/TxyyM7LG/1000283955-1.png",
        quiz: {
          question: "Apakah gambaran poster contoh di atas menarik untuk dijadikan referensi postermu?",
          options: [
            { id: 'A', text: "Ya, sangat informatif dan keren!", isCorrect: true },
            { id: 'B', text: "Ya, dan saya punya ide yang lebih unik lagi!", isCorrect: true }
          ]
        }
      },
      {
        id: 10,
        title: "UNGGAH POSTER DESAIN KEBUNMU",
        content: "Unggah hasil poster kreatif yang telah kamu buat menggunakan ChatGPT, Gemini, Canva, rujukan AI, atau aplikasi desain lainnya.\n\nFormulir di bawah ini terhubung langsung ke Google Drive melalui Google Form yang disediakan. Pastikan kamu mengisi data dengan benar dan mengunggah berkas poster gambarmu.",
        isForm: true,
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdpSLs5OIrhBkmNzvRZUfrpqKDXTnDb4d4ebjRzFBFtSo6Myw/viewform?usp=sharing",
        quiz: {
          question: "Apakah kamu sudah berhasil mengirimkan hasil desain postermu?",
          options: [
            { id: 'A', text: "Ya, saya sudah mengisi form dan mengunggah poster", isCorrect: true },
            { id: 'B', text: "Belum, saya mau mengunggahnya sekarang", isCorrect: true }
          ]
        }
      },
      {
        id: 11,
        title: "FOLDER KUMPULAN KARYA KELAS",
        content: "Di bawah ini adalah piringan folder Google Drive tempat melihat seluruh kiriman berkas poster milik teman-teman kelas lainnya.\n\nMari saling menginspirasi dan melihat estetika kreativitas kebun lahan sempit milik seluruh siswa SMPN 1 Bengkalis!",
        isDriveFolder: true,
        driveFolderUrl: "https://drive.google.com/drive/u/1/mobile/folders/1XeA08AexxTCjuY6hQU7Ue9WaJhNgDzYwH5QSn71FZiOl2oK5q7mGfWPi7ZPLr7WUFYfrcPeJ/1MbmVzJ_wrWG543eiTp7BeDUcYZAWhXJsFuPbvyMS6q6iWPaRRUrjbR39OtxoOrjIE3wS89K2?hl=ID&sort=15&direction=d",
        quiz: {
          question: "Apakah kamu bersemangat melihat hasil rancangan karya teman-teman sekelasmu?",
          options: [
            { id: 'A', text: "Ya, ayo kita sama-sama berkarya dan menjaga kekompakan!", isCorrect: true },
            { id: 'B', text: "Ya, sangat terinspirasi untuk mulai menanam di polibag!", isCorrect: true }
          ]
        }
      }
    ]
  })
};
