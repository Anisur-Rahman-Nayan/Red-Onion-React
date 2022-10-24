import React from 'react';
import bannerbackground from '../../images/bannerbackground.png'
import './HeaderImage.css'
const HeaderImage = () => {
    return (
        <div className='bannerImg'>
            <img src={bannerbackground} alt="" />
        </div>
    );
};

export default HeaderImage;