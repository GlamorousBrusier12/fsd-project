import "../styles/NewUPI.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { handleUser } from "../actions";

const NewUPI = (props) => {
  //We have different useStates for different areas.

  const [Name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [type, setType] = useState("");
  const history = useHistory();

  let newUser = { ...props.user };
  console.log("user is outside", newUser);

  //Updating the state as he enters the data

  const getName = (event) => {
    setName(event.target.value);
  };
  const getCardNo = (event) => {
    setCardNo(event.target.value);
  };
  const getphoneNo = (event) => {
    setPhoneNo(event.target.value);
  };
  const getType = (event) => {
    setType(event.target.value);
  };

  //Submit function which will fire only when all fields are entered.

  const reactOnSubmit = (e) => {
    let newId = Math.ceil(Math.random() * 100);
    /*     console.log("submit button clicked");
     */
    if (Name && cardNo && phoneNo && type) {
      const data = {
        id: newId,
        avatar:
          "https://play-lh.googleusercontent.com/k7yz57K2OxhNrPNKF2U18Zcv9rodOu7CfWh47U15FFUN8-_B0hQfXsM-BaLG0gOtvw=s180-rw",
        name: Name,
        type: type,
        phoneNo: phoneNo,
        cardNo: cardNo,
      };
      /*       console.log("newUser before", newUser);
       */
      let newArray = [...props.user.upi, data];

      newUser.upi = newArray;
      /*       console.log("user after submitting", newUser);
       */
      let url = "http://localhost:3000/users/" + props.user.id;
      //Fetching the data with post method

      fetch(url, {
        method: "PATCH", // or 'PUT'
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully PATCHED", data);
          props.dispatch(handleUser(props.user.email));
          toast.success("Succesfully Added UPI ");
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      setName("");
      setCardNo("");
      setPhoneNo("");
      setType("");
      history.push("/userProfile");
    }
  };

  //Returing the actual component

  return (
    <div className="container">
      <Sidebar />
      <div className="newUPI">
        <h1 className="newUserTitle">New UPI</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>UPI Type*</label>
            <input
              type="text"
              placeholder="PayTm"
              onChange={getType}
              value={type}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Name on the UPI*</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>UPI ID*</label>
            <input
              type="email"
              placeholder="georgey75@paytm"
              onChange={getCardNo}
              value={cardNo}
              required
            />
          </div>

          <div className="newUserItem">
            <label>Bank linked</label>
            <input type="text" placeholder="HDFC" />
          </div>
          <div className="newUserItem">
            <label>Phone Number* </label>
            <input
              type="tel"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{5}"
              placeholder="91-86882-75981"
              onChange={getphoneNo}
              value={phoneNo}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button
            className="newUserButton"
            onClick={(e) => {
              e.preventDefault();
              reactOnSubmit(e);
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user.userData,
  };
}
export default connect(mapStateToProps)(NewUPI);
