import React, { useState } from "react";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
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
      </nav>
    </>
  );
}
export default Cart;
