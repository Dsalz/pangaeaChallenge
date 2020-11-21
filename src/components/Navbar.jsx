import React from "react";
import { NavLink, Link } from "react-router-dom";
import { number, func } from "prop-types";

// CSS
import "../css/Navbar.css";

// Images
import cartImg from "../images/cart.png";

const Navbar = ({ cartNo, openCart }) => {
  return (
    <nav className="index-navbar">
      <div className="index-navbar-logo">
        <NavLink to="/" className="index-navbar-logo-link">
          <img
            src="https://store.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png"
            alt="logo"
            className="index-navbar-logo-img"
          />
        </NavLink>
      </div>
      <div className="index-navbar-links">
        <Link to="/account">Account</Link>
        <a className="cart-link" onClick={openCart} role="presentation">
          <img className="cart-img" src={cartImg} alt="cart" />
          <span className="cart-no">{cartNo}</span>
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartNo: number.isRequired,
  openCart: func.isRequired
};

export default Navbar;
