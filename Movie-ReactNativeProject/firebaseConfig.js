// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCulmXcrgMLRpo_DMBl7NvbQpjEEyTwY-U",
  authDomain: "movie-project-f8c8b.firebaseapp.com",
  projectId: "movie-project-f8c8b",
  storageBucket: "movie-project-f8c8b.appspot.com",
  messagingSenderId: "951662143426",
  appId: "1:951662143426:web:4f4328622058d60f9c585b"
};

// Initialize Firebase

export const Firebase_Initialize = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_Initialize)