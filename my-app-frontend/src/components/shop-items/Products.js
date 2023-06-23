import React from "react";
import ItemCards from "./ItemCards";

function Products({ products, onAddProduct }) {
  const displayItems = products.map((item) => {
    return <ItemCards key={item.id} item={item} onAddProduct={onAddProduct} />;
  });
  return <>{displayItems}</>;
}

export default Products;
