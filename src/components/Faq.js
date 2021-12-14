import React from "react";
import Votes from "./Votes";
import "../styles/Faq.css";

function Faq(props) {
  const { question, answers } = props.content;
  let upvotes = props.content.upvotes;
  return (
    <div className="single-faq">
      <Votes upvotes={upvotes} />
      <div className="qna">
        <div>
          <h3>{question}</h3>
        </div>
        <div>
          {answers.map((answer, index) => {
            return (
              <p key={index}>
                {index + 1}) {answer}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
