import React,{useState} from 'react';
function MiniCart(props){
    const [qty,setQty]=useState(1);
   const  add=()=>{
        setQty(qty+1);
      }
      const remove=()=>{
          if(qty>1)
        setQty(qty-1);
        else 
        setQty(1);
      }


    return(
        
            <div className="Item1">
         <div className="image">
           <img src={props.content.image} alt={props.content.title}/>
           </div>
           <div className="column">
           <h4>{props.content.title}</h4>
           <h4>₹{props.content.price}</h4>
           <h5>Total:{qty} x {props.content.price}={qty*props.content.price}</h5>
           </div>
      
           <div className="cart-button">
           <button onClick={add}>+</button>
           <button onClick={remove}>-</button>
         </div>
        </div>
    )

}
export default MiniCart;