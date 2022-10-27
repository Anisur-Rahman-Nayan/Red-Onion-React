import React from 'react';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {
    const {id, name, description , price, img} = props.food;

    return (
        <div className='col-md-4 mb-4'>
            <Link to={'food/'+ id}>
            <div className='card text-center'>
                <img src={img} alt="" />
            <div>
                <h5>{name}</h5>
                <p>{description}</p>
                <h4>$ {price.toFixed(2)}</h4>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default FoodItems;