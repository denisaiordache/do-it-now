import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import { auth,registerWithEmailAndPassword } from "../../config/firebase-config";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate()
  const register = () => {
    if (!firstName || !lastName) alert("Please enter full name");
    registerWithEmailAndPassword(firstName,lastName, email, password);
    console.log("succes");
  };
  useEffect(() => {
    if (loading) return;
    if (user) history("/");
  }, [user, loading]);
  
  return (
    <div className="container">
               <div className="white">
                   <h5 className="grey-text text-darken 3">Sign Up</h5>
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                   </div>

                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                   </div>

                   <div className="input-field">
                       <label htmlFor="firstName">First Name</label>
                       <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                   </div>

                   <div className="input-field">
                       <label htmlFor="lastName">Last Name</label>
                       <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}/>
                   </div>

                   <div className="input-field">
                     <button className="btn teal darken-4" onClick={register}>
                        Sign Up
                     </button>

                   </div>
                   </div>
                   </div>
  );
}
export default SignUp;