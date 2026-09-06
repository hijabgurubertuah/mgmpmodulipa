import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import { modul1Service } from './modul1';
import { modul2Service } from './modul2';
import { modul3Service } from './modul3';
import { modul4Service } from './modul4';
import { modul5Service } from './modul5';
import { modul6Service } from './modul6';
import { modul7Service } from './modul7';
import { modul8Service } from './modul8';

const localServices: Record<number, any> = {
  1: modul1Service,
  2: modul2Service,
  3: modul3Service,
  4: modul4Service,
  5: modul5Service,
  6: modul6Service,
  7: modul7Service,
  8: modul8Service,
};

export interface Page {
  id: number;
  title: string;
  titleSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  content: string;
  copyablePrompt?: string;
  triggerQuestion?: string;
  videoUrl?: string;
  isGame?: boolean;
  isFinalQuiz?: boolean;
  isSheet?: boolean;
  sheetUrl?: string;
  isForm?: boolean;
  formUrl?: string;
  imageUrl?: string;
  imagePreviewUrl?: string;
  isDriveFolder?: boolean;
  driveFolderUrl?: string;
  quiz?: {
    question: string;
    options: { 
      id: string; 
      text: string; 
      isCorrect: boolean;
      redirectModule?: number;
      redirectPage?: number;
      customMessage?: string;
    }[];
  };
  questions?: {
    id: string;
    question: string;
    options: { id: string; text: string }[];
    correctId: string;
  }[];
}

export interface ModuleData {
  id: number;
  title: string;
  pages: Page[];
}

export const firebaseService = {
  // Get a single module by number. If not found in Firestore, seed it from local service and return it.
  getModule: async (num: number): Promise<ModuleData> => {
    try {
      const docRef = doc(db, 'modules', `modul_${num}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as ModuleData;
        // Ensure id is present
        return {
          ...data,
          id: num
        };
      } else {
        // Seed from local service
        const localService = localServices[num];
        if (localService) {
          const localData = localService.getIntroduction();
          const moduleData: ModuleData = {
            id: num,
            title: localData.title,
            pages: localData.pages
          };
          // Save to Firestore so it's seeded
          await setDoc(docRef, moduleData);
          return moduleData;
        }
        // Fallback placeholder
        return {
          id: num,
          title: `Modul ${num}`,
          pages: [
            {
              id: 0,
              title: "Halaman Baru",
              content: "Silakan edit materi ini di halaman admin."
            }
          ]
        };
      }
    } catch (error) {
      console.error(`Error fetching module ${num}:`, error);
      // Fail-safe: return local service if offline or error
      const localService = localServices[num];
      if (localService) {
        const localData = localService.getIntroduction();
        return {
          id: num,
          title: localData.title,
          pages: localData.pages
        };
      }
      throw error;
    }
  },

  // Get all modules (numbers 1 to 12 or more).
  // This helps list all modules in admin and ensures they are all loaded or seeded.
  getAllModules: async (): Promise<ModuleData[]> => {
    try {
      // We will load at least modules 1 to 8, but also load any extra modules saved in Firestore
      const modulesList: ModuleData[] = [];
      const querySnapshot = await getDocs(collection(db, 'modules'));
      
      const dbModules: Record<number, ModuleData> = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data() as ModuleData;
        dbModules[data.id] = data;
      });

      // We want to make sure modules 1-8 are always present, even if Firestore was empty
      for (let i = 1; i <= 8; i++) {
        if (dbModules[i]) {
          modulesList.push(dbModules[i]);
        } else {
          // Fetching individual module will trigger auto-seed
          const seeded = await firebaseService.getModule(i);
          modulesList.push(seeded);
        }
      }

      // Add any additional modules (e.g. Modul 9, 10...)
      Object.keys(dbModules).forEach((key) => {
        const idNum = parseInt(key, 10);
        if (idNum > 8) {
          modulesList.push(dbModules[idNum]);
        }
      });

      return modulesList.sort((a, b) => a.id - b.id);
    } catch (error) {
      console.error("Error getting all modules:", error);
      // Local fallback for listing
      const fallbacks: ModuleData[] = [];
      for (let i = 1; i <= 8; i++) {
        const localService = localServices[i];
        if (localService) {
          const localData = localService.getIntroduction();
          fallbacks.push({
            id: i,
            title: localData.title,
            pages: localData.pages
          });
        }
      }
      return fallbacks;
    }
  },

  // Save/Update a module in Firestore
  saveModule: async (moduleData: ModuleData): Promise<void> => {
    try {
      const docRef = doc(db, 'modules', `modul_${moduleData.id}`);
      await setDoc(docRef, moduleData);
    } catch (error) {
      console.error(`Error saving module ${moduleData.id}:`, error);
      throw error;
    }
  },

  // Seed or Reset all modules 1-8 to their initial local values in Firestore
  resetAllModulesToDefault: async (): Promise<void> => {
    try {
      for (let i = 1; i <= 8; i++) {
        const localService = localServices[i];
        if (localService) {
          const localData = localService.getIntroduction();
          const docRef = doc(db, 'modules', `modul_${i}`);
          await setDoc(docRef, {
            id: i,
            title: localData.title,
            pages: localData.pages
          });
        }
      }
    } catch (error) {
      console.error("Error resetting modules:", error);
      throw error;
    }
  }
};
