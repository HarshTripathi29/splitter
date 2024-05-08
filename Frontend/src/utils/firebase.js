// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCucB0kl54K70bMBJr42kWMuYPseu3DXoc",
  authDomain: "splitter-f6a16.firebaseapp.com",
  projectId: "splitter-f6a16",
  storageBucket: "splitter-f6a16.appspot.com",
  messagingSenderId: "390294944355",
  appId: "1:390294944355:web:b509f3b0b14f2ee8e01656",
  measurementId: "G-YYGP80FGFP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
