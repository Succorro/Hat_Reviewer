import React from "react";
import ItemCards from "./ItemCards";

function Category({ items }) {
  const displayItems = items.map((item) => {
    return <ItemCards key={item.id} item={item} />;
  });
  return (
    <>
      <h1>Category</h1>
      {displayItems}
    </>
  );
}

export default Category;
