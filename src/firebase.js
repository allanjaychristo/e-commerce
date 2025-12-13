// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDha_f408KTyGSLBDXSgpyT4tn2Pj-yQrk",
  authDomain: "ecommerce-e28b8.firebaseapp.com",
  projectId: "ecommerce-e28b8",
  storageBucket: "ecommerce-e28b8.firebasestorage.app",
  messagingSenderId: "827236511508",
  appId: "1:827236511508:web:88c8eab52c779de8061c01"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);
export { db };
