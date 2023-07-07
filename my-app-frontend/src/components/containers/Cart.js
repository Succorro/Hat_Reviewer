import React from "react";
import CartItems from "../cartComponents/CartItems";

function Cart({ cartProducts, onHandleUpdate, onRemoveCart, currentTotal }) {
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
