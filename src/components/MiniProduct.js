import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import "../styles/miniProduct.css";
import { Link } from "react-router-dom";
class MiniProduct extends Component {
  render() {
    const { image, price, rating } = this.props.data;
    return (
      <div className="mini-product-container">
        <div className="mini-product-image-container">
          <Link
            to={{
              pathname: "/productpage",
              state: { product: this.props.data },
            }}
          >
            <img
              src={image}
              style={{
                padding: 10,
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
              alt="productImage"
            />
          </Link>
        </div>
        <div className="mini-product-data-container">
          <p style={{ justifyContent: "center" }}>{"₹" + price}</p>
          <StarRatings
            rating={rating.rate}
            starDimension="16px"
            starSpacing="2px"
            starRatedColor="#ffcc01"
          />
        </div>
      </div>
    );
  }
}

export default MiniProduct;
