import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/UserProfilePanCard.css";
import { handleUser } from "../actions";

import {
  CalendarToday,
  LocationSearching,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const UserProfilePanCard = (props) => {
  const { info } = props;
  let email = info.email;
  //console.log("INFO :", info);
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [panNumber, setPanNumber] = useState("");
  let error = [];

  //We now need to set the data which originally is a empty object
  //get methods for all fields.

  const getFullName = (event) => {
    setFullName(event.target.value);
  };
  const getDob = (event) => {
    setDob(event.target.value);
  };
  const getPanNumber = (event) => {
    setPanNumber(event.target.value);
  };
  const getFatherName = (event) => {
    setFatherName(event.target.value);
  };
  const getmobileNumber = (event) => {
    //here we see if only numbers are being entred.

    setmobileNumber(event.target.value);
    !isNaN(event.target.value) && !isNaN(parseFloat(event.target.value))
      ? console.log("Correct number")
      : toast.error("Please enter only numbers") && setmobileNumber("");
  };
  const getAddress = (event) => {
    setAddress(event.target.value);
  };

  //Functon to check validation of the data.

  const checkValidation = () => {
    if (fullName.length <= 6) {
      toast.warning("FullName should be more than 6 characters.");
      error.push("Fullname error");
    }
    if (fatherName.length <= 3) {
      toast.warning("FatherName should be more than 3 characters.");
      error.push("Fathername error");
    }
    if (mobileNumber.length !== 10) {
      toast.warning("Mobile number should be of length 10");
      error.push("MobileNumber error");
    }
    if (address.length === 0) {
      toast.warning("Adress cannot be empty");
      error.push("Adress error");
    }
    if (panNumber.length !== 10) {
      toast.warning("Enter valid PAN number");
      error.push("Pan error");
    }
  };

  //Submit button which basically checks the validaton first.

  const handleSubmit = (event) => {
    checkValidation();
    if (error.length === 0) {
      //If no errors, we then go on and patch the user.

      const data = {
        avatar:
          "https://thumbs.dreamstime.com/z/fashion-model-woman-golden-bright-sparkles-girl-golden-skin-hair-portrait-closeup-fashion-model-woman-golden-bright-113010779.jpg",
        elecFullName: fullName,
        dob: dob,
        elecFatherName: fatherName,
        elecMobileNumber: mobileNumber,
        elecAdress: address,
        elecPanNumber: panNumber,
      };
      //console.log("data entred " + data.fullName);
      let url = "http://localhost:3000/users/" + info.id;

      fetch(url, {
        method: "PATCH", // or 'PUT'
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully PATCHED", data);
          props.dispatch(handleUser(email));
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      toast.success("Succesfully Updated");
    } else {
      toast.error("Form submission failed");
    }

    //on submit, set states to empty again.

    event.preventDefault();
    setFullName("");
    setDob("");
    setPanNumber("");
    setFatherName("");
    setmobileNumber("");
    setAddress("");
  };
  //Rendering the component

  return (
    <div className="container">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Electorent Card Information</h1>
          {/* <Link to="/newUser">
            <button className="userAddButton">Add Card</button>
          </Link> */}
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={info.avatar} alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{info.fullName}</span>
                <span className="userShowUserTitle">{info.job}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">PAN Account Details</span>
              <div className="userShowInfo">
                <BadgeIcon className="userShowIcon" />
                <span className="userShowInfoTitle">{info.elecFullName}</span>
              </div>
              <div className="userShowInfo">
                <CreditCardIcon className="userShowIcon" />
                <span className="userShowInfoTitle">{info.elecPanNumber}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{info.dob}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {info.elecMobileNumber}
                </span>
              </div>
              <div className="userShowInfo">
                <FamilyRestroomIcon className="userShowIcon" />
                <span className="userShowInfoTitle">{info.elecFatherName}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{info.elecAdress}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full Name on the card* (More than 6 characters)</label>
                  <input
                    type="text"
                    placeholder={info.elecFullName}
                    className="userUpdateInput"
                    onChange={getFullName}
                    value={fullName}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>PAN Number* (Valid 10 digits)</label>
                  <input
                    type="text"
                    placeholder={info.elecPanNumber}
                    className="userUpdateInput"
                    onChange={getPanNumber}
                    value={panNumber}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>DOB as per card*</label>
                  <input
                    type="date"
                    placeholder={info.dob}
                    className="userUpdateInput"
                    onChange={getDob}
                    value={dob}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone* (10 digits without country code)</label>
                  <input
                    type="text"
                    placeholder={info.elecMobileNumber}
                    className="userUpdateInput"
                    onChange={getmobileNumber}
                    value={mobileNumber}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Father Name* (More than 3 characters)</label>
                  <input
                    type="text"
                    placeholder={info.elecFatherName}
                    className="userUpdateInput"
                    onChange={getFatherName}
                    value={fatherName}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address* (Should not be empty)</label>
                  <input
                    type="text"
                    placeholder={info.elecAdress}
                    className="userUpdateInput"
                    onChange={getAddress}
                    value={address}
                    required
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImg" src={info.avatar} alt="" />
                  {/* <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label> */}
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton" onClick={handleSubmit}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  //Getting user from store as props.

  //console.log("STATE BRUH: ", state);
  return {
    info: state.user.userData,
  };
}
export default connect(mapStateToProps)(UserProfilePanCard);
