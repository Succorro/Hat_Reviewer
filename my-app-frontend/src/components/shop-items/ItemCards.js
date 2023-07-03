import React from "react";
import Reviews from "../cart-items/Reviews";

function ItemCards({ item, onUpdateCart, onNewReview }) {
  const { name, image_url, desc, price } = item;
  function handleClick() {
    fetch(`http://localhost:9090/cart_products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: item.id,
        shopping_cart_id: 1,
        qty: 1,
        product_price: item.price,
      }),
    })
      .then((r) => r.json())
      .then((newCartItem) => onUpdateCart(newCartItem));
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
