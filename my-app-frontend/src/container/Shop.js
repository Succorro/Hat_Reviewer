import React, { useState, useEffect } from "react";
import Category from "../components/shop-items/Category";
import Products from "../components/shop-items/Products";

function Shop({ items }) {
  return (
    <>
      <Category items={items} />
      <Products items={items} />
    </>
  );
}

export default Shop;
