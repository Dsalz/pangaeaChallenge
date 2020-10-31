import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <h5>Damola App Name</h5>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </section>
      <div className="footer-copyright">
        &copy;{new Date().getFullYear()} Damola App Name.
      </div>
    </footer>
  );
};

export default Footer;
