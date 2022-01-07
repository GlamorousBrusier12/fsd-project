import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Payment.css";

function Payment() {
  const location = useLocation();
  const product = location.state.product;
  console.log("My product", product);
  return (
    <div>
      <div className="item-summary">
        <h1>Item Summary</h1>
        <div className="item-details">
          <img
            src={product.image[0]}
            alt="item"
            style={{ height: "200px", width: "200px" }}
          />
          <div className="item-details-text">
            <h2>{product.title}</h2>
            <h3>Price: {product.price}</h3>
            <h3>Quantity: 2</h3>
            <h3>
              Total Amount: ${product.price} x 2 = ${product.price * 2}
            </h3>
          </div>
        </div>
      </div>
      <div className="shipping-address">
        <h1>Shipping Address</h1>
        <div className="address-list">
          <h3>Please select your preffered shippping address:</h3>
          <div className="address-pack">
            <input type="radio" id="address1" name="address" />
            <label for="address1">
              Sherlock Holmes, 221B, Baker Street, London,100008
            </label>
            <br />
          </div>
          <div className="address-pack">
            <input type="radio" id="address2" name="address" />
            <label for="address2">Some random address</label>
            <br />
          </div>
          <div className="address-pack">
            <input type="radio" id="address3" name="address" />
            <label for="address3">Some other random address</label>
          </div>
        </div>
        <h1>Want to ship to a different Address?</h1>
        <p> Fill the details in the given form</p>
      <div className="form-parent">
        <form action="">
          <div className="form-content">
            <h2>Billing Address</h2>
            <label for="fname">
              <i className="fa fa-user"></i> Full Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Sravan Kumar"
            />
            <label for="email">
              <i className="fa fa-envelope"></i> Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="sravan@example.com"
            />
            <label for="adr">
              <i className="fa fa-address-card-o"></i> Address
            </label>
            <input
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
            />
            <label for="city">
              <i className="fa fa-institution"></i> City
            </label>
            <input type="text" id="city" name="city" placeholder="Hyderabad" />

            <label for="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Telangana"
            />

            <label for="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder="500007" />
          </div>

          <label>
            <input type="checkbox" checked="checked" name="sameadr" /> Shipping
            address same as billing
          </label>
          <br />
          <input type="submit" value="Add Address" className="btn" />
        </form>
      </div>

      </div>
      
      <div className="payment-method">
        <h1>Payment: </h1>
        <div className="address-list">
          <p>Please select your preffered payment method:</p>
          <div className="address-pack">
            <input type="radio" id="debit" name="address" />
            <label for="debit">Debit Card</label>
          </div>
          <div className="address-pack">
            <input type="radio" id="credit" name="address" />
            <label for="credit">Credit Card</label>
          </div>
          <div className="address-pack">
            <input type="radio" id="upi" name="address" />
            <label for="upi">UPI</label>
          </div>
          <div className="address-pack">
            <input type="radio" id="net" name="address" />
            <label for="net">Net Banking</label>
          </div>
        </div>
        <div className="form-parent">
          <div class="form-content">
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
              <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
              <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
              <i class="fa fa-cc-discover" style={{ color: "orange" }}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            />
            <label for="ccnum">Credit card number</label>
            <input
              type="text"
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
            />
            <label for="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            />

            <label for="expyear">Exp Year</label>
            <input type="text" id="expyear" name="expyear" placeholder="2018" />

            <label for="cvv">CVV</label>
            <input type="password" id="cvv" name="cvv" placeholder="352" />
          </div>
        </div>
      </div>
      <button className="proceed-btn">Proceed <i class="fas fa-arrow-right"></i></button>
    </div>
  );
}

export default Payment;
