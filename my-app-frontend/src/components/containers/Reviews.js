import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import Review from "../shopComponents/Review";
import { CRUDContext } from "../App";

function Reviews({ product, reviews }) {
  const [reviewerName, setReviewName] = useState("");
  const [reviewValue] = useState(0);
  const { onCreateReview } = useContext(CRUDContext);

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

  const displayReviews = reviews.map((review) => {
    return <Review key={review.id} review={review} />;
  });

  return (
    <>
      <h5> Customer Reviews: </h5>
      <figure style={{ whiteSpace: "nowrap", display: "flex  " }}>
        {reviews[0] ? displayReviews : <p>No reviews yet!</p>}
      </figure>
      <div
        className="container"
        class="container"
        style={{
          marginBottom: "10px",
          borderRadius: "5px",
          padding: "10px",
          backgroundColor: "rgb(16 149 193)",
        }}
      >
        <h5>Add a Review: </h5>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={reviewerName}
            onChange={(event) => setReviewName(event.target.value)}
            autoComplete="off"
            style={{ backgroundColor: "lavender" }}
          />
        </label>
        <p>Rating:</p>
        <Rating
          name="simple-controlled"
          value={reviewValue}
          onChange={(event, newValue) => {
            handleCreate(newValue);
          }}
        />
      </div>
    </>
  );
}

export default Reviews;
