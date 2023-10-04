// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfZQ8vjArdkSRhicYPVZhxBGDZvdNcGM",
  authDomain: "react-project-c9408.firebaseapp.com",
  projectId: "react-project-c9408",
  storageBucket: "react-project-c9408.appspot.com",
  messagingSenderId: "1081233856486",
  appId: "1:1081233856486:web:01bcddc26810c5d540a827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);