import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGUWzWQjcIdmTsKkML7-bYYsAuV6e7JNg",
  authDomain: "canias-415118.firebaseapp.com",
  projectId: "canias-415118",
  storageBucket: "canias-415118.appspot.com",
  messagingSenderId: "1046326776810",
  appId: "1:1046326776810:web:04a15930500a067ffd9893"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);