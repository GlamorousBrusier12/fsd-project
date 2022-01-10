import React from "react";
import Votes from "./Votes";
import "../styles/Faq.css";

function Faq(props) {
  const { Question, Answer } = props.content;
  let upvotes = props.content.Upvotes;

  // console.log("Faqs ",props.content);
  return (
    <div className="single-faq">
      <Votes upvotes={upvotes} />
      <div className="qna">
        <div>
          <h3>{Question}</h3>
        </div>
        <div>
          {Answer}
        </div>
      </div>
    </div>
  );
}

export default Faq;
