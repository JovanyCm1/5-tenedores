// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz26CzNnVg8oHgkiBOD2ciAk8tyBsxWy0",
  authDomain: "tenedores-v2-e0203.firebaseapp.com",
  projectId: "tenedores-v2-e0203",
  storageBucket: "tenedores-v2-e0203.appspot.com",
  messagingSenderId: "1020027196673",
  appId: "1:1020027196673:web:b5c08252b57beb30a27700",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
