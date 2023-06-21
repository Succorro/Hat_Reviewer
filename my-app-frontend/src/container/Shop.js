import React from "react";
import Products from "../components/shop-items/Products";
function Shop({ items }) {
  const displayItems = items.map((item) => {
    // console.log(item.image_url);
    return (
      <div className="container" class="container" key={item.id}>
        <img
          src={item.image_url}
          alt="category hat"
          style={{ maxWidth: "300px" }}
        />
        <h2>{item.name}</h2>
        <div className="grid" class="grid">
          <Products key={item.products.id} products={item.products} />
        </div>
      </div>
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
