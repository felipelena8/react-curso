// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqv-Y51SkLHhRrIFgTN5kkj2_yxnqeLco",
  authDomain: "react-curso-85454.firebaseapp.com",
  projectId: "react-curso-85454",
  storageBucket: "react-curso-85454.appspot.com",
  messagingSenderId: "41535741834",
  appId: "1:41535741834:web:d1f6c35edc726fa7d4b273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => app