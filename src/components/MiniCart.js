import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
function MiniCart(props) {
  let newitem = props.content;
  const [itemQty, setItemQty] = useState(1);
  useEffect(() => {
    setItemQty(props.content.qty);
  }, []);
  const add = () => {
    // newitem.qty = newitem.qty + 1;
    setItemQty(itemQty + 1);
  };
  const remove = () => {
    let newQty;
    if (itemQty >= 1) newQty = itemQty - 1;
    else newQty = 0;
    setItemQty(newQty);
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
          Total:{itemQty} x {newitem.price}={itemQty * newitem.price}
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
