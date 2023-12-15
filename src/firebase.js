// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJO9Oz1vuy4FRAjbjMxuL7TLWJ4NuGJcY",
  authDomain: "portfolio-4840f.firebaseapp.com",
  projectId: "portfolio-4840f",
  storageBucket: "portfolio-4840f.appspot.com",
  messagingSenderId: "394169593907",
  appId: "1:394169593907:web:43876d5cf3b2c95b0d3346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);