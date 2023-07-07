import React, { useState } from "react";
import Reviews from "./Reviews";

function ItemCards({ item, reviews, onNewReview, onAddToCart }) {
  const [sendItem] = useState({
    product_id: item.id,
    qty: 1,
    total: item.price,
  });
  const { name, image_url, desc, price } = item;

  function handleClick() {
    fetch(`http://localhost:9090/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendItem),
    })
      .then((r) => r.json())
      .then((newItem) => {
        newItem = {
          ...newItem,
          product: {
            id: item.id,
            name: item.name,
            price: item.price,
          },
        };
        onAddToCart(newItem);
      });
  }

  return (
    <main class="container">
      <img src={image_url} alt={`product hat`} style={{ maxWidth: "auto" }} />
      <h5>{name}</h5>
      <p>{desc}</p>${price}
      <button type="button" onClick={handleClick}>
        Add to Cart
      </button>
      <Reviews
        key={item.id}
        item={item}
        reviews={reviews}
        onNewReview={onNewReview}
      />
    </main>
  );
}

export default ItemCards;
