import React from "react";
import NewHat from "../NewHat";
import ProductCards from "../shopComponents/ProductCards";

function Shop({ products, onAddProduct }) {
  const displayProducts = products.map((product) => {
    return <ProductCards key={product.id} product={product} />;
  });

  return (
    <div className="container" class="container">
      <h1>Hat Shop</h1>
      <div
        className="grid"
        class="grid"
        style={{
          gridTemplateColumns: "33% 33% 33%",
        }}
      >
        {displayProducts}
      </div>
      <NewHat onAddProduct={onAddProduct} />
    </div>
  );
}

export default Shop;
