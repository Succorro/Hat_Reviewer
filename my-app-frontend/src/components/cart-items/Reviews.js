import React, { useState } from "react";
import Rating from "@mui/material/Rating";
// ⭐
function Reviews({ item, onNewReview }) {
  const { reviews } = item;
  const [value, setValue] = useState(0);
  function handleChange(number) {
    console.log(number);
    fetch(`http://localhost:9090/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: item.id,
        name: "Guest User",
        rating: number,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onNewReview(newReview));
  }
  const displayReviews = reviews.map((review) => {
    return (
      <div key={review.id}>
        <h6> {review.name}</h6>
        <p>Rating:</p>
        <Rating name="read-only" value={review.rating} readOnly />
        <p>Add a Review: </p>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            handleChange(event.target.value);
          }}
        />
      </div>
    );
  });
  return (
    <div>
      <h5> Customer Reviews: </h5>
      {reviews[0] ? displayReviews : <p>No reviews yet!</p>}
    </div>
  );
}

export default Reviews;
