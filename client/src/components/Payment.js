import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Payment.css";
import {connect} from "react-redux"
import { toast } from "react-toastify";

function Payment(props) {
  const user = props.user;
  const {deliveryAdress,upi,debitCards} = user;
  const location = useLocation();
  let {products,prevPath} = location.state;
  console.log(prevPath);
  if(prevPath==="/cart") products = props.cartItems;
  console.log(products)

  const [paymentStatus,setPaymentStaus] = useState("Payment Method");
  const addressChange = (e)=>{
    const {value} = e.target;
    setSelectedAddress(value);
  }

  const paymentDetailsChange = (e)=>{
    const {value} = e.target;
    setSelectedPayment(value);
  }

  const [selectedAddress,setSelectedAddress] = useState("Shipping Address");
  const [selectedPayment,setSelectedPayment] = useState("Payment Details");

  const [newAddress,setNewAddress] = useState({
    Name:"",
    email:"",
    address:"",
    city:"",
    state:"",
    phoneNo:"",
    zip:""
})

const [newCard,setNewCard] = useState({
  name:"",
  cardNo:"",
  expiry:""
})

const [newUpi,setNewUpi] = useState({
  name:"",
  cardNo:"",
  phoneNo:""
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

const handleCardChange = (e)=>{
  const {name,value} = e.target;
  setNewCard(prevValues=>{
      return {
          ...prevValues,
          [name]:value
      }
  })
}

const handleUpiChange = (e)=>{
  const {name,value} = e.target;
  setNewUpi(prevValues=>{
      return {
          ...prevValues,
          [name]:value
      }
  })
}

const patchAddressToServer = (e)=>{
  user.deliveryAdress.push(newAddress);
  let url = "http://localhost:3000/users/" + user.id;

      fetch(url, {
        method: "PATCH", // or 'PUT'
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully PATCHED", data);
          toast.success("Address Added")
          setNewAddress({
            Name:"",
            email:"",
            address:"",
            city:"",
            state:"",
            phoneNo:"",
            zip:""
        })
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        e.preventDefault();
}

const patchCardsToServer = (e)=>{
  user.debitCards.push(newCard);
  let url = "http://localhost:3000/users/" + user.id;

      fetch(url, {
        method: "PATCH", // or 'PUT'
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully PATCHED", data);
          setNewAddress({
            cardName:"",
            cardsNum:"",
            expdate:""
          })
          toast.success("Card Added");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        e.preventDefault();
}

const patchUpiToServer = (e)=>{
  user.upi.push(newUpi);
  let url = "http://localhost:3000/users/" + user.id;

      fetch(url, {
        method: "PATCH", // or 'PUT'
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully PATCHED", data);
          setNewAddress({
            Name:"",
            email:"",
            address:"",
            city:"",
            state:"",
            phoneNo:"",
            zip:""
        })
        toast.success("Upi information added");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        e.preventDefault();
}

const paymentChange = (e)=>{
  setPaymentStaus(e.target.value);
}

  return (
    <div>
      <div className="shipping-address">
        <h1>Shipping Address</h1>
        <div className="address-list">
          <h3>Please select your preffered shippping address:</h3>
          {deliveryAdress.map((addr,index)=>{
            return(<div className="address-pack" key={index}>
            <input type="radio" id={"address" + index+1} name="address" value={`
              ${addr.Name}, ${addr.address}, ${addr.city}, ${addr.state}, ${addr.zip}
              Phone: ${addr.phoneNo}, email: ${addr.email}
            `} onClick={addressChange}/>
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

          <button onClick={patchAddressToServer} className="btn">Add Address</button>
        </form>
      </div>
      </div>
      
      <div className="payment-method">
        <h1>Payment: </h1>
        <form>
        <div className="address-list">
          <p>Please select your preffered payment method:</p>
          <div className="address-pack">
            <input type="radio" id="debit" name="address" value="debit"  onClick={paymentChange} defaultValue={true}/>
            <label for="debit">Debit Card</label>
          </div>
          <div className="address-pack">
            <input type="radio" id="credit" name="address" value="credit"  onClick={paymentChange}/>
            <label for="credit">Credit Card</label>
          </div>
          <div className="address-pack">
            <input type="radio" id="upi" name="address" value="upi"  onClick={paymentChange}/>
            <label for="upi">UPI</label>
          </div>
        </div>
        </form>
        <div className="payment-list">
            <h2>Saved {paymentStatus==="upi"?"Upi":"Cards"}</h2>
          {(paymentStatus==="debit"||paymentStatus==="credit") && debitCards.map((card,index)=>{
            return (
            <div className="address-pack" key={index}>
              <input type="radio" id={"debit" + index+1} name="address" onClick={paymentDetailsChange} value={`
              ${card.name}, ${card.cardNo}, ${card.expiry}
            `}/>
              <label for={"debit" + index+1}>{card.name}, {card.cardNo}, {card.type}, {card.expiry}</label>
            </div>
            )
          })
          }
          {(paymentStatus === "upi") && upi.map((upi,index)=>{
            return (
            <div className="address-pack" key={index}>
              <input type="radio" id={"debit" + index+1} name="address" onClick={paymentDetailsChange} value={`
              ${upi.name}, ${upi.cardNo}, ${upi.expiry}
            `}/>
              <label for={"debit" + index+1}>{upi.name}, {upi.cardNo}, {upi.phoneNo}, {upi.type}</label>
            </div>
            )
          })}
        </div>
        {(paymentStatus==="debit"||paymentStatus==="credit") && 
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
              name="name"
              placeholder="John More Doe"
              onChange={handleCardChange}
            />
            <label for="ccnum">Card number</label>
            <input
              type="text"
              id="ccnum"
              name="cardNo"
              placeholder="1111-2222-3333-4444"
              onChange={handleCardChange}
            />
            <label for="expdate">Exp Date</label>
            <input type="text" id="expdate" name="expiry" placeholder="01/12" onChange={handleCardChange}/>
          </div>
          <button className="btn" onClick={patchCardsToServer}>Add Details</button>
            </form>
        </div>}
        {(paymentStatus==="upi") && 
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
            <label for="cname">Name</label>
            <input
              type="text"
              id="cname"
              name="name"
              placeholder="John More Doe"
              onChange={handleUpiChange}
            />
            <label for="upiid">Upi ID</label>
            <input
              type="text"
              id="upiid"
              name="cardNo"
              placeholder="john@sbi.com"
              onChange={handleUpiChange}
            />
            <label for="phoneno">Phone Number</label>
            <input type="text" id="phoneno" name="phoneNo" placeholder="897654321" onChange={handleUpiChange}/>
          </div>
          <button className="btn" onClick={patchUpiToServer}>Add Details</button>
            </form>
        </div>}
      </div>
      
      <div className="item-summary">
        <h1>Item Summary</h1>
        {products.map((product,index)=>{
          return(
        <div className="item-details" key={index}>
          <img
            src={product.image[0]}
            alt="item"
            style={{ height: "200px", width: "200px" }}
          />
          <div className="item-details-text">
            <h2>{product.title}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.qty} </p>
            <p>
              Total Amount: ₹{product.price} x {(prevPath==="/cart")?product.qty:1} = ₹{product.price * ((prevPath==="/cart")?product.qty:1)}
            </p>
          </div>
        </div>)})}
      </div>
      <div className="shipping-details">
          <h3>Shipping Address:</h3>
          <p>{selectedAddress}</p>
          <h3>Payment Method</h3>
          <p>{paymentStatus} : {selectedPayment}</p>
      </div>
      <Link to={{
                  pathname: "/confirmation",
                  state: { products: products, selectedAddress:selectedAddress, selectedPayment:selectedPayment, paymentStatus:paymentStatus },
                }}>
      <button className="proceed-btn" disabled={paymentStatus==="Payment Method"||selectedAddress==="Shipping Address"||selectedPayment==="Payment Details"}>Proceed <i class="fas fa-arrow-right"></i></button>
      </Link>
    </div>
  );}
// }

function mapStateToProps(state) {
  return {
    user:state.user.userData,
    cartItems:state.cartReducer.cart,
    isLoggedIn: state.user.isLoggedIn,
  };
}
export default connect(mapStateToProps)(Payment);
