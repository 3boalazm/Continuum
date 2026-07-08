/* Continuum cloud config — FIREBASE.
   Paste your Firebase Web App config to enable accounts + sync.
   Leave the fields EMPTY to run in local-only "guest" mode (no cloud).
   Get it from: Firebase console > Project settings > Your apps > Web app > SDK setup > Config.
   See FIREBASE_SETUP.md for the full setup. */
window.CONTINUUM_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",     // e.g. "your-app.firebaseapp.com"
    projectId: "",      // e.g. "your-app"
    appId: ""           // e.g. "1:123...:web:abc..."
    // storageBucket / messagingSenderId are optional for auth+firestore
  }
};
