import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import Faqs from "./Faqs";
import StarRatings from "react-star-ratings";
import "../styles/ProductPage.css";
import SimilarItems from "./SimilarItems";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";
import { handleaddtoCart } from "../actions/cartAction";
import { connect } from "react-redux";

function ProductPage(props) {
  const {isLoggedIn} = props;
  const { productId } = useParams();
  const [item, setItem] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [resourceType, setResourceType] = useState();
  const [activeDiv, setActiveDiv] = useState(3);
  const toggleAnimation = (index) => {
    setActiveDiv(index);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((res) => res.json())
      .then(
        (i) => {
          setItem(i);
          setIsLoaded(true);
          setResourceType(<SimilarItems type={i.type} />);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    window.scrollTo(0, 0);
  }, [productId]);
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
        <div className="product">
          <div className="product-image">
            <img src={item.image[0]} alt="Product" />
          </div>
          <div className="product-info-productpage">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>
              <b>
                {"₹" + Math.ceil(((100 - item.discount) / 100) * item.price)}
              </b>
              <strike> {"₹" + item.price}</strike>
              <span className="discount_percentage">
                {" Save " +
                  " ₹" +
                  Math.ceil(
                    item.price - ((100 - item.discount) / 100) * item.price
                  ) +
                  ("(" + item.discount + "%)")}
              </span>
            </p>
            <h3>
              Rating:
              <StarRatings
                rating={item.rating.rate}
                starDimension="20px"
                starSpacing="2px"
                starRatedColor="#FF9529"
              />
              ({item.rating.count} reviews)
            </h3>
            <div style={{ margin: "10px" }}>
              <div className="productpage-buttons">
                <button
                  onClick={() => props.dispatch(handleaddtoCart(item.id))}
                >
                  Add to Cart
                </button>
                <button>Rent Now</button>
              </div>
              {/* Checking if the user is logged in redirecting to login page if not */}
              <Link
                to={isLoggedIn?{
                  pathname: "/payment",
                  state: { product: item, productId:productId },
                }:{
                  pathname:"/login"
                }}
              >
                <button className="buynow-button">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="other-info">
          <div className="categories-area" id="button-category">
            <div className="button-area">
              <button
                onClick={() => {
                  setResourceType(<Reviews items={item.Reviews} />);
                  toggleAnimation(1);
                }}
                className={activeDiv === 1 ? "gelatine" : ""}
              >
                Reviews
              </button>
              <button
                onClick={() => {
                  setResourceType(<Faqs items={item.Faq} />);
                  toggleAnimation(2);
                }}
                className={activeDiv === 2 ? "gelatine" : ""}
              >
                FAQs
              </button>
              <button
                onClick={() => {
                  toggleAnimation(3);
                  setResourceType(<SimilarItems type={item.type} />);
                }}
                className={activeDiv === 3 ? "gelatine" : ""}
              >
                Similar Items
              </button>
            </div>
          </div>
          <div className="resource-display">{resourceType}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(ProductPage);
