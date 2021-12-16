import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
function EachProduct(props) {
  // console.log("each product:", props.content);
  const { title, image, price, rating, category } = props.content;
  // console.log(props);
  return (
    <div>
      <div className="each-product">
        <div>
          <Link
            to={{
              pathname: "/productpage",
              state: { product: props.content },
            }}
          >
            <div className="img-size">
              <img className="productspage-image" src={image[0]} alt={title} />
            </div>
          </Link>
        </div>
        <div className="product-details-mini">
          <h3>{title}</h3>
          <h6>
            <h3>
              Rating:{" "}
              <StarRatings
                rating={rating.rate}
                starDimension="20px"
                starSpacing="2px"
                starC
              />{" "}
              ({rating.count} reviews)
            </h3>
          </h6>
          <p>{category}</p>
          <p>
            <b>{"₹" + price}</b> <strike> {"₹" + 1.15 * price}</strike>{" "}
            <span className="discount_percentage">
              <b>(15% off)</b>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
