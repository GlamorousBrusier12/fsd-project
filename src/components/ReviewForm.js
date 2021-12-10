import React,{useState} from "react";
import StarRatings from "react-star-ratings";

function ReviewForm(props) {
    const [body,setBody] = useState("");
    const [heading,setHeading] = useState("");
    // const [reviews,setReviews] = useState([]);
    const [star,setStar] = useState(0);

    function changeStar(newStar) {
      setStar(newStar);
    }

    const getBody = (event)=>{
      setBody(event.target.value);
    }

    const getHeading = (event)=>{
      setHeading(event.target.value);
    }

    const addReview = (event)=>{
      const data = {
        user:"Topper Naveen", 
        heading: heading,
        body: body,
        stars:star 
      };

    fetch('http://localhost:3000/reviews', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      event.preventDefault();
      setBody("");
      setHeading("");
      setStar(0);
    }
    return (
      <div>
        <div className="review-form">
        <h2>Submit your Review</h2>
            <StarRatings
              rating={star}
              changeRating={changeStar}
              starHoverColor="#ffcc01"
              starRatedColor="#ffcc01"
            />
            <input id="review-textarea" placeholder="Write your heading" onChange={getHeading} value={heading} required/>
            <input id="review-textarea" placeholder="Write the body" onChange={getBody} value={body} required/>
            <button id="review-submit-button" onClick={addReview}>Submit</button>
          </div>
      </div>
    )
}

export default ReviewForm;