import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Payment.css";
import {connect} from "react-redux"
// import AddressForm from "./AddressForm";

function Payment(props) {
  const deliveryAddress = props.address;
  const upis = props.upi;
  console.log(deliveryAddress);
  const location = useLocation();
  const product = location.state.product;
  const [quantity,setQuantity] = useState(1);
  const [address,setAddress] = useState(deliveryAddress);

  const [newAddress,setNewAddress] = useState({
    Name:"",
    email:"",
    address:"",
    city:"",
    state:"",
    phoneNo:"",
    zip:""
})

const handleChange = (e)=>{
    const {name,value} = e.target;
    setNewAddress(prevValues=>{
        return {
            ...prevValues,
            [name]:value
        }
    })
}
const addAddress = (e)=>{
  setAddress(prevValues=>{
    return [
      ...prevValues,
      newAddress
    ]
  })

  setNewAddress({
    Name:"",
    email:"",
    address:"",
    city:"",
    state:"",
    phoneNo:"",
    zip:""
})
  e.preventDefault();
}

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
            <h3>Price: ₹{product.price}</h3>
            <h3>Quantity: <input type="number" id="qty-product" value={quantity} onChange={(e)=>{if(e.target.value>0)setQuantity(e.target.value); else setQuantity(1)}}/></h3>
            <h3>
              Total Amount: ₹{product.price} x {quantity} = ₹{product.price * quantity}
            </h3>
          </div>
        </div>
      </div>
      <div className="shipping-address">
        <h1>Shipping Address</h1>
        <div className="address-list">
          <h3>Please select your preffered shippping address:</h3>
          {address.map((addr,index)=>{
            return(<div className="address-pack" key={index}>
            <input type="radio" id={"address" + index+1} name="address" />
            <label for={"address" + index+1}>
            <div>
              {addr.Name}, {addr.address}, {addr.city}, {addr.state}, {addr.zip}
            </div> 
            <div>
              Phone: {addr.phoneNo}, email: {addr.email}
            </div>
            </label>
          </div>);
          })}
        </div>
        <h1>Want to ship to a different Address?</h1>
        <p> Fill the details in the given form</p>
        <div className="form-parent">
        <form action="/payment">
          <div className="form-content">
            <h2>Billing Address</h2>
            <label for="fname">
              <i className="fa fa-user"></i> Full Name
            </label>
            <input
              type="text"
              id="fname"
              name="Name"
              placeholder="Sravan Kumar"
              onChange={handleChange}
              value={newAddress.Name}
              required
            />
            <label for="email">
              <i className="fa fa-envelope"></i> Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="sravan@example.com"
              onChange={handleChange}
              value={newAddress.email}
              required
            />
            <label for="adr">
              <i className="fa fa-address-card-o"></i> Address
            </label>
            <input
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
              onChange={handleChange}
              value={newAddress.address}
              required
            />
            <label for="city">
              <i className="fa fa-institution"></i> City
            </label>
            <input type="text" id="city" name="city" placeholder="Hyderabad" onChange={handleChange} value={newAddress.city} required/>

            <label for="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Telangana"
              onChange={handleChange}
              value={newAddress.state}
              required
            />

            <label for="zip">Pincode</label>
            <input type="text" id="zip" name="zip" placeholder="500007" onChange={handleChange} value={newAddress.zip} required/>

            <label for="phoneNo">Phone Number</label>
            <input type="text" id="phoneNo" name="phoneNo" placeholder="9989486489" onChange={handleChange} value={newAddress.phoneNo} required/>
          </div>

          <button onClick={addAddress} className="btn">Add Address</button>
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
        <h2>Saved UPI</h2>
        <div className="payment-list">
          {upis.map((upi,index)=>{
            return (
            <div className="address-pack" key={index}>
              <input type="radio" id={"debit" + index+1} name="address" />
              <label for={"debit" + index+1}>{upi.name}, {upi.cardNo}, {upi.phoneNo}, {upi.type}</label>
            </div>
            )
          })}
        </div>
        <div className="form-parent">
          <form action="/payment">
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
          <button className="btn">Add Details</button>
            </form>
        </div>
      </div>
      <button className="proceed-btn">Proceed <i class="fas fa-arrow-right"></i></button>
    </div>
  );}
// }

function mapStateToProps(state) {
  return {
    address: state.user.userData.deliveryAdress,
    upi:state.user.userData.upi,
    isLoggedIn: state.user.isLoggedIn,
  };
}
export default connect(mapStateToProps)(Payment);

