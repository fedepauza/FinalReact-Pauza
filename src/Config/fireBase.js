

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCNwYwHbo4eYh-Hhe2q4TlU9o9hj-zMHzw",
    authDomain: "finalreact-78064.firebaseapp.com",
    projectId: "finalreact-78064",
    storageBucket: "finalreact-78064.firebasestorage.app",
    messagingSenderId: "601822217691",
    appId: "1:601822217691:web:ca257b1ec7573089b293fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;