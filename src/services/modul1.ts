/**
 * Service for handling introduction page data.
 */

export const modul1Service = {
  getIntroduction: () => ({
    title: "Mengapa Berkebun itu Penting?",
    pages: [
      {
        id: 0,
        title: "Motivasi Sebelum Belajar",
        triggerQuestion: "Semangat adalah kunci keberhasilan.",
        videoUrl: "https://www.youtube.com/embed/3MhZsABZWr0",
        content: "Sebelum kita mulai belajar tentang berkebun, mari kita saksikan video motivasi ini agar kita lebih bersemangat dalam menimba ilmu untuk masa depan kita sebagai generasi yang mandiri.",
        quiz: {
          question: "Apakah anda sudah semangat untuk belajar?",
          options: [
            {
              id: 'YA',
              text: "Sudah, saya siap belajar!",
              isCorrect: true
            },
            {
              id: 'TIDAK',
              text: "Belum, saya mau nonton videonya lagi.",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 1,
        title: "Mengapa Berkebun itu Penting?",
        triggerQuestion: "Jika besok tidak ada lagi warung buka, kamu bisa makan apa dari rumahmu sendiri?",
        videoUrl: "https://www.youtube.com/embed/LGGnhMoUSbI",
        quiz: {
          question: "Menurut anda, apa hal paling penting yang harus dilakukan setiap orang agar tetap bisa makan jika krisis pangan benar-benar terjadi, selain daripada mengandalkan uang?",
          options: [
            {
              id: 'A',
              text: "Mencoba menanam makanan sendiri di rumah, meskipun di lahan sempit, supaya punya cadangan makanan langsung tanpa harus selalu membeli ke toko.",
              isCorrect: true
            },
            {
              id: 'B',
              text: "Tetap berbelanja makanan seperti biasa di supermarket, menganggap beras akan selalu tersedia, dan tidak mau belajar cara mengolah makanan alternatif lainnya",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 2,
        title: "Kemandirian Pangan",
        content: `Bayangkan besok pagi kamu bangun, dan semua warung, toko, dan pasar di sekitar rumahmu tutup. Tidak ada yang bisa dibeli. Tidak ada nasi, tidak ada sayur, tidak ada lauk.

Apa yang akan kamu makan?

Bagi sebagian orang, situasi seperti ini adalah bencana. Tapi ada sekelompok orang yang justru tenang — mereka pergi ke halaman rumah, memetik sayuran yang mereka tanam sendiri, dan memasak untuk keluarganya.

Kamu akan belajar menjadi bagian dari kelompok kedua itu. Kamu akan menanam, merawat, dan memanen tanaman sendiri .`,
        quiz: {
          question: "Apa alasan utama mengapa kita mempelajari cara berkebun sendiri?",
          options: [
            {
              id: 'A',
              text: "Agar bisa menjual sayuran dan mendapat uang banyak",
              isCorrect: false
            },
            {
              id: 'B',
              text: "Karena diwajibkan oleh kurikulum sekolah",
              isCorrect: false
            },
            {
              id: 'C',
              text: "Agar kita mampu menghasilkan makanan sendiri dan tidak sepenuhnya bergantung pada toko atau pasar",
              isCorrect: true
            },
            {
              id: 'D',
              text: "Karena berkebun adalah hobi yang menyenangkan di waktu luang",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 3,
        title: "Rantai Pangan",
        content: `Sebutir nasi yang kamu makan hari ini sudah melewati perjalanan yang sangat panjang. Petani menanam padi di sawah, memanen, membawanya ke tempat penggilingan, hasilnya dikemas dan dikirim ke gudang distributor, lalu ke toko, baru akhirnya sampai ke rumahmu.

Perjalanan ini disebut rantai pangan — serangkaian tahap yang harus dilalui makanan sebelum sampai ke konsumen.

Rantai ini panjang dan bisa putus kapan saja. Banjir merendam jalan → truk pengiriman tidak bisa lewat → toko kehabisan stok → kamu tidak bisa membeli. Harga bahan bakar naik → biaya pengiriman naik → harga sayuran di pasar melonjak.

Semakin panjang rantai pangan, semakin rapuh. Itulah mengapa kemampuan menghasilkan makanan sendiri — meski hanya sebagian kecil — adalah keterampilan yang sangat berharga.`,
        quiz: {
          question: "Mengapa rantai pangan yang terlalu panjang bisa berbahaya bagi masyarakat?",
          options: [
            {
              id: 'A',
              text: "Karena makanan menjadi tidak segar saat sampai ke konsumen",
              isCorrect: false
            },
            {
              id: 'B',
              text: "Karena semakin banyak tahap yang bisa terganggu, sehingga pasokan makanan mudah terhenti",
              isCorrect: true
            },
            {
              id: 'C',
              text: "Karena harganya selalu lebih murah dari makanan lokal",
              isCorrect: false
            },
            {
              id: 'D',
              text: "Karena petani menjadi terlalu sibuk dan tidak punya waktu istirahat",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 4,
        title: "Ketahanan Pangan Keluarga",
        content: `Saat pandemi COVID-19 melanda Indonesia di tahun 2020, banyak pasar dan toko ditutup sementara. Harga sayuran melonjak. Banyak keluarga panik karena tidak tahu harus makan apa.

Tapi ada keluarga-keluarga yang tetap tenang. Mereka pergi ke halaman belakang rumah, memetik kangkung, bayam, atau cabai yang mereka tanam sendiri. Momen itu mengajarkan satu hal penting: kebun kecil di rumah adalah jaring pengaman yang nyata.

Ketahanan pangan keluarga artinya kemampuan keluarga untuk memenuhi kebutuhan pangannya sendiri — setidaknya sebagian — tanpa sepenuhnya bergantung pada toko atau pasar luar.

Kita tidak perlu menanam semua makanan yang kita butuhkan. Cukup satu tanaman, satu pot, satu langkah kecil — itu sudah merupakan awal dari kemandirian yang sesungguhnya.`,
        quiz: {
          question: "Apa yang dimaksud dengan \"ketahanan pangan keluarga\"?",
          options: [
            {
              id: 'A',
              text: "Kemampuan keluarga membeli semua kebutuhan pangan dari supermarket besar",
              isCorrect: false
            },
            {
              id: 'B',
              text: "Program bantuan pangan dari pemerintah untuk keluarga miskin",
              isCorrect: false
            },
            {
              id: 'C',
              text: "Kemampuan keluarga memenuhi sebagian kebutuhan pangannya sendiri tanpa sepenuhnya bergantung pada pihak luar",
              isCorrect: true
            },
            {
              id: 'D',
              text: "Kebiasaan menyimpan stok makanan dalam jumlah besar di lemari",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 5,
        title: "Ibadah & Tradisi",
        content: `Dalam budaya Melayu Riau, nenek moyang kita telah lama mengenal tradisi turun ke ladang sebagai bagian dari kehidupan sehari-hari. Mereka menanam sendiri apa yang dimakan, mulai dari padi, sayur-mayur, hingga tanaman obat. Aktivitas ini bukan hanya sekadar memenuhi kebutuhan pangan, tetapi juga menjadi warisan nilai kemandirian dan kebersamaan. Setiap proses, dari membuka lahan hingga panen, dilakukan dengan penuh ketekunan serta diiringi semangat gotong royong yang mempererat hubungan antaranggota masyarakat.

Masyarakat Melayu tradisional tidak pernah memisahkan kehidupan mereka dari alam. Berkebun dipandang sebagai bentuk rasa syukur atas rezeki yang diberikan Sang Pencipta, sekaligus upaya menjaga keseimbangan lingkungan. Mereka memahami bahwa alam harus dirawat agar tetap memberi manfaat bagi generasi berikutnya. Oleh karena itu, dalam setiap kegiatan bercocok tanam, terdapat nilai-nilai kearifan lokal yang mengajarkan kesederhanaan, keharmonisan, dan tanggung jawab terhadap alam sebagai amanah yang harus dijaga dengan baik.`,
        quiz: {
          question: "Dalam budaya Melayu Riau, kegiatan berkebun bagi masyarakat tradisional memiliki makna utama sebagai ....",
          options: [
            {
              id: 'A',
              text: "cara mendapatkan keuntungan ekonomi sebesar-besarnya",
              isCorrect: false
            },
            {
              id: 'B',
              text: "bentuk gaya hidup modern masyarakat desa",
              isCorrect: false
            },
            {
              id: 'C',
              text: "wujud rasa syukur dan menjaga keseimbangan alam",
              isCorrect: true
            },
            {
              id: 'D',
              text: "kegiatan sampingan di waktu luang",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 6,
        title: "Teknik Tumpang Sari",
        content: `Petani cerdas tidak pernah menyia-nyiakan ruang. Mereka menanam lebih dari satu jenis tanaman di lahan yang sama, teknik yang dikenal sebagai tumpang sari atau intercropping. Dalam satu lahan atau pot, dua atau lebih tanaman dapat tumbuh berdampingan dan saling memberikan manfaat.

Contoh penerapan tumpang sari dapat dilihat pada kombinasi tanaman seperti kangkung dengan daun bawang, atau bayam dengan kacang panjang. Tanaman-tanaman tersebut dapat hidup bersama tanpa saling mengganggu, bahkan dapat saling mendukung pertumbuhannya.

Tumpang sari memiliki beberapa keunggulan dibandingkan menanam satu jenis tanaman saja. Pertama, efisiensi ruang karena satu tempat dapat menghasilkan lebih dari satu jenis tanaman. Kedua, efisiensi waktu, di mana tanaman yang cepat panen dapat dipetik lebih dulu sambil menunggu tanaman lain yang lebih lama tumbuh.

Selain itu, tumpang sari juga memberikan perlindungan alami. Kombinasi tanaman tertentu dapat membantu mengurangi serangan hama. Nenek moyang masyarakat Riau telah lama menerapkan cara ini di ladang tradisional, seperti menanam padi bersama jagung atau singkong bersama pisang, sebagai bentuk kearifan dalam memanfaatkan alam.`,
        quiz: {
          question: "Teknik menanam lebih dari satu jenis tanaman dalam satu lahan atau pot secara bersamaan disebut ....",
          options: [
            {
              id: 'A',
              text: "monokultur",
              isCorrect: false
            },
            {
              id: 'B',
              text: "hidroponik",
              isCorrect: false
            },
            {
              id: 'C',
              text: "tumpang sari",
              isCorrect: true
            },
            {
              id: 'D',
              text: "rotasi tanaman",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 7,
        title: "Manfaat Berkebun",
        videoUrl: "https://res.cloudinary.com/dgoimk4kg/video/upload/v1777342817/Manfaat_berkebun_untuk_kesehatan_mental_cvrrbe.mp4",
        content: `Berkebun memiliki banyak manfaat bagi kesehatan fisik. Kegiatan seperti mencangkul, menyiram, dan merawat tanaman melibatkan gerakan tubuh yang dapat membantu menjaga kebugaran serta melatih otot. Selain itu, berkebun biasanya dilakukan di luar ruangan sehingga tubuh mendapatkan udara segar yang baik untuk kesehatan.

Selain bermanfaat secara fisik, berkebun juga berdampak positif bagi kesehatan mental. Melihat tanaman tumbuh dengan baik dapat memberikan rasa senang dan kepuasan tersendiri. Aktivitas ini juga membantu mengurangi stres, menenangkan pikiran, serta melatih kesabaran dan ketekunan.

Berkebun juga membantu memenuhi kebutuhan pangan dan menjaga lingkungan. Dengan menanam sendiri, seseorang dapat memperoleh hasil yang lebih segar, sehat, dan aman dikonsumsi sekaligus menghemat pengeluaran. Di sisi lain, tanaman yang ditanam dapat menghasilkan oksigen, menyerap polusi, dan membantu menjaga keseimbangan alam.`,
        quiz: {
          question: "Salah satu manfaat berkebun bagi kesehatan mental adalah ....",
          options: [
            {
              id: 'A',
              text: "meningkatkan kekuatan otot tubuh",
              isCorrect: false
            },
            {
              id: 'B',
              text: "menghasilkan oksigen lebih banyak",
              isCorrect: false
            },
            {
              id: 'C',
              text: "mengurangi stres dan menenangkan pikiran",
              isCorrect: true
            },
            {
              id: 'D',
              text: "menghemat pengeluaran rumah tangga",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 8,
        title: "Media Tanam",
        content: `Media tanam bukan sekadar "tanah biasa". Tanaman yang ditanam di pot tidak punya akses ke tanah yang luas seperti di kebun terbuka. Semua nutrisi, air, dan udara harus tersedia dalam ruang pot yang terbatas itu.

Campuran terbaik untuk pot kita: tanah 2 bagian + sekam padi atau serbuk kayu 1 bagian + kompos atau pupuk kandang 1 bagian.

Fungsi masing-masing bahan: tanah memberi struktur dan penopang, sekam membuat media lebih gembur sehingga akar mudah bernapas, kompos menyediakan nutrisi organik yang dilepas perlahan sesuai kebutuhan tanaman.

Cara cek apakah media tanammu sudah pas: ambil segenggam, remas kuat-kuat, lalu buka telapak tangan. Jika media menggumpal tapi tidak meneteskan air, dan gumpalan itu langsung hancur saat disentuh — campuranmu sudah tepat.

Jika tidak punya sekam atau kompos, tanah saja sudah cukup untuk memulai. Kualitas media bisa kita perbaiki di pertemuan berikutnya.`,
        quiz: {
          question: "Apa fungsi sekam padi atau serbuk kayu dalam campuran media tanam pot?",
          options: [
            {
              id: 'A',
              text: "Sebagai sumber nutrisi utama bagi tanaman",
              isCorrect: false
            },
            {
              id: 'B',
              text: "Membuat media lebih gembur sehingga akar mudah bernapas dan air mudah meresap",
              isCorrect: true
            },
            {
              id: 'C',
              text: "Agar media tanam berwarna lebih gelap dan menarik",
              isCorrect: false
            },
            {
              id: 'D',
              text: "Menggantikan fungsi kompos dalam campuran media",
              isCorrect: false
            }
          ]
        }
      },
      {
        id: 9,
        title: "Istirahat Sejenak: Game Memory Kebun",
        content: "Mari segarkan pikiranmu sejenak dengan bermain game memory sebelum kuis akhir!",
        isGame: true
      },
      {
        id: 10,
        title: "Kuis Akhir Perkenalan",
        isFinalQuiz: true,
        content: "Selamat! Kamu telah menyelesaikan seluruh materi perkenalan. Sekarang, mari uji pemahamanmu dengan kuis akhir ini sebelum kita lanjut ke pertemuan berikutnya.",
        questions: [
          {
            id: 'q1',
            question: "Apa tujuan utama kita belajar berkebun di sekolah?",
            options: [
              { id: 'a', text: "Menjadi petani profesional" },
              { id: 'b', text: "Kemandirian pangan keluarga" },
              { id: 'c', text: "Mendapatkan nilai rapor saja" }
            ],
            correctId: 'b'
          },
          {
            id: 'q2',
            question: "Mengapa rantai pangan yang panjang dianggap rapuh?",
            options: [
              { id: 'a', text: "Karena makanan jadi tidak enak" },
              { id: 'b', text: "Karena banyak titik yang bisa terganggu/putus" },
              { id: 'c', text: "Karena petani jadi malas" }
            ],
            correctId: 'b'
          },
          {
            id: 'q3',
            question: "Apa keuntungan teknik tumpang sari dalam pot?",
            options: [
              { id: 'a', text: "Tanaman jadi lebih berwarna" },
              { id: 'b', text: "Efisiensi ruang dan hasil panen ganda" },
              { id: 'c', text: "Tidak perlu disiram" }
            ],
            correctId: 'b'
          },
          {
            id: 'q4',
            question: "Berapa lama rata-rata waktu panen sawi?",
            options: [
              { id: 'a', text: "10-20 hari" },
              { id: 'b', text: "30-40 hari" },
              { id: 'c', text: "3-4 bulan" }
            ],
            correctId: 'b'
          },
          {
            id: 'q5',
            question: "Apa fungsi sekam padi dalam media tanam?",
            options: [
              { id: 'a', text: "Sebagai hiasan" },
              { id: 'b', text: "Membuat media gembur agar akar bernapas" },
              { id: 'c', text: "Sebagai pengganti air" }
            ],
            correctId: 'b'
          }
        ]
      }
    ]
  })
};
