import React from "react";
import { auth } from "../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const authed = useAuthState(auth); // isauth() returns true or false based on localStorage
    console.log(authed[0]);
    return authed[0] !== null ? children : <Navigate to="/welcome" />;
  }

  export default PrivateRoute;