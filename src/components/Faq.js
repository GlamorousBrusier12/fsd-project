import React, { useEffect, useState } from "react";

function Faq(props) {
    const {question,answers} = props.content;
    let upvotes = props.content.upvotes;
    const [upvote,setUpvotes] = useState(0);
    useEffect(()=>{
        setUpvotes(upvotes);
        console.log(upvote);
    },[upvotes,upvote])
    return (
        <div style={{display:"flex",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column", alignItems:"center", margin:"20px"}}>
                <button onClick={()=>{upvotes++;}}>
                    <i class="fas fa-caret-up"></i>
                </button>
                <span>{upvote}</span>
                <button onClick={()=>{upvotes--;}}>
                    <i class="fas fa-caret-down"></i>
                </button>
            </div>
            <div style={{borderLeft:"1px solid grey"}}>
                <h3>Question:  {question}</h3>
                <div>
                    {answers.map((answer,index)=>{
                        return <p>Answer {index+1}) {answer}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq;