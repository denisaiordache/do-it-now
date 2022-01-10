import React from "react";
import { Link } from "react-router-dom";
import OnlineLinks from "./OnlineLinks";
import OfflineLinks from "./OfflineLinks";

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

export default Navbar;
