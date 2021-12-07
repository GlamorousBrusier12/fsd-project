import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../RegisterStyle.css";
function Register() {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [useremail, setUseremail] = useState("");
  const [mobile_number, setMobilenumber] = useState("");
  const [password1, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <React.Fragment>
      <div className="signup-form">
        <div className="form-container">
          <br />
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <div>
            <label className="Label" htmlFor="fname">
              <h3>Your Name</h3>
            </label>
            <br />
            <input
              className="input-field width-43"
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              className="input-field width-43"
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="Label" htmlFor="email_id">
              <h3>Email id</h3>
            </label>
            {/* <br /> */}
            <input
              className="input-field width-90"
              type="text"
              name="email_id"
              id="email_id"
              placeholder="example@gmail.com"
              onChange={(e) => setUseremail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="Label" htmlFor="mobile_number">
              <h3>Mobile Number</h3>
            </label>
            {/* <br /> */}
            <input
              className="input-field width-90"
              type="text"
              name="mobile_number"
              id="mobile_number"
              placeholder="8688358501"
              required
            />
          </div>
          <div>
            <label className="Label" htmlFor="password">
              <h3>Password</h3>
            </label>
            <input
              className="input-field width-90"
              placeholder="Password"
              id="password"
              name="password"
              type={passwordShown ? "text" : "password"}
              required
            />
            <br />
          </div>
          <div id="showpassword">
            <input
              id="checkbox"
              type="checkbox"
              onClick={togglePasswordVisiblity}
            />
            <b> Show Password</b>
            <br />
          </div>
          {/* <div>
            <label className="Label" htmlFor="password1">
              <h3>Re-enter Password</h3>
            </label>
            <br />
            <input
              className="input-field width-43"
              type="password"
              name="password1"
              id="password"
              required
            />
          </div> */}
          <button type="submit" className="submit-register">
            Register
          </button>
          <br />
          <br />
          <br />
          <p style={{ textAlign: "center" }}>
            <b>Existing User ? </b>
            <Link to="/login">Sign in</Link>
          </p>
          <br />
          <br />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Register;
