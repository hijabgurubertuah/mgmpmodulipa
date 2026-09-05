export const modul3Service = {
  getIntroduction: () => ({
    title: "Modul 3: Cara Membuat Pupuk untuk Tanaman",
    pages: [
      {
        id: 0,
        title: "NILAI MODUL 2",
        isSheet: true,
        sheetUrl: "https://docs.google.com/spreadsheets/d/1BzZ1lxqbmbY36KLjKMpIdItHvcj0S4RR2CgXVhf8f3w/preview",
        content: "",
        quiz: {
          question: "Apakah kamu sudah mengecek namamu?",
          options: [
            { id: 'A', text: "Sudah, lanjut ke materi", isCorrect: true },
            { id: 'B', text: "Saya belum mengerjakan Modul 2", isCorrect: true, redirectModule: 2, redirectPage: 0 }
          ]
        }
      },
      {
        id: 1,
        title: "Apakah Tanaman Bisa Tumbuh Subur Tanpa Dipupuk?",
        content: "Tanaman memang dapat tumbuh tanpa diberi pupuk, terutama jika tanah tempat tumbuhnya masih subur dan kaya unsur hara. Namun, seiring waktu tanah akan kehilangan zat makanan karena terus digunakan oleh tanaman. Akibatnya, tanaman menjadi kurang sehat, pertumbuhannya lambat, daun menguning, dan hasil panennya sedikit. Oleh karena itu, tanaman membutuhkan tambahan nutrisi agar tetap tumbuh subur dan sehat.\n\nPupuk berfungsi seperti makanan tambahan bagi tanaman. Di dalam pupuk terdapat unsur hara yang membantu pertumbuhan akar, batang, daun, bunga, dan buah. Tanaman yang cukup pupuk biasanya memiliki daun hijau segar, batang kuat, dan lebih tahan terhadap penyakit. Dengan pemberian pupuk yang tepat, tanaman dapat tumbuh lebih baik dan menghasilkan panen yang lebih banyak.",
        quiz: {
          question: "Mengapa tanaman yang ditanam terus-menerus di tanah yang sama tetap memerlukan pupuk?",
          options: [
            { id: 'A', text: "Karena pupuk membuat tanaman tidak perlu air", isCorrect: false },
            { id: 'B', text: "Karena unsur hara di dalam tanah lama-kelamaan berkurang", isCorrect: true },
            { id: 'C', text: "Karena semua tanaman hanya bisa hidup dengan pupuk kimia", isCorrect: false },
            { id: 'D', text: "Karena pupuk membuat tanah menjadi lebih kering", isCorrect: false }
          ]
        }
      },
      {
        id: 2,
        title: "Pupuk Tidak Harus Dibeli",
        content: "Banyak orang berpikir bahwa pupuk harus dibeli di toko pertanian. Padahal, pupuk dapat dibuat sendiri menggunakan bahan alami yang ada di sekitar rumah. Misalnya dari sisa sayuran, kulit buah, daun kering, air cucian beras, dan sampah dapur lainnya. Bahan-bahan tersebut dapat diolah menjadi pupuk yang bermanfaat bagi tanaman.\n\nMembuat pupuk sendiri memiliki banyak keuntungan. Selain menghemat biaya, kita juga membantu mengurangi sampah organik di lingkungan. Sampah yang biasanya dibuang ternyata masih dapat dimanfaatkan menjadi sesuatu yang berguna. Dengan begitu, lingkungan menjadi lebih bersih dan tanaman tetap mendapatkan nutrisi yang dibutuhkan.",
        quiz: {
          question: "Mengapa membuat pupuk sendiri di rumah dianggap lebih bermanfaat?",
          options: [
            { id: 'A', text: "Karena semua sampah rumah tangga dapat langsung dijadikan pupuk tanpa dipilih", isCorrect: false },
            { id: 'B', text: "Karena dapat mengurangi sampah organik sekaligus menghemat biaya", isCorrect: true },
            { id: 'C', text: "Karena pupuk buatan rumah selalu lebih mahal daripada pupuk pabrik", isCorrect: false },
            { id: 'D', text: "Karena tanaman hanya dapat tumbuh dengan pupuk buatan sendiri", isCorrect: false }
          ]
        }
      },
      {
        id: 3,
        title: "PUPUK KOMPOS",
        content: "Pupuk kompos adalah pupuk alami yang berasal dari sisa-sisa makhluk hidup, seperti sisa sayuran, kulit buah, daun kering, ranting kecil, dan kotoran hewan. Bahan-bahan tersebut mengalami proses penguraian secara alami sehingga berubah menjadi tanah yang gembur dan subur. Kompos sangat baik digunakan untuk memperbaiki kualitas tanah.\n\nPupuk kompos memiliki banyak manfaat bagi tanaman. Kompos dapat membuat tanah menjadi gembur sehingga akar mudah tumbuh. Selain itu, kompos juga menyediakan unsur hara lengkap bagi tanaman dan membantu memperbaiki tanah yang keras atau kurang subur. Pupuk kompos mudah dibuat dan aman bagi lingkungan karena tidak mengandung bahan kimia berbahaya.",
        quiz: {
          question: "Salah satu manfaat pupuk kompos adalah ...",
          options: [
            { id: 'A', text: "Membuat tanah menjadi keras", isCorrect: false },
            { id: 'B', text: "Membantu tanah menjadi gembur", isCorrect: true },
            { id: 'C', text: "Membuat tanaman cepat mati", isCorrect: false },
            { id: 'D', text: "Mengurangi air dalam tanah", isCorrect: false }
          ]
        }
      },
      {
        id: 4,
        title: "Cara Membuat Pupuk Kompos",
        videoUrl: "https://www.youtube.com/embed/0qfGNQ499JA",
        content: "Saksikan video di atas tentang cara praktis membuat pupuk kompos di rumah.",
        quiz: {
          question: "Langkah yang tepat dalam membuat pupuk kompos adalah ...",
          options: [
            { id: 'A', text: "Mengumpulkan sampah organik, menumpuknya, lalu membiarkannya terurai hingga menjadi kompos", isCorrect: true },
            { id: 'B', text: "Membakar daun dan sampah dapur agar cepat menjadi pupuk", isCorrect: false },
            { id: 'C', text: "Mencampur sampah plastik dengan tanah agar kompos lebih banyak", isCorrect: false },
            { id: 'D', text: "Menjemur semua sampah di bawah matahari tanpa proses penguraian", isCorrect: false }
          ]
        }
      },
      {
        id: 5,
        title: "PUPUK ORGANIK CAIR (POC)",
        content: "Pupuk organik cair adalah pupuk alami berbentuk cair yang dibuat dari bahan organik seperti kulit buah, air cucian beras, dan daun-daunan tertentu. Bahan-bahan tersebut direndam dalam air dan dibiarkan mengalami proses peragian selama beberapa waktu hingga menjadi pupuk cair yang siap digunakan.\n\nPupuk organik cair memiliki kelebihan karena unsur haranya cepat diserap oleh tanaman melalui akar maupun daun. Pupuk ini sangat praktis digunakan, terutama untuk tanaman di pot atau lahan sempit. Tanaman yang diberi pupuk organik cair biasanya tampak lebih segar, berdaun lebat, dan cepat berbuah. Selain murah, pupuk ini juga aman digunakan pada tanaman sayur dan buah.",
        quiz: {
          question: "Pupuk organik cair lebih cepat memberikan manfaat pada tanaman karena ...",
          options: [
            { id: 'A', text: "bentuk cairnya memudahkan unsur hara cepat diserap tanaman", isCorrect: true },
            { id: 'B', text: "pupuk cair membuat tanah menjadi keras sehingga akar kuat", isCorrect: false },
            { id: 'C', text: "semua jenis tanaman hanya membutuhkan pupuk cair", isCorrect: false },
            { id: 'D', text: "pupuk cair tidak memerlukan proses pembuatan", isCorrect: false }
          ]
        }
      },
      {
        id: 6,
        title: "Cara Membuat Pupuk Organik Cair",
        videoUrl: "https://www.youtube.com/embed/JRsyeMSsi_A",
        content: "Saksikan video di atas tentang cara membuat pupuk organik cair (POC) dengan mudah.",
        quiz: {
          question: "Cara yang benar dalam membuat pupuk organik cair (POC) adalah ...",
          options: [
            { id: 'A', text: "Merendam bahan organik seperti kulit buah atau air cucian beras lalu didiamkan hingga mengalami peragian", isCorrect: true },
            { id: 'B', text: "Membakar daun kering lalu mencampurnya dengan bensin", isCorrect: false },
            { id: 'C', text: "Mencampur sampah plastik dengan air agar cepat larut", isCorrect: false },
            { id: 'D', text: "Me-nyiram tanaman menggunakan air sabun setiap hari", isCorrect: false }
          ]
        }
      },
      {
        id: 7,
        title: "Persamaan Pupuk Kompos dan Pupuk Organik Cair",
        content: "Pupuk kompos dan pupuk organik cair memiliki beberapa persamaan. Keduanya sama-sama dibuat dari bahan alami sehingga aman digunakan bagi tanaman dan lingkungan. Selain itu, kedua pupuk ini tidak mengandung zat kimia berbahaya dan dapat dibuat sendiri di rumah dengan bahan yang mudah ditemukan.\n\nPenggunaan pupuk alami membantu tanaman tumbuh sehat dan menghasilkan panen yang aman dimakan. Dengan memanfaatkan sampah organik menjadi pupuk, kita juga belajar bersikap kreatif dan mandiri. Sampah dapur yang sebelumnya dianggap tidak berguna ternyata dapat diubah menjadi sesuatu yang sangat bermanfaat.",
        quiz: {
          question: "Mengapa penggunaan pupuk alami dianggap lebih baik bagi lingkungan?",
          options: [
            { id: 'A', text: "Karena pupuk alami dapat digunakan berulang kali tanpa habis", isCorrect: false },
            { id: 'B', text: "Karena pupuk alami membantu memanfaatkan sampah organik menjadi sesuatu yang berguna", isCorrect: true },
            { id: 'C', text: "Karena pupuk alami membuat tanaman tumbuh tanpa air", isCorrect: false },
            { id: 'D', text: "Karena semua pupuk alami berbentuk cair", isCorrect: false }
          ]
        }
      },
      {
        id: 8,
        title: "Istirahat Sejenak: Mengasah Ingatan",
        content: "Ayo segarkan ingatanmu dengan bermain game Game 3!",
        isGame: true
      },
      {
        id: 9,
        title: "Kuis Akhir Modul 3",
        isFinalQuiz: true,
        content: "Selamat! Kamu telah menyelesaikan materi Modul 3: Cara Membuat Pupuk untuk Tanaman. Mari uji pemahamanmu secara menyeluruh dengan menjawab kuis di bawah ini."
      }
    ]
  })
};
