import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUhZnIJ08W6ypa7UZ4bbjhpafuAGWrKZI",
  authDomain: "gen-lang-client-0048290776.firebaseapp.com",
  projectId: "gen-lang-client-0048290776",
  storageBucket: "gen-lang-client-0048290776.firebasestorage.app",
  messagingSenderId: "751293536135",
  appId: "1:751293536135:web:c7f3a5a08a996728476522"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-remixmodulipapak-eb8246d2-76be-4880-9b9d-eb0144689e67");
