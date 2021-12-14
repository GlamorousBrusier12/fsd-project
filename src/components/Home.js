import React, { Component } from "react";
import MiniProduct from "./MiniProduct";
import Slider from "./Slider";
import { data } from "../data";

class Home extends Component {
  render() {
    let deals = data.slice(0, 8);
    return (
      <div>
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
