// do set up and initialisation
// use import.meta.env.VARIABLE_NAME to access env variables (Vite-specific)
// someValue = import.meta.env.VITE_SOME_VALUE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeZsXd05_fY2YuHiP9F1QRH_OOK1JySaM",
  authDomain: "baas-starter.firebaseapp.com",
  projectId: "baas-starter",
  storageBucket: "baas-starter.appspot.com",
  messagingSenderId: "497446879636",
  appId: "1:497446879636:web:158de87cc9653d96c20f81",
  measurementId: "G-RD4PB84NLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
