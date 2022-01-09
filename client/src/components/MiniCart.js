import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { handlerfc } from "../actions/cartAction";
import { handleinc } from "../actions/cartAction";
import { handledec } from "../actions/cartAction";
function MiniCart(props) {
  const { content } = props.content;

  return (
    <div className="Item1">
      <div className="image">
        <img src={props.content.image[0]} alt={props.content.title} />
      </div>
      <div className="column">
        <h4 id="title">{props.content.title}</h4>
        <h4 id="price">₹{props.content.price}</h4>
        <h5 id="total">
          Total:{props.content.qty} x {props.content.price}=₹
          {props.content.qty * props.content.price}
        </h5>
      </div>

      <div className="cart-button">
        <div className="plusAndMinus">
          <button
            id="increment"
            onClick={() =>
              props.dispatch(handleinc(props.content, props.content.qty))
            }
          >
            +
          </button>
          <button
            id="decrement"
            onClick={() =>
              props.dispatch(handledec(props.content, props.content.qty))
            }
          >
            -
          </button>
        </div>

        <div className="Rbutton">
          <button
            id="remove"
            onClick={() => props.dispatch(handlerfc(props.content))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps)(MiniCart);
