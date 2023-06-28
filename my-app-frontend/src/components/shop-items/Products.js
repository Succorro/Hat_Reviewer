import React from "react";
import ItemCards from "./ItemCards";

function Products({ products, onAddProduct }) {
  const displayItems = products.map((item) => {
    return <ItemCards key={item.id} item={item} onAddProduct={onAddProduct} />;
  });
  return <article class="grid">{displayItems}</article>;
}

export default Products;
