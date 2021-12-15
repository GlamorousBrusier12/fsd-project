import React, { useEffect, useState } from "react";
import Review from "./Review";
import "../styles/Reviews.css";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";

function Reviews() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([]);

  const [pageNumber,setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(reviews.length/usersPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected);
  }

  const displayReviews = reviews.slice(pagesVisited,pagesVisited+usersPerPage).map((review)=>{
    return <Review content={review} key={review.id} />
  })

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setReviews(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className="display-reviews">
      <h1 className="reviews-heading">Reviews:</h1>
        {displayReviews}
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
      </div>
    );
  }
}

export default Reviews;
