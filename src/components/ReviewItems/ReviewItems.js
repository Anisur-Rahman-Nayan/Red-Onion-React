import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
   const {name,quantity, price, img} = props.food;
    return (
        <div className='container my-5 borderStyle d-flex justify-content-evenly'>
            <div>
                    <img src={img} width="150px" alt="" />
            </div>
            <div >
                <div className='text-center'>
                    <h2 className='info'>{name}</h2>
                    <h3 ><small>Price:</small> <span className='info'>$ {price * quantity}</span></h3>
                    <h4> <small>Quantity:</small> <span className='info' >{quantity}</span></h4>
                </div>
           
            </div>
        </div>
    );
};

export default ReviewItems;