// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2LqtAhila4rNzKtlguawwF_XTAyeat4Y",
  authDomain: "quasartodolist-3527e.firebaseapp.com",
  projectId: "quasartodolist-3527e",
  storageBucket: "quasartodolist-3527e.firebasestorage.app",
  messagingSenderId: "573855219430",
  appId: "1:573855219430:web:d38cc302a24e0b3f9c8527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
