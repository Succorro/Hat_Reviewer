import React from "react";
import ItemCards from "../components/shop-items/ItemCards";
import Products from "../components/shop-items/Products";

function Shop({ items }) {
  const displayItems = items.map((item) => {
    return (
      <>
        <ItemCards key={item.id} item={item} />
        <Products products={item.products} />
      </>
    );
  });
  return (
    <>
      <h1>Store</h1>
      <h2>Shop by category</h2>
      {displayItems}
    </>
  );
}

export default Shop;
