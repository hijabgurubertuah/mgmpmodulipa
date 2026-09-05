export const modul6Service = {
  getIntroduction: () => ({
    title: "Modul 6: Pengendalian Hama",
    pages: [
      {
        id: 0,
        title: "Mengenal Hama & Penyakit",
        content: "Hama adalah hewan pengganggu, penyakit biasanya dari jamur atau bakteri. Gunakan pestisida nabati yang aman bagi kesehatan.",
        quiz: {
          question: "Mengapa disarankan menggunakan pestisida nabati?",
          options: [
            { id: 'A', text: "Lebih mahal", isCorrect: false },
            { id: 'B', text: "Ramah lingkungan dan aman dikonsumsi", isCorrect: true }
          ]
        }
      },
      {
        id: 1,
        title: "Kuis Akhir Modul 6",
        isFinalQuiz: true,
        content: "Uji pemahaman hami kamu!"
      }
    ]
  })
};
