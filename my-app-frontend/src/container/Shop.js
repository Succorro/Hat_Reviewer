import React from "react";
import Products from "../components/shop-items/Products";
function Shop({ items, onAddProduct, setItemArr }) {
  const displayItems = items.map((item) => {
    return (
      <section class="container" key={item.id}>
        <h2>{item.name}</h2>
        <div className="grid" class="grid">
          <Products
            key={item.products.id}
            products={item.products}
            onAddProduct={onAddProduct}
            setItemArr={setItemArr}
          />
        </div>
      </section>
    );
  });
  return (
    <div className="conatiner" class="container">
      <h1>Hat Shop</h1>
      {displayItems}
    </div>
  );
}

export default Shop;
