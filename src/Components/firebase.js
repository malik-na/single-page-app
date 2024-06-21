import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1_nGfXuPghfJL3ya4-Wuz9Dr1KvGFDHI",
  authDomain: "login-auth-2a5ef.firebaseapp.com",
  projectId: "login-auth-2a5ef",
  storageBucket: "login-auth-2a5ef.appspot.com",
  messagingSenderId: "665593880307",
  appId: "1:665593880307:web:eb4b11a8d6a734e7cca186",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
