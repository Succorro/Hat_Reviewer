import React from "react";
import ItemCards from "./ItemCards";

function Products({ products }) {
  const displayItems = products.map((item) => {
    return <ItemCards key={item.id} item={item} />;
  });
  return <>{displayItems}</>;
}

export default Products;
