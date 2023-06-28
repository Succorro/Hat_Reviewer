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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <aside class="container" style={{ zIndex: 2 }}>
      <details
        style={{
          width: "40%",
          marginLeft: "70%",
          marginTop: "-50px",
        }}
      >
        <summary role="button">Cart</summary>
        <figure style={{ whiteSpace: "nowrap", display: "flex  " }}>
          {displayProducts}
        </figure>
        <footer>
          Total: ${currentTotal}
          <button style={{ maxWidth: "150px", maxHeight: "75px" }}>
            Check Out
          </button>
        </footer>
      </details>{" "}
    </aside>
  );
}
export default Cart;
