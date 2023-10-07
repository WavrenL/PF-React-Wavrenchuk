// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY8yJBYzOYTp9v4uZvPjOos5-dOUsOjaE",
  authDomain: "f1store-289e6.firebaseapp.com",
  projectId: "f1store-289e6",
  storageBucket: "f1store-289e6.appspot.com",
  messagingSenderId: "779862143509",
  appId: "1:779862143509:web:55581447d4eb794211941c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
