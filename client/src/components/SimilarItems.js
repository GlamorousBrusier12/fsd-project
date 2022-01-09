import React,{useState,useEffect} from "react";
import Loader from "./Loader";
import MiniProduct from "./MiniProduct";
import "./../styles/SimilarItems.css"

function SimilarItems(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/products/?q=${props.type}`)
          .then((res) => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
      }, [props.type]);

      const scrollTop = ()=>{
          window.scrollTo(0,0);
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <Loader />;
      } else {
        return (
          <div>
          <h1 className="items-heading">Items you may like:</h1>
          <div className="items-display">
            {items.map(item=>{
                return (<div className="similar-item" onClick={scrollTop}>
                    <MiniProduct data={item}/>
                </div>)
            })}
          </div>
          </div>
        );
      }
}

export default SimilarItems;