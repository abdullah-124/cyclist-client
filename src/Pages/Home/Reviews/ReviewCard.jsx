import React from 'react';
import './review.css'
import ReactStars from "react-rating-stars-component";
// import { faL } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({review}) => {
    const {user, text, star} = review
    return (
        <div className='feature-product mx-auto'>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={star}
              name={star}
              activeColor="#ffd700"
            />
            <h6>{user}</h6>
            <p>{text}</p>
        </div>
    );
};

export default ReviewCard;