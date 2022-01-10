import React, { useState,useEffect } from "react";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "./Loader"
function ReviewForm(props) {
  const [item,setItem] = useState()
  const [isLoaded,setIsLoaded] = useState()
  const [error,setError] = useState()
  const productId=1
  useEffect(()=>{
    fetch(`http://localhost:3000/products/${productId}`)
        .then((res) => res.json())
        .then(
          (i) => {
            setItem(i);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      window.scrollTo(0, 0);
  },[productId])
  const history = useHistory();
  const [body, setBody] = useState("");
  const [heading, setHeading] = useState("");
  const { user } = props;
  // console.log("user ", user);
  // const [reviews,setReviews] = useState([]);
  const [star, setStar] = useState(0);

  function changeStar(newStar) {
    setStar(newStar);
  }

  const getBody = (event) => {
    setBody(event.target.value);
  };

  const getHeading = (event) => {
    setHeading(event.target.value);
  };

  const addReview = (event) => {
    if (body && heading) {
      const data = {
        UserName: user.fullName,
        Heading: heading,
        Body: body,
        Rating: star,
      };
      item.Reviews.unshift(data);
      fetch("http://localhost:3000/products/1", {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      event.preventDefault();
      setBody("");
      setHeading("");
      setStar(0);
      history.push("/");
    }
  };
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
    <div style={{ display: "flex" }}>
      <img
        style={{ width: "40%", height: "91vh" }}
        src="https://www.episervice.org/webres/Image/Blog%20Graphics%20(2).png"
        alt="review-matters"
        width="50%"
        height="650px"
      />
      <div style={{ width: "60%" }} className="review-form">
        <h2>Submit your Review</h2>
        <StarRatings
          rating={star}
          changeRating={changeStar}
          starHoverColor="#ffcc01"
          starRatedColor="#ffcc01"
          starDimension="40px"
        />
        <input
          id="review-textarea"
          placeholder="Write your heading"
          onChange={getHeading}
          value={heading}
          required
        />
        <textarea
          style={{ resize: "none" }}
          id="review-textarea"
          placeholder="Write the body"
          onChange={getBody}
          value={body}
          rows={5}
          required
        />
        <button id="review-submit-button" onClick={addReview}>
          Submit
        </button>
      </div>
    </div>
  );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user.userData,
  };
}
export default connect(mapStateToProps)(ReviewForm);
