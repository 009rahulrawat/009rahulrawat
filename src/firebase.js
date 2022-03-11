import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT8iaHyTr3U9HEsBcbUoRZU3WAZcF6Zuo",
  authDomain: "rec-socialmedia.firebaseapp.com",
  projectId: "rec-socialmedia",
  storageBucket: "rec-socialmedia.appspot.com",
  messagingSenderId: "122333233351",
  appId: "1:122333233351:web:5b195e68fb23555d243ee2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
