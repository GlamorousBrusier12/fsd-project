import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleCategorySearch } from "../actions";

class Categories extends Component {
  handleCategoryClick = (category) => {
    this.props.dispatch(handleCategorySearch(category));
  };
  render() {
    return (
      <div>
        <div className="categories-container">
          <ul className="categories-list">
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/mens.png`}
                    onClick={() => {
                      this.handleCategoryClick("Mens");
                    }}
                  />
                  <p> Mens</p>
                </div>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/womens.png`}
                    onClick={() => {
                      this.handleCategoryClick("womens");
                    }}
                  />
                  <p> Womens</p>
                </div>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/kids.png`}
                    onClick={() => {
                      this.handleCategoryClick("kids");
                    }}
                  />
                  <p> Kids</p>
                </div>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/mobiles.png`}
                    onClick={() => {
                      this.handleCategoryClick("Electronics");
                    }}
                  />
                  <p> Mobiles</p>
                </div>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/laptop.png`}
                    onClick={() => {
                      this.handleCategoryClick("Accessories");
                    }}
                  />
                  <p> accessories</p>
                </div>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/home-appliance.png`}
                    onClick={() => {
                      this.handleCategoryClick("Electronics");
                    }}
                  />
                  <p> Appliances</p>
                </div>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <div className="category-item">
                  <img
                    alt="category-img"
                    src={process.env.PUBLIC_URL + `/images/household.png`}
                    onClick={() => {
                      this.handleCategoryClick("Accessories");
                    }}
                  />
                </div>
                <p> Home</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Categories);
