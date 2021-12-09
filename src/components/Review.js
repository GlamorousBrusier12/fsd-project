import React from "react";
import StarRatings from "react-star-ratings";

function Review(props) {
  console.log(props.star);
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginLeft: 10 }}>
          {/* <img src="https://img.icons8.com/office/80/000000/user.png" /> */}
          <img
            style={{ height: 80, width: 80, borderRadius: 50 }}
            src="https://secure.gravatar.com/avatar/8c5d4c4b9ef6c68c4ff91c319d4c56be?d=404&s=300"
          />
        </div>
        <div>
          <h2>Ravindra Tholuchuru</h2>
          <div style={{ marginLeft: 10, marginBottom: 20 }}>
            <StarRatings
              starDimension="22px"
              starSpacing="2px"
              starRatedColor="#ffcc01"
              starEmptyColor="#e3e3e3"
              rating={props.star}
            />
          </div>
        </div>
      </div>
      <p>{props.review}</p>
      <hr />
    </div>
  );
}

export default Review;
