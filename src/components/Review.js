import React from "react";
import StarRatings from "react-star-ratings";

function Review(props) {
    console.log(props.star);
    return(
        <div>
            <h3>UserName</h3>
            <StarRatings starDimension="10px" rating={props.star}/>
            <p>{props.review}</p>
            <hr/>
        </div>
    )
}

export default Review;