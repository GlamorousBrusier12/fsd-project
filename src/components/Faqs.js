import React, { useState, useEffect } from "react";
import Faq from "./Faq";
import "../styles/Faqs.css";
import ReactPaginate from "react-paginate";
import Loader from "./Loader";

function Faqs() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [faqsDefault, setFaqsDefault] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [input, setInput] = useState("");

  const [pageNumber,setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(faqs.length/usersPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected);
  }

  useEffect(() => {
    fetch("http://localhost:3000/faqs")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFaqs(result);
          setFaqsDefault(result);
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

  const displayFaqs = faqs.slice(pagesVisited,pagesVisited+usersPerPage).map((faq)=>{
    return <Faq content={faq} key={faq.id} />
  })

  const updateFaqs = (event) => {
    const filtered = faqsDefault.filter((faq) => {
      return faq.question
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    console.log(input);
    setInput(event.target.value);
    setFaqs(filtered);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
    return <div className="loader"></div>;
  } else {
    return (
      <div className="display-faqs">
        <h1 className="faqs-heading">Frequently Question and Answers</h1>
        <div className="search-area">
          <input
            className="faq-search"
            type="text"
            placeholder="Search.."
            name="search"
            onChange={updateFaqs}
            value={input}
          />
          <button className="faq-search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        {/* <input className="faqs-search"/> */}
        <div className="faqs">
          {/* {faqs.map((item) => (
            <Faq content={item} key={item.id} />
          ))} */}
          {displayFaqs}
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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>
      </div>
    );
  }
}

export default Faqs;
