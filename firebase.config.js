import { initializeApp } from 'firebase/app';
import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from
"firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAfr8hn7WyMTPK9kX3A9cHL_2_EPX-41lg",
    authDomain: "web-development-trends.firebaseapp.com",
    projectId: "web-development-trends",
    storageBucket: "web-development-trends.firebasestorage.app",
    messagingSenderId: "1033130996649",
    appId: "1:1033130996649:web:dc33f415f1ce75b5494ab8"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

