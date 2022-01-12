import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Payment.css";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { toastStyler } from "../commonEquipment";
import { emptyCart } from "../actions/cartAction";

function Payment(props) {
  //Taking user data from store(redux)
  const user = props.user;
  const { deliveryAdress, upi, debitCards } = user;
  //Products and previous route info taken using useLocation() in react-router-dom
  const location = useLocation();
  let { products, prevPath } = location.state;
  //If previous path is cart, then the products should be the items present in the cart
  if (prevPath === "/cart") products = props.cartItems;
  // console.log(products);
  const [paymentStatus, setPaymentStaus] = useState("Payment Method");
  //Updating the selected address for shipping
  const addressChange = (e) => {
    const { value } = e.target;
    setSelectedAddress(value);
  };
  //Updating the selected payment details for shipping
  const paymentDetailsChange = (e) => {
    const { value } = e.target;
    setSelectedPayment(value);
  };

  //Storing the selected address and selected payment info in state
  const [selectedAddress, setSelectedAddress] = useState("Shipping Address");
  const [selectedPayment, setSelectedPayment] = useState("Payment Details");

  //Setting state for storing newly entered information
  const [newAddress, setNewAddress] = useState({
    Name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    phoneNo: "",
    zip: "",
  });

  const [newCard, setNewCard] = useState({
    name: "",
    cardNo: "",
    expiry: "",
    type: "",
  });

  const [newUpi, setNewUpi] = useState({
    name: "",
    cardNo: "",
    phoneNo: "",
    type: "",
  });

  //Handling change in the respective forms
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleUpiChange = (e) => {
    const { name, value } = e.target;
    setNewUpi((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  //Add the addresses entered into the form to the json-server
  const patchAddressToServer = (e) => {
    if (
      newAddress.Name.length === 0 ||
      newAddress.email.length === 0 ||
      newAddress.address.length === 0 ||
      newAddress.city.length === 0 ||
      newAddress.state.length === 0 ||
      newAddress.zip.length === 0 ||
      newAddress.phoneNo.length === 0
    ) {
      toast.warning(
        "No field can remain empty in the Address Form",
        toastStyler
      );
    } else if (!newAddress.email.includes("@")) {
      toast.warning("Not a valid email address", toastStyler);
    } else if (newAddress.phoneNo.length !== 10) {
      toast.warning(
        "Not a valid Phone Number. Should contain 10 digits",
        toastStyler
      );
    } else if (newAddress.zip.length !== 6) {
      toast.warning(
        "Not a valid Pincode/Zip. Should contain 6 digits",
        toastStyler
      );
    } else {
      const id = Math.ceil(Math.random() * 100); //A random number to use as an id
      newAddress.id = id;
      user.deliveryAdress.push(newAddress); //pushing the new Address(entered in the form) into deliveryAdress of the user

      //PATCH request sent to update the user and add the newAddress to deliveryAdress of user
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
          toast.success("Address Added", toastStyler);
          //Clearing the form after success
          setNewAddress({
            Name: "",
            email: "",
            address: "",
            city: "",
            state: "",
            phoneNo: "",
            zip: "",
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    e.preventDefault();
  };

  //Add the card info entered into the form to the json-server
  const patchCardsToServer = (e) => {
    if (newCard.name.length === 0) {
      toast.warning("Name field in Card info cant be empty", toastStyler);
    } else if (newCard.type.length === 0) {
      toast.warning("Type field in Card info cant be empty", toastStyler);
    } else if (
      newCard.expiry.length !== 5 ||
      newCard.expiry.indexOf("/") !== 2
    ) {
      toast.warning("Incorrect expiry", toastStyler);
    } else if (newCard.cardNo.length !== 12) {
      toast.warning(
        "Incorrect cardNo cardNo should be 12 digits long",
        toastStyler
      );
    } else {
      const id = Math.ceil(Math.random() * 100);
      newCard.id = id;
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
          setNewCard({
            cardName: "",
            cardsNum: "",
            expiry: "",
            type: "",
          });
          toast.success("Card Added", toastStyler);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    e.preventDefault();
  };

  //Add the upi info entered into the form to the json-server
  const patchUpiToServer = (e) => {
    if (newUpi.name.length === 0) {
      toast.warning("Name field in Card info cant be empty", toastStyler);
    } else if (newUpi.type.length === 0) {
      toast.warning("Type field in Card info cant be empty", toastStyler);
    } else if (!newUpi.cardNo.includes("@")) {
      toast.warning("Incorrect upi id", toastStyler);
    } else if (newUpi.phoneNo.length !== 10) {
      toast.warning("Phone Number should be 10 digits long", toastStyler);
    } else {
      const id = Math.ceil(Math.random() * 100);
      newUpi.id = id;
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
          setNewUpi({
            name: "",
            cardNo: "",
            phoneNo: "",
            type: "",
          });
          toast.success("Upi information added", toastStyler);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    e.preventDefault();
  };

  //Select the payment method (debit/credit/upi)
  const paymentChange = (e) => {
    setPaymentStaus(e.target.value);
  };

  //After the order has been placed, update the user's myOrders
  const addToOrders = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    const day = d.getDate();
    const month = months[d.getMonth()];
    //Each given product is pushed into the myOrders of the user
    products.forEach((product) => {
      const data = {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        discount: product.discount,
        type: product.type,
        Category: product.Category,
        status: `Ordered on ${day} ${month}`,
      };
      let newArray = [data, ...user.myOrders];
      user.myOrders = newArray;
    });
    //PATCH request for modification the json-server
    let url = "http://localhost:3000/users/" + user.id;
    console.log("User mowa", user);
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
        toast.success("Information added", toastStyler);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="shipping-address">
        <h1>Shipping Address</h1>
        <div className="address-list">
          <h3>Please select your preffered shippping address:</h3>
          {/* Displaying the existing addresses */}
          {deliveryAdress.map((addr, index) => {
            return (
              <div className="address-pack" key={index}>
                <input
                  type="radio"
                  id={"address" + index + 1}
                  name="address"
                  value={`
              ${addr.Name}, ${addr.address}, ${addr.city}, ${addr.state}, ${addr.zip}
              Phone: ${addr.phoneNo}, email: ${addr.email}
            `}
                  onClick={addressChange}
                />
                <label for={"address" + index + 1}>
                  <div>
                    {addr.Name}, {addr.address}, {addr.city}, {addr.state},{" "}
                    {addr.zip}
                  </div>
                  <div>
                    Phone: {addr.phoneNo}, email: {addr.email}
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        <h1>Want to ship to a different Address?</h1>
        <p> Fill the details in the given form</p>
        <div className="form-parent">
          {/* Form for entering new address if the shipping is required for another address*/}
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
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Hyderabad"
                onChange={handleChange}
                value={newAddress.city}
                required
              />

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
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="500007"
                onChange={handleChange}
                value={newAddress.zip}
                required
              />

              <label for="phoneNo">Phone Number</label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                placeholder="9989486489"
                onChange={handleChange}
                value={newAddress.phoneNo}
                required
              />
            </div>

            <button onClick={patchAddressToServer} className="btn">
              Add Address
            </button>
          </form>
        </div>
      </div>

      <div className="payment-method">
        <h1>Payment: </h1>
        {/* Form for selecting the Payment Method(debit,credit,upi) */}
        <form>
          <div className="address-list">
            <p>Please select your preffered payment method:</p>
            <div className="address-pack">
              <input
                type="radio"
                id="debit"
                name="address"
                value="debit"
                onClick={paymentChange}
                defaultValue={true}
              />
              <label for="debit">Debit Card</label>
            </div>
            <div className="address-pack">
              <input
                type="radio"
                id="credit"
                name="address"
                value="credit"
                onClick={paymentChange}
              />
              <label for="credit">Credit Card</label>
            </div>
            <div className="address-pack">
              <input
                type="radio"
                id="upi"
                name="address"
                value="upi"
                onClick={paymentChange}
              />
              <label for="upi">UPI</label>
            </div>
          </div>
        </form>
        <div className="payment-list">
          <h2>Saved {paymentStatus === "upi" ? "Upi" : "Cards"}</h2>
          {/* Displaying the existing cards for selecting */}
          {(paymentStatus === "debit" || paymentStatus === "credit") &&
            debitCards.map((card, index) => {
              return (
                <div className="address-pack" key={index}>
                  <input
                    type="radio"
                    id={"debit" + index + 1}
                    name="address"
                    onClick={paymentDetailsChange}
                    value={`
              ${card.name}, ${card.cardNo}, ${card.expiry}
            `}
                  />
                  <label for={"debit" + index + 1}>
                    {card.name}, {card.cardNo}, {card.type}, {card.expiry}
                  </label>
                </div>
              );
            })}
          {/* Displaying the existing upi info for selecting */}
          {paymentStatus === "upi" &&
            upi.map((upi, index) => {
              return (
                <div className="address-pack" key={index}>
                  <input
                    type="radio"
                    id={"debit" + index + 1}
                    name="address"
                    onClick={paymentDetailsChange}
                    value={`
              ${upi.name}, ${upi.cardNo}, ${upi.phoneNo}
            `}
                  />
                  <label for={"debit" + index + 1}>
                    {upi.name}, {upi.cardNo}, {upi.phoneNo}, {upi.type}
                  </label>
                </div>
              );
            })}
        </div>
        {/* Form for new Cards info */}
        {(paymentStatus === "debit" || paymentStatus === "credit") && (
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
                  value={newCard.name}
                />
                <label for="ccnum">Card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardNo"
                  placeholder="1111222233334444"
                  onChange={handleCardChange}
                  value={newCard.cardNo}
                />
                <label for="expdate">Exp Date</label>
                <input
                  type="text"
                  id="expdate"
                  name="expiry"
                  placeholder="01/12"
                  onChange={handleCardChange}
                  value={newCard.expiry}
                />
                <label for="pname">Card Provider</label>
                <input
                  type="text"
                  id="pname"
                  name="type"
                  placeholder="Bajaj Finance"
                  onChange={handleCardChange}
                  value={newCard.type}
                />
              </div>
              <button className="btn" onClick={patchCardsToServer}>
                Add Details
              </button>
            </form>
          </div>
        )}
        {/* Form for new Upi info */}
        {paymentStatus === "upi" && (
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
                  value={newUpi.name}
                />
                <label for="upiid">Upi ID</label>
                <input
                  type="text"
                  id="upiid"
                  name="cardNo"
                  placeholder="john@sbi.com"
                  onChange={handleUpiChange}
                  value={newUpi.cardNo}
                />
                <label for="phoneno">Phone Number</label>
                <input
                  type="text"
                  id="phoneno"
                  name="phoneNo"
                  placeholder="897654321"
                  onChange={handleUpiChange}
                  value={newUpi.phoneNo}
                />
                <label for="pname">UPI Partner</label>
                <input
                  type="text"
                  id="pname"
                  name="type"
                  placeholder="Phone Pe"
                  onChange={handleUpiChange}
                  value={newUpi.type}
                />
              </div>
              <button className="btn" onClick={patchUpiToServer}>
                Add Details
              </button>
            </form>
          </div>
        )}
      </div>
      {/* Showing the item summary of the products the user is going to buy*/}
      <div className="item-summary">
        <h1>Item Summary</h1>
        {products.map((product, index) => {
          return (
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
                  Total Amount: ₹{product.price} x{" "}
                  {/* If the item is coming directly from Buy Now, qty should be 1 if it comes from cart, the code should just be product.qty*/}
                  {prevPath === "/cart" ? product.qty : 1} = ₹
                  {product.price * (prevPath === "/cart" ? product.qty : 1)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Showing the address and payment details */}
      <div className="shipping-details">
        <h3>Shipping Address:</h3>
        <p>{selectedAddress}</p>
        <h3>Payment Method</h3>
        <p>
          {paymentStatus} : {selectedPayment}
        </p>
      </div>

      <Link
        to={{
          pathname: "/confirmation",
          //Sending the info required in the confirmation page on clicking
          state: {
            products: products,
            selectedAddress: selectedAddress,
            selectedPayment: selectedPayment,
            paymentStatus: paymentStatus,
          },
        }}
      >
        <button
          className="proceed-btn"
          onClick={() => {
            addToOrders();
            props.dispatch(emptyCart()); //Emptying cart after order is placed
          }}
          disabled={
            paymentStatus === "Payment Method" ||
            selectedAddress === "Shipping Address" ||
            selectedPayment === "Payment Details"
          }
        >
          Proceed <i class="fas fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
}

//For passing state as props
function mapStateToProps(state) {
  return {
    user: state.user.userData,
    cartItems: state.cartReducer.cart,
    isLoggedIn: state.user.isLoggedIn,
  };
}
export default connect(mapStateToProps)(Payment);
