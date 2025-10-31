// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzd3oOx95ZZcn2g8CoJY_glUIGcm-khyA",
  authDomain: "tn-viernes-react.firebaseapp.com",
  projectId: "tn-viernes-react",
  storageBucket: "tn-viernes-react.firebasestorage.app",
  messagingSenderId: "962515491493",
  appId: "1:962515491493:web:e3bdc0d9f6c4abe5340b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export {app, database};