import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
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

// Helper function to recursively remove undefined values before saving to Firestore
function removeUndefined(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(item => removeUndefined(item));
  } else if (obj !== null && typeof obj === 'object') {
    const cleaned: any = {};
    Object.keys(obj).forEach(key => {
      if (obj[key] !== undefined) {
        cleaned[key] = removeUndefined(obj[key]);
      }
    });
    return cleaned;
  }
  return obj;
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
      const cleanedData = removeUndefined(moduleData);
      await setDoc(docRef, cleanedData);
    } catch (error) {
      console.error(`Error saving module ${moduleData.id}:`, error);
      throw error;
    }
  },

  // Save current active modules in Firestore as the new custom default
  saveCurrentAsDefault: async (): Promise<void> => {
    try {
      // 1. Get all current modules from modules collection
      const querySnapshot = await getDocs(collection(db, 'modules'));
      
      // 2. Fetch and delete existing custom defaults first to avoid stale modules
      const oldDefaults = await getDocs(collection(db, 'default_modules'));
      for (const oldDoc of oldDefaults.docs) {
        await deleteDoc(doc(db, 'default_modules', oldDoc.id));
      }

      // 3. Save current modules into 'default_modules'
      for (const docSnapshot of querySnapshot.docs) {
        const data = docSnapshot.data();
        const docRef = doc(db, 'default_modules', docSnapshot.id);
        await setDoc(docRef, removeUndefined(data));
      }
    } catch (error) {
      console.error("Error saving current modules as default:", error);
      throw error;
    }
  },

  // Seed or Reset all modules to default. Uses 'default_modules' if exists, else falls back to local services.
  resetAllModulesToDefault: async (): Promise<void> => {
    try {
      // 1. Fetch custom defaults
      const defaultSnapshot = await getDocs(collection(db, 'default_modules'));
      
      // 2. Clear current modules to prevent leftover modules
      const currentSnapshot = await getDocs(collection(db, 'modules'));
      for (const curDoc of currentSnapshot.docs) {
        await deleteDoc(doc(db, 'modules', curDoc.id));
      }

      if (!defaultSnapshot.empty) {
        // Restore from custom defaults
        for (const defDoc of defaultSnapshot.docs) {
          const defaultData = defDoc.data();
          const destRef = doc(db, 'modules', defDoc.id);
          await setDoc(destRef, removeUndefined(defaultData));
        }
      } else {
        // Fallback to local default modules 1-8
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
      }
    } catch (error) {
      console.error("Error resetting modules to default:", error);
      throw error;
    }
  }
};
