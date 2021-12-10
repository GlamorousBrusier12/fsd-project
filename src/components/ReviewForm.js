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
      <div style={{display:"flex"}}>
        <img style={{width:"40%"}} src="https://www.episervice.org/webres/Image/Blog%20Graphics%20(2).png" alt="review-matters" width="50%" height="650px"/>
        <div style={{width:"60%"}} className="review-form">
          <h2>Submit your Review</h2>
          <StarRatings
            rating={star}
            changeRating={changeStar}
            starHoverColor="#ffcc01"
            starRatedColor="#ffcc01"
            starDimension="40px"
          />
          <input id="review-textarea" placeholder="Write your heading" onChange={getHeading} value={heading} required/>
          <textarea style={{resize:"none"}} id="review-textarea" placeholder="Write the body" onChange={getBody} value={body} rows={5} required/>
          <button id="review-submit-button" onClick={addReview}>Submit</button>
        </div>
      </div>
    )
}

export default ReviewForm;