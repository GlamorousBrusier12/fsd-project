import React, { useRef } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
function EachProduct(props) {
  // console.log("each product:", props.content);
  // Getting the data from Products.js as Props
  const { title, image, price, rating, discount, id } = props.content;
  const iconChange = useRef(null);
  const onHover = () => {
    iconChange.current.src =
      "https://cdn-icons.flaticon.com/png/512/2589/premium/2589054.png?token=exp=1641714832~hmac=4238930e64f5949ff7aed801e590c51b";
  };
  const onRemove = () => {
    iconChange.current.src =
      "https://cdn-icons-png.flaticon.com/512/535/535285.png";
  };
  // console.log(props);
  return (
    <div>
      <div className="each-product">
        <p id="wishlistaction">
          <img
            id="beforeadding"
            ref={iconChange}
            style={{ height: 20, width: 20 }}
            src="https://cdn-icons-png.flaticon.com/512/535/535285.png"
            onMouseOver={() => {
              onHover();
            }}
            onMouseOut={() => {
              onRemove();
            }}
          />
        </p>
        <div>
          <Link to={`/products/${id}`}>
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
