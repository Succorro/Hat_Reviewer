import React from "react";
import ItemCards from "../shopComponents/ItemCards";

function Shop({ items, reviews, onNewReview, onAddToCart }) {
  const displayItems = items.map((item) => {
    const filteredReviews = reviews.filter(
      (review) => review.product_id === item.id
    );
    return (
      <ItemCards
        key={item.id}
        item={item}
        reviews={filteredReviews}
        onNewReview={onNewReview}
        onAddToCart={onAddToCart}
      />
    );
  });

  return (
    <div className="container" class="container">
      <h1>Hat Shop</h1>
      <div
        className="grid"
        class="grid"
        style={{
          gridTemplateColumns: "33% 33% 33%",
        }}
      >
        {displayItems}
      </div>
    </div>
  );
}

export default Shop;
