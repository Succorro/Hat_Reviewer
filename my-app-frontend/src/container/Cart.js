import React, { useState, useEffect } from "react";
import CartItems from "../components/cart-items/CartItems";

function Cart({ cartProducts, onHandleUpdate, onRemoveCart }) {
  const [currentTotal, setCurrentTotal] = useState(0);
  // Used to create total, needs optimization
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
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  useEffect(() => {
    setCurrentTotal(reduce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  const displayProducts = cartProducts.map((products) => {
    return (
      <CartItems
        key={products.id}
        products={products}
        handleUpdate={onHandleUpdate}
        onRemoveCart={onRemoveCart}
      />
    );
  });

  return (
    <aside class="container">
      <details
        style={{
          width: "40%",
          marginLeft: "48%",
          marginTop: "-50px",
          zIndex: 2,
          position: "absolute",
          backgroundColor: "#131e25",
        }}
      >
        <summary role="button">Cart</summary>
        <div style={{ paddingLeft: "10px" }}>
          <figure style={{ whiteSpace: "nowrap", display: "flex  " }}>
            {displayProducts}
          </figure>
          <footer>
            Total: ${currentTotal}
            <button style={{ maxWidth: "150px", maxHeight: "75px" }}>
              Check Out
            </button>
          </footer>
        </div>
      </details>{" "}
    </aside>
  );
}
export default Cart;
