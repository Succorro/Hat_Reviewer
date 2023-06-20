import React from "react";

function ItemCards({ item }) {
  const { name, image_url } = item;
  return (
    <div className="characterCard">
      <img src={{ image_url }} alt={`type of hat`} />

      <li style={{ listStyleType: "none" }}>
        <h3>{name}</h3>
      </li>
    </div>
  );
}

export default ItemCards;
