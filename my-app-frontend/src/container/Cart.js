import React, { useState } from "react";
import CartItems from "../components/cart-items/CartItems";

function Cart({ products }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const total = 0;

  function handleUpdate(newProduct) {
    console.log(newProduct);
  }

  const displayProducts = products.map((product) => {
    return (
      <CartItems
        key={product.id}
        product={product}
        handleUpdate={handleUpdate}
      />
    );
  });

  return (
    <>
      {" "}
      <button
        className="cart-toggle"
        onClick={() => setIsCartOpen(!isCartOpen)}
        style={{ width: "auto", marginLeft: "90%", marginTop: "-50px" }}
      >
        <span>Cart</span>
      </button>
      <nav
        className={`${isCartOpen ? "cart-open" : "cart-closed"}`}
        style={{ display: `${isCartOpen ? "flex" : "none"}`, zIndex: "2" }}
      >
        <h1>Open</h1>
        {displayProducts}
        <h1>Total: ${total}</h1>
      </nav>
    </>
  );
}
export default Cart;
