export const modul7Service = {
  getIntroduction: () => ({
    title: "Modul 7: Panen & Pasca Panen",
    pages: [
      {
        id: 0,
        title: "Waktu Panen",
        content: "Panenlah saat tanaman sudah cukup umur tapi jangan terlalu tua karena rasa akan berubah menjadi pahit atau keras.",
        quiz: {
          question: "Kapan sebaiknya kita memanen sayuran daun?",
          options: [
            { id: 'A', text: "Saat daun sudah kuning semua", isCorrect: false },
            { id: 'B', text: "Saat ukuran sudah optimal dan masih segar", isCorrect: true }
          ]
        }
      },
      {
        id: 1,
        title: "Kuis Akhir Modul 7",
        isFinalQuiz: true,
        content: "Mari uji pemahaman panen kamu!"
      }
    ]
  })
};
