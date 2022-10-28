import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItems.css'

const FoodItems = (props) => {
    const {id, name, description , price, img} = props.food;

    return (
        <div className='col-md-4 mb-4'>
            <Link className='underlineRemove' to={'food/'+ id}>
            <div className='card text-center' >
               <div> <img width={250} src={img} alt="" /></div>
            <div>
                <h5 className='food-info'>{name}</h5>
                <p className='food-info' >{description}</p>
                <h4 className='food-info'>$ {price.toFixed(2)}</h4>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default FoodItems;