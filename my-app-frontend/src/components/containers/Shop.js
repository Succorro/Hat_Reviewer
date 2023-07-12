import React from "react";
import ItemCards from "../shopComponents/ItemCards";
import NewHat from "../NewHat";

function Shop({ items, onNewReview, onAddToCart, onAddProduct }) {
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
      <NewHat onAddProduct={onAddProduct} />
    </div>
  );
}

export default Shop;
