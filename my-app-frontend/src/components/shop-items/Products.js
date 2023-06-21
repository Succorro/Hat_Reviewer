import React from "react";
import ItemCards from "./ItemCards";

function Products({ products }) {
  const displayItems = products.map((item) => {
    return <ItemCards key={item.id} item={item} />;
  });
  return (
    <>
      <h3 style={{ color: "blue" }}>Products</h3>
      {displayItems}
    </>
  );
}

export default Products;
