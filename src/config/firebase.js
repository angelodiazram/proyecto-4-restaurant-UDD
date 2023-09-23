// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4QEojnh1wfXJoIbglE0OsHT3dmral8pc",
  authDomain: "db-restaurant-react-udd.firebaseapp.com",
  projectId: "db-restaurant-react-udd",
  storageBucket: "db-restaurant-react-udd.appspot.com",
  messagingSenderId: "66996003834",
  appId: "1:66996003834:web:80f44e3d1461d683927a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);