import React, {Component } from 'react';
import {data} from '../data';
import '../styles/Cart.css';
import MiniCart from './MiniCart';

class Cart extends Component{
  constructor(props){
    super(props);
    this.state={
      qty:1,
    }
  }

  render()
  
  {
    console.log(data);
    return(

       <div className="Cart">
         <h1>Cart</h1>
         {data.map((x)=>{
          
          return <MiniCart content={x}/>
         })}
         
          
         
       </div>
    )
  }
}
export default Cart;