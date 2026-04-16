// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC-tNc4sqO0gAstGxRXAkx4CR1xG2e831o",
  authDomain: "fuel-management-system-7784c.firebaseapp.com",
  projectId: "fuel-management-system-7784c",
  storageBucket: "fuel-management-system-7784c.firebasestorage.app",
  messagingSenderId: "718691738844",
  appId: "1:718691738844:web:a590ae6d2c734ffa1f4019",
  measurementId: "G-Q6N1PWMBDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);
