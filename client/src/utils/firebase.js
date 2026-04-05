import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBe0ZYYhjZgK2CmwgWs2xjd7MfAy1VDfKY",
  authDomain: "interviewiq-65f4e.firebaseapp.com",
  projectId: "interviewiq-65f4e",
  storageBucket: "interviewiq-65f4e.firebasestorage.app",
  messagingSenderId: "839297223316",
  appId: "1:839297223316:web:f4469599a0a72d28d2c281"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, provider }
