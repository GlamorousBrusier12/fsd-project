import "../styles/NewCard.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyler } from "../commonEquipment";
import { connect } from "react-redux";
import { handleUser } from "../actions";

const NewCard = (props) => {
  const history = useHistory();
  //We have different useStates for different areas.

  const [Name, setName] = useState("");
  const [cardNo, setcardNo] = useState("");
  const [expiry, setExpiry] = useState("");
  const [type, setType] = useState("");

  let newUser = { ...props.user };

  //Updating the state as he enters the data

  const getName = (event) => {
    setName(event.target.value);
  };
  const getcardNo = (event) => {
    setcardNo(event.target.value);
  };
  const getExpiry = (event) => {
    setExpiry(event.target.value);
  };
  const getType = (event) => {
    setType(event.target.value);
  };

  //Submit function which will fire only when all fields are entered.

  const handleSubmit = (e) => {
    let newId = Math.ceil(Math.random() * 100);

    if (Name && cardNo && expiry && type) {
      const data = {
        id: newId,
        avatar:
          "https://banksifsccode.com/blog/media/2020-03/how-to-login-to-union-bank-s-net-banking-account-step-4.jpg",
        name: Name,
        type: type,
        expiry: expiry,
        cardNo: cardNo,
      };

      //newUser.debitCards.push(data);
      let newArray = [...props.user.debitCards, data];

      newUser.debitCards = newArray;

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
          // console.log("Successfully PATCHED", data);
          props.dispatch(handleUser(props.user.email));
          toast.success("Succesfully added Debit Card", toastStyler);
          setName("");
          setcardNo("");
          setExpiry("");
          setType("");
          history.push("/userProfileDebitCard");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  //Returing the actual component

  return (
    <div className="container">
      <Sidebar />
      <div className="newCard">
        <h1 className="newUserTitle">New Card</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Card Type*</label>
            <input
              type="text"
              placeholder="Axis Bank"
              onChange={getType}
              value={type}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Name on the Card*</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Expiry Date*</label>
            <input
              type="month"
              placeholder="10/2022"
              onChange={getExpiry}
              value={expiry}
              required
            />
          </div>

          <div className="newUserItem">
            <label>CVV</label>
            <input type="number" placeholder="498 " />
          </div>
          <div className="newUserItem">
            <label>Card Number*</label>
            <input
              type="text"
              placeholder="1234****789"
              onChange={getcardNo}
              value={cardNo}
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
              handleSubmit();
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
export default connect(mapStateToProps)(NewCard);
