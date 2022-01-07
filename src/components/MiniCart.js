import React from "react";
import { connect } from "react-redux";
function MiniCart(props) {
  let newitem = props.content;
  const add = () => {
    newitem.qty = newitem.qty + 1;
  };
  const remove = () => {
    if (newitem.qty >= 1) newitem.qty = newitem.qty - 1;
    else newitem.qty = 0;
  };

  return (
    <div className="Item1">
      <div className="image">
        <img src={newitem.image[0]} alt={newitem.title} />
      </div>
      <div className="column">
        <h4>{newitem.title}</h4>
        <h4>₹{newitem.price}</h4>
        <h5>
          Total:{newitem.qty} x {newitem.price}={newitem.qty * newitem.price}
        </h5>
      </div>

      <div className="cart-button">
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
      </div>
    </div>
  );
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(MiniCart);
