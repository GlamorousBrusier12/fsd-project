import React,{useState} from "react";
import StarRatings from "react-star-ratings";

function ReviewForm(props) {
    const [review,setReview] = useState("");
    const [reviews,setReviews] = useState([]);
    const [star,setStar] = useState(0);

    function changeStar(newStar) {
      setStar(newStar);
    }

    const onReview = (event)=>{
      setReview(event.target.value);
    }

    const addReview = (event)=>{
      setReviews((prevValues)=>{
        return [
          ...prevValues,
          {
            description:review,
            star:star
          }
        ]
      })
      event.preventDefault();
      setReview("");
      setStar(0);
    }
    return (
        <div className="review-form">
            <StarRatings
              rating={star}
              changeRating={changeStar}
              starHoverColor="#ffcc01"
              starRatedColor="#ffcc01"
            />
            <input id="review-textarea" placeholder="Write a review" onChange={onReview} value={review} required/>
            <button id="review-submit-button" onClick={addReview}>Submit</button>
          </div>
    )
}

export default ReviewForm;