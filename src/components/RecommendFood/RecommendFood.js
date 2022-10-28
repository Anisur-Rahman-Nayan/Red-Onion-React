import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendFood.css'

const RecommendFood = (props) => {
    const {id, img} = props.recommendFood;
    return (
        <div className='recommend-food' >
            <Link to={'../food/'+id} >
                <img src={img} height='130px' alt="" />
            </Link>
        </div>
    );
};

export default RecommendFood;