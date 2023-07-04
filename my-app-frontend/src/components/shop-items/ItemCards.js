import React, { useState } from "react";
import Reviews from "../cart-items/Reviews";

function ItemCards({ item, onNewReview, onAddToCart }) {
  const [sendItem] = useState({
    product_id: item.id,
    shopping_cart_id: 1,
    qty: 1,
    product_price: item.price,
  });
  const { name, image_url, desc, price } = item;

  function handleClick() {
    fetch(`http://localhost:9090/cart_products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendItem),
    })
      .then((r) => r.json())
      .then((newItem) => {
        console.log(newItem);
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
      <Reviews key={item.id} item={item} onNewReview={onNewReview} />
    </main>
  );
}

export default ItemCards;
