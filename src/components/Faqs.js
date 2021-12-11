import React, {useState,useEffect } from "react";
import Faq from "./Faq";
import "../styles/Faqs.css";


function Faqs() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [faqsDefault, setFaqsDefault] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [input,setInput] = useState("");

    useEffect(()=>{
        fetch("http://localhost:3001/faqs")
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
    },[])


    const updateFaqs = (event) => {
        const filtered = faqsDefault.filter(faq => {
         return faq.question.toLowerCase().includes(event.target.value.toLowerCase())
        })
        console.log(input)
        setInput(event.target.value);
        setFaqs(filtered);
     }
    
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="display-faqs">
            <h1>Frequently Question and Answers</h1>
            <div>
                <input className="faq-search" type="text" placeholder="Search.." name="search" onChange={updateFaqs} value={input}/>
                <button className="faq-search-button"><i class="fa fa-search"></i></button>
            </div>
            {/* <input className="faqs-search"/> */}
            <div className="faqs">
                {faqs.map((item) => (
                <Faq content={item} />
                ))}
            </div>
          </div>
        );
      }
}

export default Faqs;