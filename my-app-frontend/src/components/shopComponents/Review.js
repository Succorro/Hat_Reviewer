import React, { useState } from "react";
import { Rating } from "@mui/material";

function Review({ review, onDeleteReview }) {
  const { id, name, rating } = review;
  const [reviewRating, setReviewRating] = useState(rating);

  function handleUpdate(updatedValue, id) {
    fetch(`http://localhost:9090/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: updatedValue,
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        setReviewRating(updatedReview.rating);
      });
  }

  function handleDelete(deletedReview) {
    fetch(`http://localhost:9090/reviews/${deletedReview.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedReview) => onDeleteReview(deletedReview));
  }

  return (
    <div key={id} style={{ paddingRight: "10%" }}>
      <h6> {name}</h6>
      <p>Rating:</p>
      <Rating
        name="simple-controlled"
        value={reviewRating}
        onChange={(event, newValue) => {
          handleUpdate(newValue, id);
        }}
      />
      <button onClick={() => handleDelete(review)}>Delete Review</button>
    </div>
  );
}

export default Review;
