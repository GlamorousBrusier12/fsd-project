import React, { useRef } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { handleaddtoCart } from "../actions/cartAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";
function EachProduct(props) {
  // console.log("each product:", props.content);
  // Getting the data from Products.js as Props
  const { title, image, price, rating, discount, id } = props.content;
  const WishlistIconChange = useRef(null);
  const CartIconChange = useRef(null);
  const WonHover = () => {
    WishlistIconChange.current.src =
      "https://cdn-icons.flaticon.com/png/512/2589/premium/2589054.png?token=exp=1641714832~hmac=4238930e64f5949ff7aed801e590c51b";
  };
  const WonRemove = () => {
    WishlistIconChange.current.src =
      "https://cdn-icons-png.flaticon.com/512/535/535285.png";
  };
  const ConHover = () => {
    CartIconChange.current.src =
      "https://cdn-icons.flaticon.com/png/512/650/premium/650012.png?token=exp=1641719604~hmac=767f91cf73ddcd95068bfe372d98890b";
  };
  const ConRemove = () => {
    CartIconChange.current.src =
      "https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1641719534~hmac=7df3c20d68a3958384bec50aacf7d793";
  };
  // console.log(props);
  return (
    <div>
      <div className="each-product">
        <p id="wishlistaction">
          <img
            id="beforeadding"
            ref={WishlistIconChange}
            style={{ height: 30, width: 30 }}
            src="https://cdn-icons-png.flaticon.com/512/535/535285.png"
            onMouseOver={() => {
              WonHover();
            }}
            onMouseOut={() => {
              WonRemove();
            }}
          />
          <img
            ref={CartIconChange}
            style={{ height: 30, width: 30 }}
            src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1641719534~hmac=7df3c20d68a3958384bec50aacf7d793"
            onClick={() => {
              props.dispatch(handleaddtoCart(id));
              toast.success("Your Item Added to Cart");
            }}
            onMouseOver={() => {
              ConHover();
            }}
            onMouseOut={() => {
              ConRemove();
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(EachProduct);
