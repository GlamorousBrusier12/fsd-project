import "../styles/NewAdress.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyler } from "../commonEquipment";
import { connect } from "react-redux";
import { handleUser } from "../actions";

const NewAdress = (props) => {
  //We have different useStates for different areas.
  const history = useHistory();
  const [Name, setName] = useState("");
  const [locationName, setlocationName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");

  let newUser = { ...props.user };
  let error = [];
  //Updating the state as he enters the data
  const getName = (event) => {
    setName(event.target.value);
  };
  const getUserName = (event) => {
    setuserName(event.target.value);
  };
  const getlocationName = (event) => {
    setlocationName(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getphoneNo = (event) => {
    //Dont let user enter numbers.
    setPhoneNo(event.target.value);
    !isNaN(event.target.value) && !isNaN(parseFloat(event.target.value))
      ? console.log("Correct number")
      : toast.error("Please enter only numbers") && setPhoneNo("");
  };
  const getAdress = (event) => {
    setAddress(event.target.value);
  };

  //Checking validation for different fields.
  const checkValidation = () => {
    if (Name.length <= 6) {
      toast.warning("FullName should be more than 6 characters.");
      error.push("Fullname error");
    }
    if (userName.length <= 4) {
      toast.warning("UserName should be more than 4 characters.");
      error.push("Username error");
    }
    if (locationName.length === 0) {
      toast.warning("FullName should be more than 4 characters.");
      error.push("Username error");
    }
    if (phoneNo.length !== 10) {
      toast.warning("Mobile number should be of length 10");
      error.push("MobileNumber error");
    }
    if (address.length === 0) {
      toast.warning("Adress cannot be empty");
      error.push("Adress error");
    }
    if (
      //For valid email
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(email)
    ) {
      toast.warning("Enter valid email");
      error.push("Email error");
    }
  };

  //Submit function which will fire only when all fields are entered.
  const handleSubmit = (e) => {
    checkValidation();
    let newId = Math.ceil(Math.random() * 100);
    if (error.length === 0) {
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
      //Add the new adress into the array.
      let newArray = [...props.user.deliveryAdress, data];

      newUser.deliveryAdress = newArray;

      /*       console.log(newUser);
       */ let url = "http://localhost:3000/users/" + props.user.id;

      //now patch the new user object.
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
          toast.success("Address Added", toastStyler);

          setName("");
          setlocationName("");
          setPhoneNo("");
          setAddress("");
          setEmail("");
          setuserName("");
          history.push("/userProfileAdress");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      toast.error("Form submission failed");
      setName("");
      setlocationName("");
      setPhoneNo("");
      setAddress("");
      setEmail("");
      setuserName("");
    }

    //make all errors empty again.
    error = [];
  };

  //Returing the actual component
  return (
    <div className="container">
      <Sidebar />
      <div className="newAdress">
        <h1 className="newUserTitle">New Adress</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username (More than 4 characters)</label>
            <input
              type="text"
              placeholder="john"
              onChange={getUserName}
              value={userName}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Full Name* (More than 6 characters)</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Email (Any valid email)</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              onChange={getEmail}
              value={email}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Title of Adress* (Should not be empty)</label>
            <input
              type="text"
              placeholder="My Home"
              onChange={getlocationName}
              value={locationName}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Phone* (10 numbers without country code)</label>
            <input
              type="text"
              placeholder="8688275981"
              onChange={getphoneNo}
              value={phoneNo}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Address* (Should not be null)</label>
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
