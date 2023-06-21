import React from "react";
import ItemCards from "./ItemCards";

function Products({ items }) {
  const products = items.map((item) => item);
  console.log(products[0], products[1], products[2]);
  const displayItems = items.map((item) => {
    return <ItemCards key={item.id} item={item} />;
  });
  return (
    <>
      <h1>Products</h1>
      {displayItems}
    </>
  );
}

export default Products;
