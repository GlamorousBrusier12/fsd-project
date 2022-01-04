import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import EachProduct from "./EachProduct";
import Categories from "./Categories";
import "../styles/ProductsStyles.css";
import Loader from "./Loader";
import { connect } from "react-redux";
function Products(props) {
  let { searchResults } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    //Fetching the products data from JSON-Server
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      //Rendering the Loader animation while loading the data
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <Categories />
        <div className=" main-container">
          {/* Filter Container each sub-filter has one div and that div contains the filters */}
          <div className="filters-container">
            <div className="filter-department">
              <p className="filter-headings">Department</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  name="department1"
                  id="department1"
                  value="Electronics"
                />
                <label htmlFor="department1"> Electronics</label>
                <br />
                <input
                  type="checkbox"
                  name="department2"
                  id="department2"
                  value="Fashion"
                />
                <label htmlFor="department2"> Fashion</label>
                <br />
                <input
                  type="checkbox"
                  name="department3"
                  id="department3"
                  value="Home Aplliances"
                />
                <label htmlFor="department3"> Home Aplliances</label>
                <br />
                <input
                  type="checkbox"
                  name="department4"
                  id="department4"
                  value="Furniture"
                />
                <label htmlFor="department4"> Furniture</label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Brands</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  name="brand1"
                  id="brand1"
                  value="Apple"
                />
                <label htmlFor="brand1"> Apple</label>
                <br />
                <input
                  type="checkbox"
                  name="brand2"
                  id="brand2"
                  value="Relame"
                />
                <label htmlFor="brand2"> Relame</label>
                <br />
                <input
                  type="checkbox"
                  name="brand3"
                  id="brand3"
                  value="Samsung"
                />
                <label htmlFor="brand3"> Samsung</label>
                <br />
                <input
                  type="checkbox"
                  name="brand4"
                  id="brand4"
                  value="Redmi"
                />
                <label htmlFor="brand4"> Redmi</label>
                <br />
                <input type="checkbox" name="brand5" id="brand5" value="Oppo" />
                <label htmlFor="brand5"> Oppo</label>
                <br />
                <input type="checkbox" name="brand6" id="brand6" value="Vivo" />
                <label htmlFor="brand6"> Vivo</label>
                <br />
                <input
                  type="checkbox"
                  name="brand7"
                  id="brand7"
                  value="Passionfruit"
                />
                <label htmlFor="brand7"> Passionfruit</label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Avg. Customer Review</p>
              <div className="sub-filters">
                <input type="checkbox" name="rating4" id="rating4" value="4" />
                <label htmlFor="rating4">
                  <StarRatings
                    rating={4}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="#FF9529"
                  />
                  &amp; Up
                </label>
                <br />
                <input type="checkbox" name="rating3" id="rating3" value="3" />
                <label htmlFor="rating3">
                  <StarRatings
                    rating={3}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="#FF9529"
                  />
                  &amp; Up
                </label>
                <br />
                <input type="checkbox" name="rating2" id="rating2" value="2" />
                <label htmlFor="rating2">
                  <StarRatings
                    rating={2}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="#FF9529"
                  />
                  &amp; Up
                </label>
                <br />
                <input type="checkbox" name="rating1" id="rating1" value="1" />
                <label htmlFor="rating1">
                  <StarRatings
                    rating={1}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="#FF9529"
                  />
                  &amp; Up
                </label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Item type</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  name="itemtype1"
                  id="itemtype1"
                  value="Buyonly"
                />
                <label htmlFor="itemtype1"> Buy only</label>
                <br />
                <input
                  type="checkbox"
                  name="itemtype2"
                  id="itemtype2"
                  value="Rentonly"
                />
                <label htmlFor="itemtype2"> Rent only</label>
                <br />
                <input
                  type="checkbox"
                  name="itemtype3"
                  id="itemtype3"
                  value="BuyandRent"
                />
                <label htmlFor="itemtype3"> Buy and Rent</label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Price</p>
              <div className="sub-filters">
                <input type="range" className="form-range" id="customRange1" />
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Deals</p>
              <div className="sub-filters">
                <input type="checkbox" name="deal1" id="deal1" value="DOTD" />
                <label htmlFor="deal1"> Deals of the Day</label>
                <br />
                <input type="checkbox" name="deal2" id="deal2" value="EOTS" />
                <label htmlFor="deal2"> End of the Season</label>
                <br />
                <input type="checkbox" name="deal3" id="deal3" value="MS" />
                <label htmlFor="deal3"> Mega Sale</label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Discount</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  id="discount1"
                  name="discount1"
                  value="75"
                />
                <label htmlFor="discount1"> 75% and more</label>
                <br />
                <input
                  type="checkbox"
                  id="discount2"
                  name="discount2"
                  value="50"
                />
                <label htmlFor="discount2"> 50% and more</label>
                <br />
                <input
                  type="checkbox"
                  id="discount3"
                  name="discount3"
                  value="25"
                />
                <label htmlFor="discount3"> 25% and more</label>
                <br />
                <input
                  type="checkbox"
                  id="discount4"
                  name="discount4"
                  value="10"
                />
                <label htmlFor="discount4"> 10% and more</label>
                <br />
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Cash on Delivery</p>
              <div className="sub-filters">
                <input type="checkbox" id="COD" name="COD" value="COD" />
                <label htmlFor="COD"> Cash on Delivery</label>
              </div>
            </div>
            <div className="filter-department">
              <p className="filter-headings">Availability</p>
              <div className="sub-filters">
                <input
                  type="checkbox"
                  id="outOfStock"
                  name="outOfStock"
                  value="outOfStock"
                />
                <label htmlFor="outOfStock"> Out of Stock</label>
              </div>
            </div>
          </div>
          {/* Rendering EachProduct component using map function and sending data through props. */}
          <div className="products-container">
            {searchResults.map((item, index) => {
              return <EachProduct content={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.search,
  };
}
export default connect(mapStateToProps)(Products);
