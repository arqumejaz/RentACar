// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQlltLP21gU-8-rzJFC_vj3bWspDb-Q5s",
  authDomain: "project-509ca.firebaseapp.com",
  projectId: "project-509ca",
  storageBucket: "project-509ca.appspot.com",
  messagingSenderId: "862796057861",
  appId: "1:862796057861:web:5c37e3d6165efbed0bfb6c",
  measurementId: "G-SPFK8H6889"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db};
