import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../config/firebase-config";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const auth = getAuth();
const user = auth.currentUser;

// if(user !== null)
// {
//   const docRef = doc(db, "users",user.uid);
//   const docSnap = getDoc(docRef);
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }




const OnlineLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/newtask">Create Task</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={logout}>Log Out</NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn-floating btn-large waves-effect waves-light teal lighten-3"
        >
          {user.uid}
        </NavLink>
      </li>
    </ul>
  );
};

export default OnlineLinks;
