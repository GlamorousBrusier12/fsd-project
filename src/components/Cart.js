import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/Cart.css";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Cart({ data }) {
  console.log(data);

  const [totalprice, setTotalprice] = useState(0);
  const [Titems, setTitems] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;
    data.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalprice(price);
    setTitems(items);
  }, [data, totalprice, setTotalprice, Titems, setTitems]);

  return (
    <div className="Cartsummary">
      {Titems === 0 ? (
        <div>
          <h2 style={{ fontfamily: "fantasy", textalign: "center" }}>
            Your Cart Is Empty
          </h2>
          <img
            src="https://cdn.dribbble.com/users/619199/screenshots/3787913/animated_cart.gif"
            alt="Your Cart is Empty"
          ></img>
        </div>
      ) : (
        <div>
          <div className="Cart ">
            <h1>Items</h1>
            {data.map((x) => {
              return <MiniCart content={x} />;
            })}
          </div>
          <div className="Summary ">
            <h1>Cart Summary</h1>
            <h2>Items: {Titems}</h2>
            <h2>Total: ₹{totalprice}</h2>
            <div className="Pbutton">
              <Link to="/Payment">
                <button>Proceed</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.cartReducer.cart,
    authorized: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Cart);

// add to cart-> cart items( with duplicate check)
//  step-1
// add to cart:
// add to cart -> dispatch -> update the cart items of a user in the Api through redux
// step -2
// fetch the products from the store instead of the api directly
