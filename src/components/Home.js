import React, { Component } from "react";
import MiniProduct from "./MiniProduct";
import Slider from "./Slider";
import { data } from "../data";
import "../styles/home.css";
class Home extends Component {
  render() {
    let deals = data.slice(0, 8);
    return (
      <div>
        <div className="categories-container">
          <ul className="categories-list">
            <li>
              <div className="category-item">
                <img src={process.env.PUBLIC_URL + `/images/mens.png`} />
                <p> Mens</p>
              </div>
            </li>
            <li>
              <div className="category-item">
                <img src={process.env.PUBLIC_URL + `/images/womens.png`} />{" "}
                <p> Womens</p>
              </div>
            </li>
            <li>
              <div className="category-item">
                <img src={process.env.PUBLIC_URL + `/images/kids.png`} />{" "}
                <p> Kids</p>
              </div>
            </li>
            <li>
              <div className="category-item">
                <img src={process.env.PUBLIC_URL + `/images/mobiles.png`} />
                <p> Mobiles</p>
              </div>
            </li>
            <li>
              <div className="category-item">
                <img src={process.env.PUBLIC_URL + `/images/laptop.png`} />
                <p> accessories</p>
              </div>
            </li>
            <li>
              <div className="category-item">
                <img
                  src={process.env.PUBLIC_URL + `/images/home-appliance.png`}
                />
                <p> Appliances</p>
              </div>
            </li>
            <li>
              <div className="category-item">
                <img src={process.env.PUBLIC_URL + `/images/household.png`} />
              </div>
              <p> Home</p>
            </li>
          </ul>
        </div>
        <Slider />
        <div className="deals-container">
          <h3>Deals of the day!!!</h3>
          <div className="mini-products">
            {deals.map((product) => (
              <MiniProduct data={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="deals-container">
          <h3>Rents of the day!!!</h3>
          <div className="mini-products">
            {deals.map((product) => (
              <MiniProduct data={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="deals-container">
          <h3>
            continue shopping
            <i className="fas fa-arrow-right" style={{ marginLeft: 5 }}></i>
          </h3>
          <div className="mini-products">
            {deals.map((product, index) => (
              <MiniProduct data={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
