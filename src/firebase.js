// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7l-Ak4VX7V_mABYRuwAs-b4Q3tWVY4FM",
  authDomain: "e-cell-task-82e8f.firebaseapp.com",
  projectId: "e-cell-task-82e8f",
  storageBucket: "e-cell-task-82e8f.firebasestorage.app",
  messagingSenderId: "166026211562",
  appId: "1:166026211562:web:2cd479da49fae642976793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
