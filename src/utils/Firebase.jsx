// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuvCl2J4Akj42qTx2bmNyRmOYmRb1AN9c",
  authDomain: "ayuntraa-cd2b3.firebaseapp.com",
  projectId: "ayuntraa-cd2b3",
  storageBucket: "ayuntraa-cd2b3.appspot.com",
  messagingSenderId: "650787249218",
  appId: "1:650787249218:web:46c0f6a972354cbc7f21db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();