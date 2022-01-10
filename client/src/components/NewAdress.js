import "../styles/NewAdress.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { handleUser } from "../actions";

const NewAdress = (props) => {
  //We have different useStates for different areas.
  const history = useHistory();
  const [Name, setName] = useState("");
  const [locationName, setlocationName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  let newUser = { ...props.user };
  //Updating the state as he enters the data
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

  //Submit function which will fire only when all fields are entered.
  const handleSubmit = (e) => {
    let newId = Math.ceil(Math.random() * 100);
    if (Name && locationName && phoneNo && address) {
      const data = {
        id: newId,
        avatar: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        Name: Name,
        locationName: locationName,
        phoneNo: phoneNo,
        address: address,
      };

      /*       console.log("data entred", data);
       */
      //newUser.deliveryAdress.push(data);
      let newArray = [...props.user.deliveryAdress, data];

      newUser.deliveryAdress = newArray;

      /*       console.log(newUser);
       */ let url = "http://localhost:3000/users/" + props.user.id;

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
          toast.success("Address Added");

          setName("");
          setlocationName("");
          setPhoneNo("");
          setAddress("");
          history.push("/userProfileAdress");
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

          <button
            className="newUserButton"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Add Adress
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
export default connect(mapStateToProps)(NewAdress);
