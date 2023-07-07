import "@picocss/pico";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home.js";
import About from "./About";
import Shop from "./containers/Shop";
import Cart from "./containers/Cart";

function App() {
  const [load, setLoad] = useState(false);
  const [items, setItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [currentTotal, setCurrentTotal] = useState(0);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/products")
        .then((r) => r.json())
        .then((data) => setItems(data));
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/reviews")
        .then((r) => r.json())
        .then((data) => setReviews(data));
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/carts")
        .then((r) => r.json())
        .then((data) => {
          setCartProducts(data);
          handleTotal(data);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  function handleTotal(items) {
    const mapper = items.map((product) => {
      const container = {};
      container.total = product.total;
      return container;
    });
    const reducer = mapper.reduce((total, product) => total + product.total, 0);
    setCurrentTotal(reducer);
  }

  function onUpdateCart(newProduct) {
    const updatedProduct = cartProducts.map((product) => {
      return product.id === newProduct.id ? newProduct : product;
    });
    setCartProducts(updatedProduct);
    handleTotal(updatedProduct);
  }

  function onAddToCart(newProduct) {
    setCartProducts((cartProducts) => [...cartProducts, newProduct]);
  }
  function onRemoveCart(deletedProduct) {
    setCartProducts((productsArray) =>
      productsArray.filter((product) => product.id !== deletedProduct.id)
    );
  }

  function onNewReview(newReview) {
    setReviews((reviews) => [...reviews, newReview]);
  }

  return (
    <div
      className="App"
      aria-busy={load ? false : true}
      onLoad={() => {
        setLoad(true);
      }}
    >
      <Navigation />

      <Cart
        cartProducts={cartProducts}
        onHandleUpdate={onUpdateCart}
        onRemoveCart={onRemoveCart}
        currentTotal={currentTotal}
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
              reviews={reviews}
              onNewReview={onNewReview}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
