import React,{useEffect} from "react";
import SimilarItems from "./SimilarItems";

function NoResult() {
    return(
        <div>
            <h1>Sorry, we were not able to find results for your search.</h1>
            <p>The reasons could be:</p>
            <ul>
                <li>The product you are searching for may not be available on our website.</li>
                <li>There must be a typo in your search query.</li>
                <li>Try to use more  generic terms.</li>
                <li>Connect with us on Mail for further assistance.</li>
            </ul>
            <h2>
                Here are some products you may like:
            </h2>
            {/* <SimilarItems /> */}
        </div>
    )
}

export default NoResult;