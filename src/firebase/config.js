// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_m_5QkpfQmYt-wCgXxyreJXDhLPyybc0",
    authDomain: "react-cursos-4b3d7.firebaseapp.com",
    projectId: "react-cursos-4b3d7",
    storageBucket: "react-cursos-4b3d7.firebasestorage.app",
    messagingSenderId: "137519406135",
    appId: "1:137519406135:web:c8569335a0edf42f48b3b2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
