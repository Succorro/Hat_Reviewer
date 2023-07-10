import React from "react";
import ItemCards from "../shopComponents/ItemCards";

function Shop({ items, onNewReview, onAddToCart }) {
  const displayItems = items.map((item) => {
    return (
      <ItemCards
        key={item.id}
        item={item}
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
