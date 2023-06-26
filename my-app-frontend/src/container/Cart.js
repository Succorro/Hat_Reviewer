import React, { useState } from "react";
import CartItems from "../components/cart-items/CartItems";

function Cart({ cartProducts, onRemoveProduct, onHandleUpdate }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const displayProducts = cartProducts.map((products) => {
    return (
      <CartItems
        key={products.id}
        products={products}
        onRemoveProduct={onRemoveProduct}
        handleUpdate={onHandleUpdate}
      />
    );
  });

  console.log(cartProducts.map((product) => product.qty));
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
        {displayProducts}
        <h1>Total: ${total}</h1>
      </nav>
    </>
  );
}
export default Cart;
