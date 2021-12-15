import Sidebar from "./Sidebar";
import "../styles/UserProfilePanCard.css";
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

const UserProfilePanCard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Electorent Card Information</h1>
          <Link to="/newUser">
            <button className="userAddButton">Add Card</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Emma Watson</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">PAN Account Details</span>
              <div className="userShowInfo">
                <BadgeIcon className="userShowIcon" />
                <span className="userShowInfoTitle">
                  Emma Charlotte Duerre Watson
                </span>
              </div>
              <div className="userShowInfo">
                <CreditCardIcon className="userShowIcon" />
                <span className="userShowInfoTitle">ABCDE1234F</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">15.04.1990</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <FamilyRestroomIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Chris Watson</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">
                  Abc Street, New York City
                </span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full Name on the card</label>
                  <input
                    type="text"
                    placeholder="Emma Charlotte Duerre Watson"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>PAN Number</label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>DOB as per card</label>
                  <input
                    type="text"
                    placeholder="15.04.1990"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Father Name</label>
                  <input
                    type="text"
                    placeholder="Chris Watson"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="ABC Street, New York City"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePanCard;
