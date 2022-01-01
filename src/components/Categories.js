import React from "react";

function Categories() {
  return (
    <div>
      <div className="categories-container">
        <ul className="categories-list">
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/mens.png`}
              />
              <p> Mens</p>
            </div>
          </li>
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/womens.png`}
              />
              <p> Womens</p>
            </div>
          </li>
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/kids.png`}
              />
              <p> Kids</p>
            </div>
          </li>
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/mobiles.png`}
              />
              <p> Mobiles</p>
            </div>
          </li>
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/laptop.png`}
              />
              <p> accessories</p>
            </div>
          </li>
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/home-appliance.png`}
              />
              <p> Appliances</p>
            </div>
          </li>
          <li>
            <div className="category-item">
              <img
                alt="category-img"
                src={process.env.PUBLIC_URL + `/images/household.png`}
              />
            </div>
            <p> Home</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Categories;
