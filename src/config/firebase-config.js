//import * as firebase from "firebase/app";
import "firebase/auth";
import {initializeApp} from 'firebase/app';
import { getFirestore  } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

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
  const auth = getAuth();
  

  const registerWithEmailAndPassword = async (firstName, lastName, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName,
        lastName,
        authProvider: "local",
        email
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
    console.log("user logged out");
  };

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
      console.log("succes login");
    }
  };

 

export {db, auth,registerWithEmailAndPassword,logout,logInWithEmailAndPassword}

  