import React from "react";
import Products from "../components/shop-items/Products";
function Shop({ items, onUpdateCart, onNewReview }) {
  const displayCategories = items.map((item) => {
    const { id, name, products } = item;
    return (
      <section class="container" key={id}>
        <h2>{name}</h2>
        <div className="grid" class="grid">
          <Products
            key={products.id}
            products={products}
            onUpdateCart={onUpdateCart}
            onNewReview={onNewReview}
          />
        </div>
      </section>
    );
  });
  return (
    <div className="conatiner" class="container">
      <h1>Hat Shop</h1>
      {displayCategories}
    </div>
  );
}

export default Shop;
