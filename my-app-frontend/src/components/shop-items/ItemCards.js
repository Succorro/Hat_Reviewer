import React from "react";

function ItemCards({ item }) {
  const { name, image_url, products } = item;
  // console.log(products);
  return (
    <div className="characterCard">
      {image_url ? null : <img src={{ image_url }} alt={`type of hat`} />}

      <li style={{ listStyleType: "none" }}>
        <h3>{name}</h3>
        {/* <h4>
          {products.map((product) => {
            return <p>{product.name}</p>;
          })}
        </h4> */}
      </li>
    </div>
  );
}

export default ItemCards;
