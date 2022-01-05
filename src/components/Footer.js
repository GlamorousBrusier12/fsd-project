import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <h2>Connect with Us</h2>
      <div className="footer-row-2">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fas fa-envelope"></i>
      </div>
      <hr className="footer-hr"/>
      <div className="footer-row-1">
        <h3><i class="fas fa-shopping-bag"></i>  Sell on Electorent</h3>
        <h3><i class="fas fa-address-card"></i> About Us</h3>
        <h3><i class="fas fa-money-check-alt"></i> Electorent Card</h3>
        <h3><i class="fas fa-pen"></i> Terms and Conditions</h3>
      </div>
      <hr className="footer-hr"/>
      <p>Electorent © 2021-2022</p>
    </div>
  );
}

export default Footer;
