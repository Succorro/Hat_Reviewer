import "@picocss/pico";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home.js";
import About from "./About";
import Shop from "../container/Shop";
import Cart from "../container/Cart";

function App() {
  const [load, setLoad] = useState(false);
  const [items, setItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [newProducts, setNewProduct] = useState({});
  const [newReview, setNewReview] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/categories")
        .then((r) => r.json())
        .then((data) => setItems(data));
    } catch (error) {
      alert(error);
    }
  }, [newReview]);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/cart_products")
        .then((r) => r.json())
        .then((data) => setCartProducts(data));
    } catch (error) {
      alert(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newProducts]);

  function onUpdateCart(newProduct) {
    setNewProduct(newProduct);
  }

  return (
    <div
      className="App"
      aria-busy={load ? false : true}
      onLoad={() => setLoad(true)}
    >
      <Navigation />

      <Cart
        cartProducts={cartProducts}
        onHandleUpdate={onUpdateCart}
        itemsCategory={items}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/shop"
          element={
            <Shop
              items={items}
              onUpdateCart={onUpdateCart}
              onNewReview={setNewReview}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
