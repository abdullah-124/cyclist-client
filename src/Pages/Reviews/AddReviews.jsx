import React, { useRef } from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reviews.css";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth"

const AddReview = () => {
  const {user} = useAuth()
  let review = {}
  const text = useRef();
  const ratingChanged = (newRating) => {
    console.log(newRating);
    review.star = newRating;
  };
  const handleReview = (e) =>{
    review.text = text.current.value;
    review.user = user.displayName;
    // console.log(review)
    fetch('https://pacific-ridge-36287.herokuapp.com/review', {
      method: 'post', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => {
      if(res.status === 200){
        alert('Review Post')
      }
    })
    e.preventDefault()
  }

  return (
    <div className="row row-cols-1 row-cols-lg-2 mt-5 mx-auto">
      <div className="mx-auto">
        <form className="review shadow-lg" onSubmit={handleReview}>
          <h4>Add Review</h4>
          <textarea
            placeholder="Type Review"
            ref={text}
            name="review"
            cols="30"
            rows="3"
          ></textarea>
          <div className="rate d-flex align-items-center mb-3">
            <label className="fw-bold me-3">Rate out of 5</label>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              edit={true}
              name="star"
              activeColor="#ffd700"
            />
          </div>
          <button className="btn-main" type="submit">
            <FontAwesomeIcon icon={faPenAlt} /> Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
