import React,{useState} from "react";
import "../styles/Payment.css"

function Payment() {
    const [address,setAddress] = useState();
    return(
        <div>
            <div className="item-summary">
                <h1>Item Summary</h1>
                <div className="item-details">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="item" style={{height:"200px",width:"200px"}}/>
                    <div className="item-details-text">
                        <h2>Product Heading</h2>
                        <h3>Price: $20</h3>
                        <h3>Quantity: 2</h3>
                        <h3>Total Amount: $20 x 2 = $40s</h3>
                    </div>
                </div>
            </div>
            <div className="shippping-address">
                <h1>Shipping Address</h1>
                <div className="address-list">
                    <p>Please select your preffered shippping address:</p>
                    <input type="radio" id="address1" name="address"/>
                    <label for="address1">Sherlock Holmes, 221B, Baker Street, London</label><br/>
                    <input type="radio" id="address2" name="address"/>
                    <label for="address2">Some random address</label><br/>
                    <input type="radio" id="address3" name="address"/>
                    <label for="address3">Some other random address</label>
                </div>
            </div>
            <div className="payment-method">
            <h1>Payment: </h1>
                <div className="address-list">
                    <p>Please select your preffered payment method:</p>
                    <input type="radio" id="debit" name="address"/>
                    <label for="debit">Debit Card</label><br/>
                    <input type="radio" id="credit" name="address"/>
                    <label for="credit">Credit Card</label><br/>
                    <input type="radio" id="upi" name="address"/>
                    <label for="upi">UPI</label>
                    <input type="radio" id="net" name="address"/>
                    <label for="net">Net Banking</label>
                </div>
            </div>
        </div>
    );
}

export default Payment;