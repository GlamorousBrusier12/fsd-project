import React, { useState } from "react";
import Reviews from "./Reviews";
import Faqs from "./Faqs";
import StarRatings from "react-star-ratings";
import "../styles/ProductPage.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function ProjectPage() {
  const [resourceType, setResourceType] = useState(<Faqs />);
  const location = useLocation();
  const product = location.state;
  const { title, image, price, description, rating, discount } =
    product.product;
  const [activeDiv, setActiveDiv] = useState(2);
  const toggleAnimation = (index) => {
    setActiveDiv(index);
  };
  return (
    <div>
      <div className="product">
        <div className="product-image">
          <img src={image} alt="Product" />
        </div>
        <div className="product-info-productpage">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            <b>{"₹" + Math.ceil(((100 - discount) / 100) * price)}</b>{" "}
            <strike> {"₹" + price}</strike>{" "}
            <span className="discount_percentage">
              {" Save " +
                " ₹" +
                Math.ceil(price - ((100 - discount) / 100) * price) +
                ("(" + discount + "%" + ")")}
            </span>{" "}
          </p>
          <h3>
            Rating:{" "}
            <StarRatings
              rating={rating.rate}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="#FF9529"
            />{" "}
            ({rating.count} reviews)
          </h3>
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
        <div className="categories-area" id="button-category">
          <div className="button-area">
            <button
              onClick={() => {
                setResourceType(<Reviews />);
                toggleAnimation(1);
              }}
              className={activeDiv === 1 ? "gelatine" : ""}
            >
              Reviews
            </button>
            <button
              onClick={() => {
                setResourceType(<Faqs />);
                toggleAnimation(2);
              }}
              className={activeDiv === 2 ? "gelatine" : ""}
            >
              FAQs
            </button>
            <button
              onClick={() => {
                toggleAnimation(3);
                setResourceType("Similar Items");
              }}
              className={activeDiv === 3 ? "gelatine" : ""}
            >
              Similar Items
            </button>
          </div>
        </div>
        <div className="resource-display">{resourceType}</div>
      </div>
    </div>
  );
}

export default ProjectPage;
