// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEbV4bT9yZ_Q_sc7qgGl8t7sJisBYxZo",
  authDomain: "huertaprueba-814c7.firebaseapp.com",
  projectId: "huertaprueba-814c7",
  storageBucket: "huertaprueba-814c7.firebasestorage.app",
  messagingSenderId: "153453116747",
  appId: "1:153453116747:web:138ab0c86f33255b933cce",
  measurementId: "G-TKY7LC5HEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

