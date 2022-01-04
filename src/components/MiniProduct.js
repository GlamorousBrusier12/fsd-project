import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import "../styles/miniProduct.css";
import { Link } from "react-router-dom";
class MiniProduct extends Component {
  render() {
    const { image, price, rating, id } = this.props.data;
    // console.log
    return (
      <div className="mini-product-container">
        <div className="mini-product-image-container">
          <Link to={`/products/${id}`} target="_blank">
            <img
              src={image[0]}
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
