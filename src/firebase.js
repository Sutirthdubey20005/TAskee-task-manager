// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ✅ Your web app's Firebase configuration (from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyB7l-Ak4VX7V_mABYRuwAs-b4Q3tWVY4FM",
  authDomain: "e-cell-task-82e8f.firebaseapp.com",
  projectId: "e-cell-task-82e8f",
  storageBucket: "e-cell-task-82e8f.appspot.com", // ✅ corrected here
  messagingSenderId: "166026211562",
  appId: "1:166026211562:web:2cd479da49fae642976793"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore and Auth for use across your app
export const db = getFirestore(app);
export const auth = getAuth(app);
