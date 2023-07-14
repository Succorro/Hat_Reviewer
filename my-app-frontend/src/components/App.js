import "@picocss/pico";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home.js";
import About from "./About";
import Shop from "./containers/Shop";

function App() {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/products")
        .then((r) => r.json())
        .then((data) => setProducts(data));
    } catch (error) {
      alert(error);
    }
  }, []);

  function onAddProduct(newProduct) {
    setProducts((currentProducts) => [...currentProducts, newProduct]);
  }

  return (
    <div
      className="App"
      class="container"
      aria-busy={load ? false : true}
      onLoad={() => {
        setLoad(true);
      }}
    >
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/shop"
          element={<Shop products={products} onAddProduct={onAddProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;
