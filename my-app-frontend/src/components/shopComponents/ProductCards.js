import React from "react";
import Reviews from "../containers/Reviews";

function ProductCards({ product }) {
  const { name, image_url, desc, price, reviews } = product;

  return (
    <main class="container">
      <img src={image_url} alt={`product hat`} style={{ maxWidth: "auto" }} />
      <h5>{name}</h5>
      <p>{desc}</p>${price}
      <Reviews key={product.id} product={product} reviews={reviews} />
    </main>
  );
}

export default ProductCards;
