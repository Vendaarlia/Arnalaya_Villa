import React from "react";
import { Link } from "react-router";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg">
        <ParallaxImage src="/home/some_1_dark.png" alt="" />
      </div>

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/solutions">Features</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/updates">Gallery</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p>Have Questions?</p>
          <h3>Get in Touch</h3>
          <p className="primary">
            arnalayabeachhouse.com <br />
            Chat / Phone Call
          </p>
          <p>© 2024 <a href="http://dcardgm.com" target="_blank" style={{ color: "white" }} rel="noopener noreferrer">DCARDGM</a></p>
        </div>
        <div className="footer-col">
          <p>Planning a Visit?</p>
          <h3>Our Location</h3>
          <p className="primary">
          Jalan Nelayan, Banjar Canggu Tua, Canggu,<br/> Kuta Utara, Kabupaten Badung, Bali.
          </p>
          <p>Designed by DCARDGM</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">Make Your Voice Heard!</p>
        <p>Stand for Ethical AI in Music</p>

        <span>Join our movement to protect and empower music creators.</span>

        <div className="footer-ws"></div>

        <div className="footer-input">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="footer-submit">
          <Link to="/">Submit</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
