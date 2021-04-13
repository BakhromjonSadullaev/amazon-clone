import React from "react";
import "./footer.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <a href="#top" style={{ textDecoration: "none" }}>
        <p className="footer-navigator">Back to Top</p>
      </a>
      <div className="footer-container">
        <div className="footer-category">
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div className="footer-category">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>›See More Make Money with Us</p>
        </div>
        <div className="footer-category">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="footer-category">
          <h3>Let Us Help You</h3>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Returns & Replacements</p>
          <p>Shipping Rates & Policies</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-brand">
        <img
          className="footer-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <p>
          Clone of Amazon done by Bakhromjon Sadullaev. Conditions of UsePrivacy
          NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its
          affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
