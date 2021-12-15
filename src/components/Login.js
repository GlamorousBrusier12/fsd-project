import axios from "axios";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // eslint-disable-line
import { useHistory } from "react-router-dom";
import "../styles/LoginStyle.css";

export default function Login() {
  const [username1, setUsername] = useState(" ");
  const [password1, setPassword] = useState(" ");
  const history = useHistory();
  const incorrectCredentials = useRef(null);

  const LoginUser = () => {
    axios
      .post("/login", { username: username1, password: password1 })
      .then((result) => {
        console.log("Successfully Logged In\n", result);
        incorrectCredentials.current.innerText = " ";
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        incorrectCredentials.current.innerText =
          "Incorrect Login Credentials.. Please try again";
      });
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="login">
      <br />
      <br />
      <br />
      <br />
      <p
        ref={incorrectCredentials}
        style={{ textAlign: "center", color: "red" }}
      ></p>
      <div className="Container">
        <br />
        <h1>Sign In</h1>
        <label className="Label" htmlFor="useremail">
          <b>Email or Mobile Phone Number</b>
        </label>
        <br />
        <input
          className={["credentials", "login-input"].join(" ")}
          id="useremail"
          name="useremail"
          type="text"
          placeholder="abcd@gmail.com"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label className="Label" htmlFor="password">
          <b>Password</b>
        </label>
        <br />
        <input
          // this is used to give multiple classnames to a component
          className={["credentials", "login-input"].join(" ")}
          placeholder="Password"
          id="password"
          name="password"
          type={passwordShown ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div id="show-password">
          <input
            id="checkbox"
            type="checkbox"
            onClick={togglePasswordVisiblity}
          />
          <b> Show Password</b>
          <br />
        </div>
        <button className="submit" type="submit" onClick={LoginUser}>
          Submit
          <br />
        </button>
        <br />
        <br />
        <br />
        <div className="signup">
          <b>Don't have an account? </b>
          <b>
            <Link to="/signup">Create an account</Link>
          </b>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
