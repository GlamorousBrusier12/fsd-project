import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleProductSearch } from "../actions";
// import { Switch } from "react-router";
const styles = {
  cartIconContainer: {
    position: "relative",
    marginRight: 30,
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
  componentDidMount() {
    this.state = {
      searchWord: "",
    };
  }
  updateSearchWord = () => {
    let { searchWord } = this.state;
    console.log("SEARCH TEXT", searchWord);
    this.props.dispatch(handleProductSearch(searchWord));
  };
  render() {
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
          <div className="links">
            <Link to="/wishlist">
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/heart.png`}
                alt="wishlist"
              />{" "}
            </Link>
          </div>
          <div className="links">
            <Link to="/login">
              <img
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/user.png`}
                alt="user page"
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
  };
}
export default connect(mapStateToProps)(Navbar);
