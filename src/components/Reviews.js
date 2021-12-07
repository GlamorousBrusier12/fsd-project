import React,{useEffect, useState} from "react";
import StarRatings from "react-star-ratings";
import Review from "./Review";
import './Reviews.css'

function Reviews(){
    const [review,setReview] = useState("");
    const [reviews,setReviews] = useState([]);
    const [star,setStar] = useState(0);

    useEffect(()=>{
      console.log(star);
    },[star])

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
        <div className="reviews">
          <h1>Reviews</h1>
          <div className="review-form">
            <StarRatings
              rating={star}
              widgetRatedColors="blue"
              changeRating={changeStar}

            />
            <textarea id="review-textarea" placeholder="Write a review" onChange={onReview} value={review} rows="10"></textarea>
            <button id="review-submit-button" onClick={addReview}>Submit</button>
          </div>
            
            <div className="display-reviews">
              {reviews.map((review)=>{
                return <Review review={review.description} star={review.star}/>
              })}
            </div>
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

            </div>
        </div>
    )
}

export default Reviews;
