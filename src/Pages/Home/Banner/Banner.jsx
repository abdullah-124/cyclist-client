import React from 'react';
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner ">
            <h1 className=''>It's Your World Ride It !!</h1>
            <p className='text-secondary'></p>
            <Link className='btn-main' to='products'>Explor Now</Link>
            </div>
        </div>
    );
};

export default Banner;