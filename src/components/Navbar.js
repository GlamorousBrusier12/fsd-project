import React, { Component } from "react";
import { icon } from "../resource";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Switch } from "react-router";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="links">
          <Link to="/">
            <img src={icon} className="navbar-icon" />
          </Link>
        </div>
        <input placeholder="Search" className="search-input" />
        <button className="search-button">search</button>
        <div className="links">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="links">
          <Link to="/wishlist">Wishlist </Link>
        </div>
        <div className="links">
          <Link to="/login">Login/Sign-up</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
