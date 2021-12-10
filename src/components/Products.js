import React from "react";
import StarRatings from "react-star-ratings";
import { data } from "../data";
import "../styles/ProductsStyles.css";
function Products() {
  const { title, image, price, description, rating, type, types } = data[0];
  return (
    <div className=" main-container">
      <div className="filters-container"></div>
      <div>
        <div className="products-container">
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
                <span className="discount_percentage">
                  <b>(15% off)</b>
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="https://rukminim1.flixcart.com/image/416/416/kq8dua80/computer/s/2/v/na-gaming-laptop-hp-original-imag4agxntky6zuv.jpeg?q=70"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img className="productspage-image" src="" />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="https://icdn.digitaltrends.com/image/digitaltrends/iphone-13-pro-review-dan-baker-35.jpg"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="https://icdn.digitaltrends.com/image/digitaltrends/iphone-13-pro-review-dan-baker-35.jpg"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="https://icdn.digitaltrends.com/image/digitaltrends/iphone-13-pro-review-dan-baker-35.jpg"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
          <div className="each-product">
            <div className="img-size">
              <img
                className="productspage-image"
                src="https://icdn.digitaltrends.com/image/digitaltrends/iphone-13-pro-review-dan-baker-35.jpg"
              />
            </div>
            <div className="product-details-mini">
              <h3>Apple Iphone 13 Pro Max</h3>
              <h6>
                <h3>
                  Rating:{" "}
                  <StarRatings
                    rating={rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                    starC
                  />{" "}
                  ({rating.count} reviews)
                </h3>
              </h6>
              <p>12GB RAM, 256GB </p>
              <p>
                <b>Rs 1,19,350</b> <strike> 1,29,999</strike>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
