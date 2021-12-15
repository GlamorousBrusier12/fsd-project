import React, { useEffect, useState } from "react";
import EachProduct from "./EachProduct";
import "../styles/ProductsStyles.css";
import Loader from "./Loader";
function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
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
      <div>
        <Loader />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <div className=" main-container">
          <div className="filters-container"></div>
          <div className="products-container">
            {items.map((item, index) => {
              return <EachProduct content={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
