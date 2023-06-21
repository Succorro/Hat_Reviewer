import React from "react";
import Products from "../components/shop-items/Products";

function Shop({ items }) {
  const displayItems = items.map((item) => {
    return (
      <>
        <img src={item.image_url} alt="category hat" />
        <h2>{item.name}</h2>
        <Products key={item.products.id} products={item.products} />
      </>
    );
  });
  return (
    <>
      <h1>Store</h1>
      {displayItems}
    </>
  );
}

export default Shop;
