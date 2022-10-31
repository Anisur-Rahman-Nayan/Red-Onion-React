import React from 'react';
import error from '../../../images/error.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='image container'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;