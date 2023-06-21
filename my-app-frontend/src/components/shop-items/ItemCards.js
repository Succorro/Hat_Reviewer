import React from "react";

function ItemCards({ item }) {
  const { name, image_url, desc, color, price } = item;
  function handleClick() {
    console.log("hi");
  }
  return (
    <div className="card">
      <img src={{ image_url }} alt={`product hat`} />
      <h5>{name}</h5>
      <p>{desc}</p>
      <p>{color}</p>${price}
      <button type="button" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCards;
