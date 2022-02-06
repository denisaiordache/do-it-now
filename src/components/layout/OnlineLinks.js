import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase-config";

const auth = getAuth();

const OnlineLinks = () => {
  const history = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [initials,setInitials] = useState(""); 
  const fetchUsername = async () =>{
    try{
      const q = query(collection(db,'users'),where("uid","==",user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setInitials(data.firstName[0] + data.lastName[0]);
    }
    catch(err)
    {
      console.error(err);
    }

  } 

  useEffect(() => {
  if (loading) return;
  if (!user) return history("/welcome");
  fetchUsername();
}, [user, loading]);
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/newtask">Create Task</NavLink>
      </li>
      <li>
        <NavLink to="/welcome" onClick={logout}>Log Out</NavLink>
      </li>
      <li>
        <NavLink
          to="/welcome"
          className="btn-floating btn-large waves-effect waves-light teal lighten-3"
        >
          {initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default OnlineLinks;
