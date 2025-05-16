import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAytuOdHFqszlWiYrdYjJQVx9ZmlF_7I-o",
  authDomain: "data-01-fb0c0.firebaseapp.com",
  projectId: "data-01-fb0c0",
  storageBucket: "data-01-fb0c0.firebasestorage.app",
  messagingSenderId: "780802614088",
  appId: "1:780802614088:web:2426c4e98500828cc3c97d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, provider };
