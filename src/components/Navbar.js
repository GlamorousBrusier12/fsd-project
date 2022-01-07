import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleProductSearch, userLogout } from "../actions";
// import { Switch } from "react-router";
const styles = {
  cartIconContainer: {
    position: "relative",
    // marginRight: 30,
  },
  cartCount: {
    borderRadius: "50%",
    padding: "0px 6px",
    position: "absolute",
    right: 1,
    top: 12,
  },
};
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: "",
    };
  }
  updateSearchWord = () => {
    console.log("state: ", this.state);
    let searchWord =
      this.state.searchWord === undefined || this.state.searchWord === ""
        ? " "
        : this.state.searchWord;

    console.log("SEARCH TEXT", searchWord);
    this.props.dispatch(handleProductSearch(searchWord));
    console.log("this.props ", this.props.history);
  };
  checkUserLogin() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      // history.push('/)
    } else {
      // history.push('/userProfile)
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="navbar-container">
        <div className="links">
          <Link to="/">
            <h1>Electorent</h1>
          </Link>
        </div>
        <div className="search-container">
          <form>
            <input
              style={{
                textAlign: "left",
                padding: 3,
                outline: "none",
                fontSize: 20,
              }}
              placeholder="Search"
              className="search-input"
              onChange={(e) => {
                this.setState({ ...this.state, searchWord: e.target.value });
              }}
            />
            <Link to="/products" style={{ marginLeft: "-1%" }}>
              <button className="search-button" onClick={this.updateSearchWord}>
                <i
                  style={{ color: "black" }}
                  className="fas fa-search fa-2x"
                ></i>
              </button>
            </Link>
          </form>
        </div>
        <div className="navbar-routes">
          <div className="links" style={styles.cartIconContainer}>
            <Link to="/cart">
              {/* <i className="fas fa-shopping-cart fa-2x"></i> */}
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/cart.png`}
                alt="cart icon"
              />
              <span style={styles.cartCount}>
                <b>18</b>
              </span>
            </Link>
          </div>
          {/* <div className="links">
              <Link to="/wishlist">
                <img
                  style={{ height: 30, width: 30 }}
                  src={process.env.PUBLIC_URL + `/images/heart.png`}
                  alt="wishlist"
                />
              </Link>
            </div> */}
          <div className="links">
            <Link to="/userProfile">
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/user.png`}
                alt="User Profile"
              />
            </Link>
          </div>
          <div className="links">
            <Link to="/">
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/login.png`}
                alt="Login/Logout"
                onClick={() => {
                  this.props.dispatch(userLogout());
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchResults: state.search,
    isLoggedIn: state.user.isLoggedIn,
  };
}
export default connect(mapStateToProps)(Navbar);
