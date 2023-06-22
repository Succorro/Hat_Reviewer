import React, { useState } from "react";

function CartItems({ product, handleUpdate, onRemoveProduct }) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(quantity) {
    setQuantity(quantity);
    fetch(`http://localhost:9090/cart_products/${product.id}`, {
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
    fetch(`http://localhost:9090/cart_products/${product.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedProduct) => onRemoveProduct(deletedProduct));
  }

  return (
    <div className="container" class="container" key={product.id}>
      <div class="grid">
        <li>Item: {product.product.name}</li>
        <li>Price: ${product.product.price}</li>
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
      </div>
    </div>
  );
}

export default CartItems;
