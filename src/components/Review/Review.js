import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'


const Review = (props) => {
    const {cart} = props
    // console.log(cart)

    var totalPrice = 0;

    for(let reviewItems of cart){
        totalPrice = totalPrice + reviewItems.price * reviewItems.quantity;
    }
    const tax = (totalPrice * 0.1).toFixed(2);
    const deliveryFee = 10;
    const grandTotal = (totalPrice + parseFloat(tax) + deliveryFee).toFixed(2);


    const navigate = useNavigate()
    
    const shipmentPage =()=>{
        const path = '/shipment';
        navigate(path)
    }



    return (
        <div>
            <h2 className='text-center'>Review Your Ordered Items !</h2>
            {
                cart.map(food=> <ReviewItems food={food} ></ReviewItems>)
            }                                                   

            <div className='text-center container bdr'>
            <h4> <small>Price:</small> $ {totalPrice}</h4>
            <h4> <small>Tax:</small> $ {tax}</h4>
            <h4> <small>Delivery Fee:</small> $ {deliveryFee}</h4>
            <hr className='hr' />
            <h3> <small>Grand Total:</small> $ {grandTotal}</h3>
                <button onClick={shipmentPage} className='placeOrderBtn'>Place Order !</button>
            </div>                                                    
        </div>
    );
};

export default Review;