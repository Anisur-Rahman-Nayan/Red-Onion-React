// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArGFYPKSWeL_6zJOGmjVFphgyhtJlowUs",
  authDomain: "red-onion-restaurant-801e0.firebaseapp.com",
  projectId: "red-onion-restaurant-801e0",
  storageBucket: "red-onion-restaurant-801e0.appspot.com",
  messagingSenderId: "601459260071",
  appId: "1:601459260071:web:9e73bfe251c64ba055b982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;