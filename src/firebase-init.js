// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPovea8HlqLJHFh9VBWo63x0ZkleR0PyY",
  authDomain: "auth-moha-milon-47c77.firebaseapp.com",
  projectId: "auth-moha-milon-47c77",
  storageBucket: "auth-moha-milon-47c77.firebasestorage.app",
  messagingSenderId: "405034441025",
  appId: "1:405034441025:web:e4b538c1c8b398b03069c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
