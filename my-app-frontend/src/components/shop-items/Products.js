import React from "react";
import ItemCards from "./ItemCards";

function Products({ products, onNewReview, onAddToCart }) {
  const displayItems = products.map((item) => {
    return (
      <ItemCards
        key={item.id}
        item={item}
        onNewReview={onNewReview}
        onAddToCart={onAddToCart}
      />
    );
  });
  return <article class="grid">{displayItems}</article>;
}

export default Products;
