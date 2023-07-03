import React from "react";
import ItemCards from "./ItemCards";

function Products({ products, onUpdateCart, onNewReview }) {
  const displayItems = products.map((item) => {
    return (
      <ItemCards
        key={item.id}
        item={item}
        onUpdateCart={onUpdateCart}
        onNewReview={onNewReview}
      />
    );
  });
  return <article class="grid">{displayItems}</article>;
}

export default Products;
