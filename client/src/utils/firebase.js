
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-150b9.firebaseapp.com",
  projectId: "fir-150b9",
  storageBucket: "fir-150b9.firebasestorage.app",
  messagingSenderId: "727353992943",
  appId: "1:727353992943:web:fa31a1db737618b0b05d1a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}