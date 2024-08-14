// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Xs9znD1TVkF-oepfEz8Xai_04Dwxn90",
  authDomain: "nawiri-52f47.firebaseapp.com",
  projectId: "nawiri-52f47",
  storageBucket: "nawiri-52f47.appspot.com",
  messagingSenderId: "262520557994",
  appId: "1:262520557994:web:511293a73ecdb56a825bd3",
  measurementId: "G-B64TMJ4XQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


