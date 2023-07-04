import React from "react";

function CartItems({ products, handleUpdate, onRemoveCart }) {
  const { product, qty } = products;
  const { name, price } = product;

  function handleChange(quantity) {
    fetch(`http://localhost:9090/cart_products/${products.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qty: quantity,
      }),
    })
      .then((r) => r.json())
      .then((newQuantity) => {
        newQuantity = {
          ...newQuantity,
          product: {
            name: name,
            price: price,
          },
        };
        handleUpdate(newQuantity);
      });
  }

  function handleRemove() {
    fetch(`http://localhost:9090/cart_products/${products.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedProduct) => onRemoveCart(deletedProduct));
  }

  return (
    <main style={{ margin: "0px 10px 0px 0px", width: 150, height: 300 }}>
      <p>Item: {name} </p>
      <p>Price: ${price}</p>
      <p>
        <label>Qty:</label>
        <select value={qty} onChange={(e) => handleChange(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button onClick={handleRemove}>Remove Item</button>
      </p>
    </main>
  );
}

export default CartItems;
