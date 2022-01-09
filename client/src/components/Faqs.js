import React, { useState, useEffect } from "react";
import Faq from "./Faq";
import "../styles/Faqs.css";
import ReactPaginate from "react-paginate";
import Loader from "./Loader";

function Faqs(props) {
  const faqsDefault = props.items;
  const [faqs, setFaqs] = useState(props.items);
  const [input, setInput] = useState("");

  const [pageNumber,setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(faqs.length/usersPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected);
  }
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
    return (
      <div className="display-faqs">
        <h1 className="faqs-heading">Frequent Questions and Answers</h1>
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

export default Faqs;