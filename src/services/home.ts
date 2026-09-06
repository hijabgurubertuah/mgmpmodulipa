/**
 * Service for handling home/landing page logic, specifically user session.
 */

export const homeService = {
  /**
   * Saves the username to local storage.
   */
  saveUser: (username: string) => {
    localStorage.setItem('ipa_user', username);
  },

  /**
   * Gets the saved username from local storage.
   */
  getUser: (): string | null => {
    return localStorage.getItem('ipa_user');
  },

  /**
   * Removes the user from local storage.
   */
  logout: () => {
    localStorage.removeItem('ipa_user');
  },

  /**
   * Gets saved progress from local storage (specific to the username if available).
   */
  getProgress: (username?: string) => {
    const activeUser = username || localStorage.getItem('ipa_user') || '';
    if (activeUser) {
      const saved = localStorage.getItem(`ipa_progress_${activeUser}`);
      if (saved) return JSON.parse(saved);
    }
    // Fallback to legacy generic key
    const generic = localStorage.getItem('ipa_progress');
    return generic ? JSON.parse(generic) : null;
  },

  /**
   * Saves progress to local storage (specific to the username).
   */
  saveProgress: (progress: any, username?: string) => {
    const activeUser = username || progress?.username || localStorage.getItem('ipa_user') || '';
    if (activeUser) {
      localStorage.setItem(`ipa_progress_${activeUser}`, JSON.stringify(progress));
    } else {
      localStorage.setItem('ipa_progress', JSON.stringify(progress));
    }
  }
};
