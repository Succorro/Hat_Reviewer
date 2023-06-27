import React, { useState, useEffect } from "react";
import CartItems from "../components/cart-items/CartItems";

function Cart({ cartProducts, onRemoveProduct, onHandleUpdate }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentTotal, setCurrentTotal] = useState(0);

  const cartMap = cartProducts.map((product) => {
    const container = {};
    container.price = product.product_price;
    container.qty = product.qty;
    return container;
  });
  const reduce = cartMap.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
  useEffect(() => {
    setCurrentTotal(reduce);
  }, [cartProducts]);

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
        <h1>Total: ${currentTotal}</h1>
      </nav>
    </>
  );
}
export default Cart;
