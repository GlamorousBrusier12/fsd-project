import "../styles/NewUPI.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewUPI = () => {
  const history = useHistory();
  const [Name, setName] = useState("");
  const [id, setId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [type, setType] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };
  const getId = (event) => {
    setId(event.target.value);
  };
  const getphoneNo = (event) => {
    setPhoneNo(event.target.value);
  };
  const getType = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    if (Name && id && phoneNo && type) {
      const data = {
        avatar:
          "https://play-lh.googleusercontent.com/k7yz57K2OxhNrPNKF2U18Zcv9rodOu7CfWh47U15FFUN8-_B0hQfXsM-BaLG0gOtvw=s180-rw",
        name: Name,
        type: type,
        phoneNo: phoneNo,
        cardNo: id,
      };

      fetch("http://localhost:3000/upi", {
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

      event.preventDefault();
      setName("");
      setId("");
      setPhoneNo("");
      setType("");
      history.push("/userProfileInformation");
    }
  };

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
              type="text"
              placeholder="georgey75@paytm"
              onChange={getId}
              value={id}
              required
            />
          </div>

          <div className="newUserItem">
            <label>Bank linked</label>
            <input type="text" placeholder="HDFC" />
          </div>
          <div className="newUserItem">
            <label>Phone Number*</label>
            <input
              type="text"
              placeholder="12344789"
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

          <button className="newUserButton" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUPI;
