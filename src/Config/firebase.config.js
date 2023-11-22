// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import {getAuth,GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BCEvDShYRpX1ufSkvIb37a0Z_-xbCAg",
  authDomain: "expensetracker-39050.firebaseapp.com",
  projectId: "expensetracker-39050",
  storageBucket: "expensetracker-39050.appspot.com",
  messagingSenderId: "1055747008624",
  appId: "1:1055747008624:web:e6661f80829456fa00ecb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



export const db = getFirestore(app);
//firebase login 


//firebase init


//firebase deploy
