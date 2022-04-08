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
      <h4 className="text-center mt-4 fw-bold">
        <span className="text-primary">Happy</span> Client
      </h4>
      <div className="feature mx-auto">
        {reviwes.slice(0, 6).map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
        <br />
      </div>
    </div>
  );
};

export default Reviews;
