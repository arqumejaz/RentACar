// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRd_dtKjiM91_beEj_RXKym6j5yZ3YiPo",
    authDomain: "carrental-45688.firebaseapp.com",
    projectId: "carrental-45688",
    storageBucket: "carrental-45688.appspot.com",
    messagingSenderId: "367334216861",
    appId: "1:367334216861:web:11d02daf32ad9aaf0bb074",
    measurementId: "G-RG9GHDBGPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};