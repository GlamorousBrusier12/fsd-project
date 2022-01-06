import "../styles/NewAdress.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewAdress = () => {
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
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Title of Adress</label>
            <input type="text" placeholder="My Home" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>

          <button className="newUserButton">Add Adress</button>
        </form>
      </div>
    </div>
  );
};

export default NewAdress;
