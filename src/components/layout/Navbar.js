import React from "react";
import { Link } from "react-router-dom";
import OnlineLinks from "./OnlineLinks";
import OfflineLinks from "./OfflineLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="nav-wrapper teal darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          DoItNow
        </Link>
        <OnlineLinks />
        <OfflineLinks />
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
