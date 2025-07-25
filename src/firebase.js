// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Pega aquí tu config:
const firebaseConfig = {
  apiKey: "AIzaSyA0am9nL3fS-dp7zL9cNxIBB1ukPVwkwq8",
  authDomain: "connect-gamer-58959.firebaseapp.com",
  projectId: "connect-gamer-58959",
  storageBucket: "connect-gamer-58959.firebasestorage.app",
  messagingSenderId: "613381687718",
  appId: "1:613381687718:web:0f454a0b55083c2792e767"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
