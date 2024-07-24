// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyTvSbBMcad9hCBSHKDDkUDDA-dzhmSYc",
  authDomain: "for-her-by-her.firebaseapp.com",
  projectId: "for-her-by-her",
  storageBucket: "for-her-by-her.appspot.com",
  messagingSenderId: "1089076416147",
  appId: "1:1089076416147:web:1a6a02d1fd77a40f128766",
  measurementId: "G-BDB4QGQS1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider ();

export { auth, provider }