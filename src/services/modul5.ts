export const modul5Service = {
  getIntroduction: () => ({
    title: "Modul 5: Merawat Tanaman",
    pages: [
      {
        id: 0,
        title: "Penyiraman & Pemupukan",
        content: "Tanaman butuh makan dan minum. Siram secara rutin pagi atau sore hari, dan beri pupuk organik secara disiplin.",
        quiz: {
          question: "Kapan waktu terbaik menyiram tanaman?",
          options: [
            { id: 'A', text: "Siang hari terik", isCorrect: false },
            { id: 'B', text: "Pagi atau sore hari", isCorrect: true }
          ]
        }
      },
      {
        id: 1,
        title: "Kuis Akhir Modul 5",
        isFinalQuiz: true,
        content: "Uji pengetahuanmu tentang perawatan!"
      }
    ]
  })
};
