import React, { Component } from "react";
import { data } from "../data";
import "../styles/Cart.css";
import MiniCart from "./MiniCart";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    };
    // get cart items from store
  }

  render() {
    console.log(data);
    return (
      <div className="Cart">
        <h1>Cart</h1>
        {data.map((x) => {
          return <MiniCart content={x} />;
        })}
      </div>
    );
  }
}
export default Cart;

// add to cart-> cart items( with duplicate check)
//  step-1
// add to cart:
// add to cart -> dispatch -> update the cart items of a user in the Api through redux
// step -2
// fetch the products from the store instead of the api directly
