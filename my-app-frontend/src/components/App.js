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
  const [currentTotal, setCurrentTotal] = useState(0);

  useEffect(() => {
    try {
      fetch("http://localhost:9090/products")
        .then((r) => r.json())
        .then((data) => setItems(data));
    } catch (error) {
      alert(error);
    }
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

  function handleTotal(newItems) {
    const mapper = newItems.map((product) => {
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
    const newArray = [...cartProducts, newProduct];
    setCartProducts(newArray);
    handleTotal(newArray);
  }
  function onRemoveCart(deletedProduct) {
    const newArray = cartProducts.filter(
      (product) => product.id !== deletedProduct.id
    );
    setCartProducts(newArray);
    handleTotal(newArray);
  }

  function onNewReview(newReview) {
    const filterProduct = items.filter(
      (product) => product.id === newReview.product_id
    );
    const updatedReview = {
      ...filterProduct[0],
      reviews: [...filterProduct[0].reviews, newReview],
    };
    const updatedItems = items.map((product) => {
      return product.id === filterProduct[0].id ? updatedReview : product;
    });
    setItems(updatedItems);
  }

  function onAddProduct(newProduct) {
    console.log(newProduct);
    setItems((currentProducts) => [...currentProducts, newProduct]);
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
              onNewReview={onNewReview}
              onAddToCart={onAddToCart}
              onAddProduct={onAddProduct}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
