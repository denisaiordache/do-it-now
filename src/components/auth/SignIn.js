import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword} from "../../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/");
    }, [user, loading]);
  
  return (
              <div className="container">
               <div className="white">
                   <h5 className="grey-text text-darken 3">Sign In</h5>
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                   </div>

                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                   </div>

                   <div className="input-field">
                     <button className="btn teal darken-4" onClick={() => logInWithEmailAndPassword(email, password)}>
                        Sign In
                     </button>

                   </div>

               </div>

            </div>
  );
}
export default SignIn;