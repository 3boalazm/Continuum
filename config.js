// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeNZRKHNY7YQYnrLM_gag9Z8c86KKk3IU",
  authDomain: "sakan-md.firebaseapp.com",
  databaseURL: "https://sakan-md-default-rtdb.firebaseio.com",
  projectId: "sakan-md",
  storageBucket: "sakan-md.firebasestorage.app",
  messagingSenderId: "546752458858",
  appId: "1:546752458858:web:13f1532e3afcb99e305a13",
  measurementId: "G-HG3Y3FLRQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);