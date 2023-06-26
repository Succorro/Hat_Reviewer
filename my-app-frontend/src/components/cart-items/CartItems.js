import React, { useState } from "react";

function CartItems({ products, handleUpdate, onRemoveProduct }) {
  const [quantity, setQuantity] = useState(1);
  const { product } = products;
  function handleChange(quantity) {
    setQuantity(quantity);
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
        handleUpdate(newQuantity);
      });
  }

  function handleRemove() {
    fetch(`http://localhost:9090/cart_products/${products.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedProduct) => onRemoveProduct(deletedProduct));
  }

  return (
    <main key={product.id}>
      <li>Item: {product.name}</li>
      <li>Price: ${product.price}</li>
      <li>
        <label>Qty:</label>
        <select onChange={(e) => handleChange(e.target.value)}>
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
        <p>{quantity}</p>
        <button onClick={handleRemove}>Remove Item</button>
      </li>
    </main>
  );
}

export default CartItems;
