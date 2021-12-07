import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Switch } from "react-router";
const styles = {
  cartIconContainer: {
    position: "relative",
    marginRight: 30,
  },
  cartCount: {
    background: "gray",
    borderRadius: "50%",
    padding: "0px 6px",
    position: "absolute",
    right: 5,
    top: 12,
  },
};
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="links">
          <Link to="/">
<<<<<<< HEAD
            <img src={icon} className="navbar-icon" alt="navbaricon"/>
=======
            <h1>Electorent</h1>
>>>>>>> 9ef6b64f31421e0050f5e2139a902a82957aecca
          </Link>
        </div>
        <div className="search-container">
          <input placeholder="Search" className="search-input" />
          <button className="search-button">
            <i className="fas fa-search fa-2x"></i>
          </button>
        </div>
        <div className="navbar-routes">
          <div className="links" style={styles.cartIconContainer}>
            <Link to="/cart">
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span style={styles.cartCount}>5</span>
            </Link>
          </div>
          <div className="links">
            <Link to="/wishlist">Wishlist </Link>
          </div>
          <div className="links">
            <Link to="/login">Login/Sign-up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
