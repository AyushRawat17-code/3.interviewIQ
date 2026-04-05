import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-65f4e.firebaseapp.com",  // ← fix this
  projectId: "interviewiq-65f4e",
  storageBucket: "interviewiq-65f4e.firebasestorage.app",
  messagingSenderId: "606257719601",
  appId: "1:606257719601:web:27742342b6d10e46122810"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth , provider}
