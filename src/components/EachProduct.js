import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
function EachProduct(props) {
  // console.log("each product:", props.content);
  // Getting the data from Products.js as Props
  const { title, image, price, rating, discount, id } = props.content;
  // console.log(props);
  return (
    <div>
      <div className="each-product">
        <div>
          <Link to={`/products/${id}`} >
            <div className="img-size">
              <img className="productspage-image" src={image[0]} alt={title} />
            </div>
          </Link>
        </div>
        <div className="product-details-mini">
          {/* <h3>{title}</h3> */}
          <p>{title}</p>
          {/* <p> */}
          <StarRatings
            rating={rating.rate}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="#FF9529"
          />
          ({rating.count} ratings)
          {/* </p> */}
          <p>
            <b>{"₹" + Math.ceil(((100 - discount) / 100) * price)}</b>
            <strike> {"₹" + price}</strike>
            <span className="discount_percentage">
              {" Save " +
                " ₹" +
                Math.ceil(price - ((100 - discount) / 100) * price) +
                ("(" + discount + "% )")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
