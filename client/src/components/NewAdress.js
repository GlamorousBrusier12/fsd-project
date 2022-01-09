import "../styles/NewAdress.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const NewAdress = () => {
  const history = useHistory();
  const [Name, setName] = useState("");
  const [locationName, setlocationName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  //const getName = event;

  const getName = (event) => {
    setName(event.target.value);
  };
  const getlocationName = (event) => {
    setlocationName(event.target.value);
  };
  const getphoneNo = (event) => {
    setPhoneNo(event.target.value);
  };
  const getAdress = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    if (Name && locationName && phoneNo && address) {
      const data = {
        avatar: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        Name: Name,
        locationName: locationName,
        phoneNo: phoneNo,
        address: address,
      };

      fetch("http://localhost:3000/deliveryAdress", {
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
      toast.success("Succesfully Added Adress. ");

      //event.preventDefault();
      setName("");
      setlocationName("");
      setPhoneNo("");
      setAddress("");
      history.push("/userProfileInformation");
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="newAdress">
        <h1 className="newUserTitle">New Adress</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Title of Adress*</label>
            <input
              type="text"
              placeholder="My Home"
              onChange={getlocationName}
              value={locationName}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Phone* </label>
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
            <label>Address*</label>
            <input
              type="text"
              placeholder="New York | USA"
              onChange={getAdress}
              value={address}
              required
            />
          </div>

          <button className="newUserButton" onClick={handleSubmit}>
            Add Adress
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAdress;
