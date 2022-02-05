import React from "react";
import { Link } from "react-router-dom";
import OnlineLinks from "./OnlineLinks";
import OfflineLinks from "./OfflineLinks";
import { connect } from "react-redux";
import { getAuth } from "firebase/auth";
//import { auth } from "../../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";



const auth = getAuth();
// const user = auth.currentUser;

// const x = onAuthStateChanged (auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//    console.log(user);
//    return user;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     return null;
//     console.log("log out user");
//   }
// });




const Navbar = () => {
  const history = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
  if (loading) return;
  if (!user) return history("/");
}, [user, loading]);

  return (
    <nav className="nav-wrapper teal darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          DoItNow
        </Link>
        
        {
          user !== null ?
        
        (<OnlineLinks />)
        :
        (<OfflineLinks />)
        }
        
         
        
       
      </div>
    </nav>
  );
};

const mapStateToProps = (state) =>
{ 
  console.log(state);
  return {
    
  }
  
}

export default connect(mapStateToProps)(Navbar);
