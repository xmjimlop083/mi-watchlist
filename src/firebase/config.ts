// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB1OR_FzVhUaAGQk6Joyg_ulGnTHY62Jc",
  authDomain: "mi-watchlist.firebaseapp.com",
  projectId: "mi-watchlist",
  storageBucket: "mi-watchlist.firebasestorage.app",
  messagingSenderId: "895370296381",
  appId: "1:895370296381:web:f41c1e8f6d9ad0a1c63e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
