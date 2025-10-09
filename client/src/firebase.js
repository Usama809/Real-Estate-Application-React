// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dae07.firebaseapp.com",
  projectId: "mern-estate-dae07",
  storageBucket: "mern-estate-dae07.firebasestorage.app",
  messagingSenderId: "253490595141",
  appId: "1:253490595141:web:e8251fe60266d6df3a6a2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);