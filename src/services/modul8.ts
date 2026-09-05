export const modul8Service = {
  getIntroduction: () => ({
    title: "Modul 8: Keberlanjutan Kebun",
    pages: [
      {
        id: 0,
        title: "Menanam Lagi",
        content: "Setelah panen, jangan biarkan media tanam kosong. Olah kembali tanahnya dan tanam benih baru untuk siklus berikutnya.",
        quiz: {
          question: "Apa langkah setelah panen agar kebun tetap produktif?",
          options: [
            { id: 'A', text: "Ditinggalkan saja", isCorrect: false },
            { id: 'B', text: "Olah kembali lahan dan tanam lagi", isCorrect: true }
          ]
        }
      },
      {
        id: 1,
        title: "Kuis Akhir Modul 8",
        isFinalQuiz: true,
        content: "Uji pemahaman keberlanjutanmu!"
      }
    ]
  })
};
