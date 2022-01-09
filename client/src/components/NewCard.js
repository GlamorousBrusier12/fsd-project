import "../styles/NewCard.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const NewCard = () => {
  const history = useHistory();
  const [Name, setName] = useState("");
  const [cardNo, setcardNo] = useState("");
  const [expiry, setExpiry] = useState("");
  const [type, setType] = useState("");

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

  const handleSubmit = (event) => {
    if (Name && cardNo && expiry && type) {
      const data = {
        avatar:
          "https://banksifsccode.com/blog/media/2020-03/how-to-login-to-union-bank-s-net-banking-account-step-4.jpg",
        name: Name,
        type: type,
        expiry: expiry,
        cardNo: cardNo,
      };

      fetch("http://localhost:3000/debitCards", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      toast.success("Succesfully added Debit Card");

      event.preventDefault();
      setName("");
      setcardNo("");
      setExpiry("");
      setType("");
      history.push("/userProfileInformation");
    }
  };
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

          <button className="newUserButton" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCard;
