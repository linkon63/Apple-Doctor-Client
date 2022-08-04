// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBy0yQQcZ1cr1k0KElwUPIaHiek7cQhS-A",
    authDomain: "apple-doctor-47e66.firebaseapp.com",
    projectId: "apple-doctor-47e66",
    storageBucket: "apple-doctor-47e66.appspot.com",
    messagingSenderId: "232062384660",
    appId: "1:232062384660:web:002aa6207ce7c0525ac501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;