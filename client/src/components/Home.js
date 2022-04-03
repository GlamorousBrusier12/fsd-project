import React, { Component, useEffect, useState } from "react";
import MiniProduct from "./MiniProduct";
import Slider from "./Slider";
import "../styles/home.css";
import Categories from "./Categories";
import { getAllProducts } from "../utils/api";
const Home = () => {
  // constructor() {
  //   super();
  //   // initial state{ deals:[] }
  //   this.state = {
  //     deals: [],
  //   };
  // }
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Promise.resolve(
      getAllProducts().then(
        (result) => {
          // set products as deals
          setDeals(result.data);
          console.log(deals);
          setLoading(false);
        },
        (error) => {
          console.log(
            "there is an error in fetching products in home page: ",
            error
          );
        }
      )
    );
  }, []);

  // componentDidMount() {

  // }
  // render() {
  // let { deals } = this.state;
  // deals = deals.slice(0, 8);

  return loading === true ? (
    <p>loading...</p>
  ) : (
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
  // }
};

export default Home;
