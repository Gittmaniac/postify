// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from  "firebase/auth";
import { getFirestore } from  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBU1R5m1TagHrcUn8QY5pZLCWx10LD9eA",
  authDomain: "maymay-d04d9.firebaseapp.com",
  projectId: "maymay-d04d9",
  storageBucket: "maymay-d04d9.appspot.com",
  messagingSenderId: "1044095758196",
  appId: "1:1044095758196:web:22d8705055edeb35dd4621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);