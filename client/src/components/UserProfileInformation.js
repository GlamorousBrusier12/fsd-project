import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { handleUser } from "../actions";
import { toast } from "react-toastify";
import { toastStyler } from "../commonEquipment";
import "../styles/UserProfileInformation.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { connect } from "react-redux";

const UserProfileInformation = (props) => {
  //We now need to set the data which originally is a empty object
  const { info } = props;
  //console.log("INFO :", info);
  const history = useHistory();
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState();
  const [address, setAddress] = useState("");

  const getfullName = (event) => {
    setfullName(event.target.value);
  };
  const getuserName = (event) => {
    setuserName(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getmobileNumber = (event) => {
    setmobileNumber(event.target.value);
  };
  const getAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    if (fullName && userName && mobileNumber && address && email) {
      const data = {
        avatar:
          "https://thumbs.dreamstime.com/z/fashion-model-woman-golden-bright-sparkles-girl-golden-skin-hair-portrait-closeup-fashion-model-woman-golden-bright-113010779.jpg",
        fullName: fullName,
        userName: userName,
        mobileNumber: mobileNumber,
        address: address,
        email: email,
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
      toast.success("Succesfully Updated.", toastStyler);

      event.preventDefault();
      setfullName("");
      setuserName("");
      setEmail("");
      setmobileNumber("");
      setAddress("");
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Profile Information</h1>
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
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{info.userName}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{info.dob}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{info.mobileNumber}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{info.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{info.address}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" name="_method" value="patch">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username*</label>
                  <input
                    type="text"
                    placeholder={info.userName}
                    className="userUpdateInput"
                    onChange={getuserName}
                    value={userName}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name*</label>
                  <input
                    type="text"
                    placeholder={info.fullName}
                    className="userUpdateInput"
                    onChange={getfullName}
                    value={fullName}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email*</label>
                  <input
                    type="email"
                    placeholder={info.email}
                    className="userUpdateInput"
                    onChange={getEmail}
                    value={email}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone* (91-86882-75981)</label>
                  <input
                    type="tel"
                    placeholder={info.mobileNumber}
                    className="userUpdateInput"
                    pattern="[0-9]{2}-[0-9]{5}-[0-9]{5}"
                    onChange={getmobileNumber}
                    value={mobileNumber}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address*</label>
                  <input
                    type="text"
                    placeholder={info.address}
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
  //console.log("STATE BRUH: ", state);
  return {
    info: state.user.userData,
  };
}
export default connect(mapStateToProps)(UserProfileInformation);
