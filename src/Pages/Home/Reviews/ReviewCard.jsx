import React from "react";
import "./review.css";
import ReactStars from "react-rating-stars-component";
// import { faL } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({ review }) => {
  const { user, text, star } = review;
  return (
    <div className=" mx-auto col-lg-3 col-md-4 col-11 ">
      <div className="pe-2 review-card">
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
    </div>
  );
};

export default ReviewCard;
