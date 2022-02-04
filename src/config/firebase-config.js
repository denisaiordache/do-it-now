//import * as firebase from "firebase/app";
import "firebase/auth";
import {initializeApp} from 'firebase/app';
import { getFirestore  } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBp7UbGOoxsCGvHtEAHVjhYkUQF3nuSnd0",
    authDomain: "do-it-now-auth.firebaseapp.com",
    projectId: "do-it-now-auth",
    storageBucket: "do-it-now-auth.appspot.com",
    messagingSenderId: "913564222990",
    appId: "1:913564222990:web:b82d3a2fc76877327c5e5f",
    measurementId: "G-Y13GE76N6K"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  

export {db, auth};
  