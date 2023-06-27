import React from "react";

function ItemCards({ item, onAddProduct }) {
  const { name, image_url, desc, price } = item;

  function handleClick() {
    console.log(item.price);
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
      .then((newCartItem) => onAddProduct(newCartItem));
  }

  return (
    <div className="card">
      <img src={image_url} alt={`product hat`} style={{ maxWidth: "300px" }} />
      <h5>{name}</h5>
      <p>{desc}</p>${price}
      <button type="button" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCards;
