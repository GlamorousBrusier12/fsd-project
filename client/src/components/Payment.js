import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Link, useLocation } from "react-router-dom";
import "../styles/Payment.css";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { toastStyler } from "../commonEquipment";
import { emptyCart } from "../actions/cartAction";
import {
  getDeliveryAddress,
  getCards,
  getUpi,
  postCard,
  postUpi,
  postDeliveryAddress,
  postOrder,
} from "../utils/api";

function Payment(props) {
  //Taking user data from store(redux)
  const user = props.user;
  const userId = user._id;
  console.log(userId);
  // const { deliveryAdress, upi, debitCards } = user;
  //Products and previous route info taken using useLocation() in react-router-dom
  const location = useLocation();
  let { products, prevPath } = location.state;
  //If previous path is cart, then the products should be the items present in the cart
  if (prevPath === "/cart") products = props.cartItems;
  // console.log(products);

  const [address, setAddress] = useState([]);
  const [debitCards, setDebitCards] = useState([]);
  const [upi, setUpi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [paymentStatus, setPaymentStaus] = useState("Payment Method");
  useEffect(() => {
    setLoading(true);
    products.forEach((product) => {
      product.qty = prevPath === "/cart" ? product.qty : 1;
    });
    Promise.resolve(
      getDeliveryAddress(userId)
        .then((res) => res.data)
        .then(
          (i) => {
            setAddress(i);
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        )
    );
    Promise.resolve(
      getCards(userId)
        .then((res) => res.data)
        .then(
          (i) => {
            setDebitCards(i.userDebitCards);
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        )
    );
    Promise.resolve(
      getUpi(userId)
        .then((res) => res.data)
        .then(
          (i) => {
            setUpi(i.userUpi);
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        )
    );
    window.scrollTo(0, 0); //Page going to top
  }, [userId]);
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
    userName: "",
    email: "",
    address: "",
    mobileNumber: "",
    pincode: "",
    userId: "",
  });

  const [newCard, setNewCard] = useState({
    nameOnCard: "",
    cardNo: "",
    expiry: "",
    cardType: "",
    cvv: "",
    avatar: "",
  });

  const [newUpi, setNewUpi] = useState({
    userName: "",
    cardNo: "",
    mobileNumber: "",
    upiType: "",
    userId: "",
    avatar: "",
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

      postDeliveryAddress(newAddress)
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully Added", data);
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

      postCard(newCard)
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

      postUpi(newUpi)
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
    const d = new Date();
    let date = d.toISOString();
    date = date.slice(0, 10);
    const orders = [];
    //Each given product is pushed into the myOrders of the user
    products.forEach((product) => {
      const order = {
        productId: product._id,
        qty: product.qty,
      };
      orders.push(order);
    });
    console.log(orders, "Orders");
    const data = {
      userId: userId,
      orders: orders,
      orderedOn: date,
    };

    postOrder(data)
      .then((data) => {
        console.log("Successfully PATCHED", data);
        toast.success("Information added", toastStyler);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return loading === true ? (
    <Loader />
  ) : (
    <div>
      <div className="shipping-address">
        <h1>Shipping Address</h1>
        <div className="address-list">
          <h3>Please select your preffered shippping address:</h3>
          {/* Displaying the existing addresses */}
          {address.map((addr, index) => {
            return (
              <div className="address-pack" key={index}>
                <input
                  type="radio"
                  id={"address" + index + 1}
                  name="address"
                  value={`
              ${addr.userName}, ${addr.address}, ${addr.locationName}, ${addr.pincode}
              Phone: ${addr.mobileNumber}
            `}
                  onClick={addressChange}
                />
                <label for={"address" + index + 1}>
                  <div>
                    {addr.userName}, {addr.address}, {addr.locationName},
                    {addr.pincode}
                  </div>
                  <div>Phone: {addr.mobileNumber}</div>
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
              ${card.nameOnCard}, ${card.cardNo}, ${card.expiry}
            `}
                  />
                  <label for={"debit" + index + 1}>
                    {card.nameOnCard}, {card.cardNo}, {card.cardType},{" "}
                    {card.expiry}
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
                    {upi.userName}, {upi.cardNo}, {upi.mobileNumber},{" "}
                    {upi.upiType}
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
                  {product.qty} = ₹{product.price * product.qty}
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

      {/* <Link
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
      > */}
      <button
        className="proceed-btn"
        onClick={() => {
          addToOrders();
          props.dispatch(emptyCart()); //Emptying cart after order is placed
        }}
        // disabled={
        //   paymentStatus === "Payment Method" ||
        //   selectedAddress === "Shipping Address" ||
        //   selectedPayment === "Payment Details"
        // }
      >
        Proceed <i class="fas fa-arrow-right"></i>
      </button>
      {/* </Link> */}
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
