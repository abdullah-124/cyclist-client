import React, { useEffect, useState } from "react";
import "./review.css";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviwes, setreviwes] = useState([]);
  useEffect(() => {
    fetch("https://pacific-ridge-36287.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setreviwes(data));
  }, []);
  return (
    <div>
      <h4 className="text-center my-5 fw-bold">
        <span className="text-primary fw-bold py-5">Happy</span> Client
      </h4>
      <div className="review mx-auto">
        {reviwes.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
        <br />
      </div>
    </div>
  );
};

export default Reviews;
