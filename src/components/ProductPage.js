import React, { useState } from "react";
import Reviews from "./Reviews";
import Faqs from "./Faqs";
import StarRatings from "react-star-ratings";
import "../styles/ProjectPage.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function ProjectPage() {
  const [resourceType, setResourceType] = useState(<Faqs />);
  const location = useLocation();
  const product = location.state;
  const { title, image, price, description, rating } = product.product;
  // rating = { rate: 4, count: 90 };
  return (
    <div>
      <div className="product">
        <div className="product-image">
          <img src={image} alt="Product" />
        </div>
        <div className="product-info-productpage">
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>₹ {price * 75}</h2>
          <h3>
            Rating:{" "}
            <StarRatings
              rating={rating.rate}
              starDimension="20px"
              starSpacing="2px"
            />{" "}
            ({rating.count} reviews)
          </h3>
          {/* <label for="options">{type}</label>

          <select name="options" id="options">
            <option value={types[0]}>{types[0]}</option>
            <option value={types[1]}>{types[1]}</option>
            <option value={types[2]}>{types[2]}</option>
            <option value={types[3]}>{types[3]}</option>
          </select> */}
          <div style={{ margin: "10px" }}>
            <div className="productpage-buttons">
              <button>Add to Cart</button>
              <button>Rent Now</button>
            </div>
            <button className="buynow-button">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="other-info">
        <div className="button-area">
          <button
            onClick={() => {
              setResourceType(<Reviews />);
            }}
          >
            Reviews
          </button>
          <button
            onClick={() => {
              setResourceType(<Faqs />);
            }}
          >
            FAQs
          </button>
          <button
            onClick={() => {
              setResourceType("Similar Items");
            }}
          >
            Similar Items
          </button>
        </div>
        {resourceType}
      </div>
    </div>
  );
}

export default ProjectPage;
