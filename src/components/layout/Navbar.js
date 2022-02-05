import React from "react";
import { Link } from "react-router-dom";
import OnlineLinks from "./OnlineLinks";
import OfflineLinks from "./OfflineLinks";
import { connect } from "react-redux";
import { getAuth } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const user = auth.currentUser;
console.log(user);


const Navbar = () => {
  return (
    <nav className="nav-wrapper teal darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          DoItNow
        </Link>
        { user !== null ?
        (
         <OnlineLinks />
        )
        :
        (
           <OfflineLinks />
        )
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
