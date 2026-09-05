/**
 * Configuration for Google Form integration.
 * To get the entry IDs:
 * 1. Open your Google Form
 * 2. Click "Get pre-filled link" from the three-dot menu
 * 3. Fill in some sample data and click "Get link"
 * 4. Copy the link and look for "entry.XXXXXX=" parameters
 */
export const GOOGLE_FORM_CONFIG = {
  // Replace with your actual Google Form ID (from the URL)
  formId: '1FAIpQLScPEq4lH7-oyl_HypqoWOmOK_8cnynrzXcouHuTwI29u8es2A', 
  
  // Replace with your actual Entry IDs
  entries: {
    name: 'entry.686015244',    // Entry ID for "Nama"
    userClass: 'entry.2130309312', // Entry ID for "Kelas"
    score: 'entry.1698413794',   // Entry ID for "Nilai"
    quizName: 'entry.1415345765', // Entry ID for "Nama Kuis/Materi"
    date: 'entry.date_placeholder', // Entry ID for "Tanggal" (optional)
  }
};
