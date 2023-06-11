import React from "react";
import ItemCards from "../components/shop-items/ItemCards";

function Shop({ items }) {
  const displayItems = items.map((item) => {
    return <ItemCards key={item.id} item={item} />;
  });
  return <>{displayItems}</>;
}

export default Shop;
