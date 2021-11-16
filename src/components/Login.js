import axios from "axios";
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./LoginStyle.css";

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
        console.log("Incorrect Login Credentials. Please try again\n", err);
        incorrectCredentials.current.innerText =
          "Incorrect Login Credentials.. Please try again";
      });
  };
  const SignUp = () => {
    history.push("/signup");
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
      <p ref={incorrectCredentials} style={{ textAlign: "center" }}></p>
      <div className="Container">
        <br />
        <h1>Sign-in</h1>
        <label htmlFor="useremail">
          <b>Email or Mobile Phone Number</b>
        </label>
        <br />
        <input
          className="credentials"
          id="useremail"
          name="useremail"
          type="text"
          placeholder="abcd@gmail.com"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <br />
        <input
          className="credentials"
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
        </button>
      </div>
      <div className="signup">
        <b>Don't have an account?</b>
        <br />
        <b>
          <button className="create-account" onClick={SignUp}>
            Create an account
          </button>
        </b>
      </div>
    </div>
  );
}
