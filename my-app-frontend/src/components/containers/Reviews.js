import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Review from "../shopComponents/Review";

function Reviews({ product, reviews }) {
  const [reviewerName, setReviewName] = useState("");
  const [reviewValue] = useState(0);
  const [currentReviews, setCurrentReviews] = useState(reviews);

  function handleCreate(newValue) {
    fetch(`http://localhost:9090/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product.id,
        name: reviewerName,
        rating: newValue,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onCreateReview(newReview));
  }

  function onCreateReview(newReview) {
    setCurrentReviews([...currentReviews, newReview]);
  }

  function onDeleteReview(deletedReview) {
    const filteredReviews = currentReviews.filter(
      (review) => review.id !== deletedReview.id
    );
    setCurrentReviews(filteredReviews);
  }

  const displayReviews = currentReviews.map((review) => {
    return (
      <Review key={review.id} review={review} onDeleteReview={onDeleteReview} />
    );
  });

  return (
    <>
      <h5> Customer Reviews: </h5>
      <figure style={{ whiteSpace: "nowrap", display: "flex  " }}>
        {currentReviews[0] ? displayReviews : <p>No reviews yet!</p>}
      </figure>
      <h5>Add a Review: </h5>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={reviewerName}
          onChange={(event) => setReviewName(event.target.value)}
          autoComplete="off"
        />
      </label>

      <Rating
        name="simple-controlled"
        value={reviewValue}
        onChange={(event, newValue) => {
          handleCreate(newValue);
        }}
      />
    </>
  );
}

export default Reviews;
