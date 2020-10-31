import React from "react";
import { NavLink, Link } from "react-router-dom";

// CSS
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="index-navbar">
      <div className="index-navbar-logo">
        <NavLink to="/" className="index-navbar-logo-link">
          <img
            src="https://placehold.it/100"
            alt="logo"
            className="index-navbar-logo-img"
          />
        </NavLink>
      </div>
      <div className="index-navbar-links">
        <Link to="/login">
          <a id="loginlink">Login</a>
        </Link>
        <Link to="/signup">
          <a className="red-btn" id="signuplink">
            Sign Up
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
