import React, { Component } from "react";

import "../styles/Cart.css";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // get cart items from store
  }
  render() {
    const { authorized } = this.props;
    if (!authorized) {
      return <Redirect to="/login" />;
    }
    const data = this.props.data;
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
