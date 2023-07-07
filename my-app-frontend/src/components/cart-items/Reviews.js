import React, { useState } from "react";
import Rating from "@mui/material/Rating";

function Reviews({ item, reviews, onNewReview }) {
  const [value] = useState(0);

  function handleChange(number) {
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
      <div key={review.id} style={{ paddingRight: "10%" }}>
        <h6> {review.name}</h6>
        <p>Rating:</p>
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
    );
  });

  return (
    <>
      <h5> Customer Reviews: </h5>
      <figure style={{ whiteSpace: "nowrap", display: "flex  " }}>
        {reviews[0] ? displayReviews : <p>No reviews yet!</p>}
      </figure>
      <p>Add a Review: </p>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          handleChange(event.target.value);
        }}
      />
    </>
  );
}

export default Reviews;
