import React from "react";
import { NavLink } from "react-router-dom";

const OfflineLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </ul>
  );
};

export default OfflineLinks;
