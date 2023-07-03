import React from "react";
import Rating from "@mui/material/Rating";
// ⭐
function Reviews({ reviews }) {
  console.log(reviews);
  const displayReviews = reviews.map((review) => {
    return (
      <div>
        <h6> {review.name}</h6>
        <p>Rating:</p>
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
    );
  });
  return (
    <div key={reviews.id}>
      <h5> Customer Reviews: </h5>
      {reviews[0] ? displayReviews : <p>No reviews yet!</p>}
    </div>
  );
}

export default Reviews;
