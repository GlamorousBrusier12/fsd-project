import React, { Component } from "react";
import MiniProduct from "./MiniProduct";
import Slider from "./Slider";
import "../styles/home.css";
import Categories from "./Categories";
import { getAllProducts } from "../utils/api";
class Home extends Component {
  constructor() {
    super();
    // initial state{ deals:[] }
    this.state = {
      deals: [],
    };
  }
  componentDidMount() {
    Promise.resolve(
      getAllProducts().then(
        (result) => {
          // set products as deals
          this.setState({ deals: result });
          console.log(this.state);
          console.log(result);
        },
        (error) => {
          console.log(
            "there is an error in fetching products in home page: ",
            error
          );
        }
      )
    );
  }
  render() {
    let { deals } = this.state;
    deals = deals.slice(0, 8);

    return (
      <div>
        <Categories />
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
              <MiniProduct data={product} key={product.id} pid={product.id} />
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
