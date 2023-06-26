import "@picocss/pico";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home.js";
import About from "./About";
import Shop from "../container/Shop";
import Cart from "../container/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [newProducts, setNewProduct] = useState({
    id: 9999,
    product_id: 0,
    qty: 1,
    shopping_cart_id: 1,
    product: {},
  });
  const [changedProduct, setChangedProduct] = useState({
    id: 9999,
    product_id: 1,
    qty: 1,
    shopping_cart_id: 1,
    product: {},
  });

  useEffect(() => {
    try {
      fetch("http://localhost:9090/categories")
        .then((r) => r.json())
        .then((data) => setItems(data));
    } catch (error) {
      alert(error);
    }
  }, []);
  useEffect(() => {
    try {
      fetch("http://localhost:9090/cart_products")
        .then((r) => r.json())
        .then((data) => setCartProducts(data));
    } catch (error) {
      alert(error);
    }
  }, []);

  function onAddProduct(newProduct) {
    const mapArray = items.map((item) => item.products);
    const filterArray = mapArray
      .flat(1)
      .filter((item) => item.id === newProduct.product_id);
    setNewProduct({
      id: newProduct.id,
      product_id: newProduct.product_id,
      qty: 1,
      shopping_cart_id: 1,
      product: filterArray[0],
    });
  }

  useEffect(() => {
    if (newProducts.id !== 9999) {
      setCartProducts((productsArray) => [...productsArray, newProducts]);
    } else {
      console.log("UP and Running");
    }
  }, [newProducts]);

  function onRemoveProduct(deletedProduct) {
    setCartProducts((productsArray) =>
      productsArray.filter((product) => product.id !== deletedProduct.id)
    );
  }

  function handleUpdate(updatedProduct) {
    const mapArray = items.map((item) => item.products);
    const filterArray = mapArray
      .flat(1)
      .filter((item) => item.id === updatedProduct.product_id);
    setChangedProduct({
      id: updatedProduct.id,
      product_id: updatedProduct.product_id,
      qty: updatedProduct.qty,
      shopping_cart_id: 1,
      product: filterArray[0],
    });
  }
  useEffect(() => {
    const updateProduct = cartProducts.map((product) => {
      return product.id === changedProduct.id ? changedProduct : product;
    });

    if (changedProduct.id !== 9999) {
      setCartProducts(updateProduct);
    } else {
      console.log("UP and Running");
    }
  }, [changedProduct]);

  return (
    <div className="App">
      <Navigation />
      <aside>
        <Cart
          cartProducts={cartProducts}
          onHandleUpdate={handleUpdate}
          onRemoveProduct={onRemoveProduct}
          itemsCategory={items}
        />
      </aside>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/shop"
          element={<Shop items={items} onAddProduct={onAddProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;
