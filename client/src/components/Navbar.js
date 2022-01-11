import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { handleProductSearch, userLogout } from "../actions";
// styles for the cart icon in the navbar
const styles = {
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    borderRadius: "50%",
    padding: "0px 6px",
    position: "absolute",
    right: 1,
    top: 12,
  },
};

const validation = (searchWord) => {
  if (1 <= searchWord.length && searchWord.length <= 3) {
    return false;
  } else {
    return true;
  }
};
class Navbar extends Component {
  constructor() {
    super();
    // state of the component { searchWord : "" }
    this.state = {
      searchWord: "",
    };
  }
  updateSearchWord = (e) => {
    console.log("state: ", this.state);
    // search word from the state
    let searchWord =
      this.state.searchWord === undefined || this.state.searchWord === ""
        ? " "
        : this.state.searchWord;

    // console.log("SEARCH TEXT", searchWord);

    let result = validation(this.state.searchWord);
    console.log("Search wrod is", result);
    if (result) {
      // search the products based on the searchWord in the reducer(redux)
      this.props.dispatch(handleProductSearch(searchWord));
    } else {
      toast.warning("please make a search greater than 3");
      e.preventDefault();
    }
  };
  render() {
    const { cart } = this.props;
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
              <button
                className="search-button"
                onClick={(e) => {
                  this.updateSearchWord(e);
                }}
              >
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
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/cart.png`}
                alt="cart icon"
              />
              <span style={styles.cartCount}>
                <b>{cart.length}</b>
              </span>
            </Link>
          </div>
          <div className="links">
            <Link to="/userProfile">
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/user.png`}
                alt="User Profile"
              />
            </Link>
          </div>
          {/* renders the logout button only if the user is logged in */}
          {this.props.isLoggedIn && (
            <div className="links">
              <Link to="/">
                <img
                  style={{ height: 30, width: 30 }}
                  src={process.env.PUBLIC_URL + `/images/login.png`}
                  alt="Login/Logout"
                  onClick={() => {
                    // logging the user out from the website if the user is loggedIn
                    this.props.dispatch(userLogout());
                    toast.success("Logged out successfully!");
                  }}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// maps the state of the store to the props of the component
function mapStateToProps(state) {
  return {
    searchResults: state.search,
    isLoggedIn: state.user.isLoggedIn,
    cart: state.cartReducer.cart,
  };
}
export default connect(mapStateToProps)(Navbar);
