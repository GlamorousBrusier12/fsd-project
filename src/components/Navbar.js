import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Switch } from "react-router";
const styles = {
  cartIconContainer: {
    position: "relative",
    marginRight: 30,
  },
  cartCount: {
    // background: "gray",
    borderRadius: "50%",
    padding: "0px 6px",
    position: "absolute",
    right: 1,
    top: 12,
  },
};
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="links">
          <Link to="/">
            <h1>Electorent</h1>
          </Link>
        </div>
        <div className="search-container">
          <input
            style={{
              textAlign: "left",
              padding: 3,
              outline: "none",
              fontSize: 20,
            }}
            placeholder="Search"
            className="search-input"
          />
          <Link to="/products">
            <button className="search-button">
              <i style={{ color: "black" }} className="fas fa-search fa-2x"></i>
            </button>
          </Link>
        </div>
        <div className="navbar-routes">
          <div className="links" style={styles.cartIconContainer}>
            <Link to="/cart">
              {/* <i className="fas fa-shopping-cart fa-2x"></i> */}
              <img
                style={{ height: 30, width: 30 }}
                src="https://cdn-icons.flaticon.com/png/512/4051/premium/4051933.png?token=exp=1639299642~hmac=cff9f59c57aabbf706a89f689d844980"
                // src="https://cdn-icons.flaticon.com/png/512/4051/premium/4051778.png?token=exp=1639298511~hmac=6f38febece00451f6577c3501c2e419c"
                // src="https://cdn-icons.flaticon.com/png/512/4051/premium/4051787.png?token=exp=1639299642~hmac=eaad90cf1b65d72bb50e9828cd3bf786"
              />
              <span style={styles.cartCount}>
                <b>18</b>
              </span>
            </Link>
          </div>
          <div className="links">
            <Link to="/wishlist">
              <img
                style={{ height: 30, width: 30 }}
                src="https://cdn-icons.flaticon.com/png/128/4051/premium/4051800.png?token=exp=1639298511~hmac=641bf7b760f6c7e21aeb7d36f49417b6"
              />{" "}
            </Link>
          </div>
          <div className="links">
            <Link to="/login">
              <img
                style={{ height: 30, width: 30 }}
                src="https://cdn-icons.flaticon.com/png/128/4055/premium/4055362.png?token=exp=1639298511~hmac=6c9bb2e152caa1ffec9de9f890a5dcb0"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
