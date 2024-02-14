// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOL5p98X4YuDw5E3hLVtP8Q4Z0d2B8Eko",
  authDomain: "forkifyrecipe.firebaseapp.com",
  projectId: "forkifyrecipe",
  storageBucket: "forkifyrecipe.appspot.com",
  messagingSenderId: "155723767611",
  appId: "1:155723767611:web:4ccc37bd7801938bee211e",
  measurementId: "G-NSW1VKM48X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
