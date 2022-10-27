import React from 'react';

const FoodItems = (props) => {
    const {id, name, description , price, img} = props.food;

    return (
        <div className='col-md-4 mb-4'>
            <div className='card text-center'>
                <img src={img} alt="" />

            <div>
                <h5>{name}</h5>
                <p>{description}</p>
                <h4>$ {price.toFixed(2)}</h4>
            </div>

            </div>
        </div>
    );
};

export default FoodItems;