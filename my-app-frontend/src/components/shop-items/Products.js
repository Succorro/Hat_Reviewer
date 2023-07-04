import React from "react";
import ItemCards from "./ItemCards";

function Products({ products, reviews, onNewReview, onAddToCart }) {
  const displayItems = products.map((item) => {
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
  return <article class="grid">{displayItems}</article>;
}

export default Products;
