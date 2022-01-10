import React from "react";
import { NavLink } from "react-router-dom";

const OnlineLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/newtask">Create Task</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn-floating btn-large waves-effect waves-light teal lighten-3"
        >
          DI
        </NavLink>
      </li>
    </ul>
  );
};

export default OnlineLinks;
