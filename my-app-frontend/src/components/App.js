import "@picocss/pico";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home.js";
import About from "./About";
import Shop from "./containers/Shop";
export const CRUDContext = createContext(null);

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

  function findProduct(id) {
    return products.filter((product) => product.id === id);
  }

  function onCreateReview(newReview) {
    const currentProduct = findProduct(newReview.product_id)[0];
    currentProduct.reviews = [...currentProduct.reviews, newReview];
    const filteredProducts = products.map((product) => {
      if (product.id === currentProduct.id) {
        return currentProduct;
      } else return product;
    });
    setProducts(filteredProducts);
  }

  function onUpdateReview(updatedReview) {
    const currentProduct = findProduct(updatedReview.product_id)[0];
    const filteredReviews = currentProduct.reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else return review;
    });
    currentProduct.reviews = filteredReviews;
    const filteredProducts = products.map((product) => {
      if (product.id === currentProduct.id) {
        return currentProduct;
      } else return product;
    });
    setProducts(filteredProducts);
  }

  function onDeleteReview(deletedReview) {
    const currentProduct = findProduct(deletedReview.product_id)[0];
    const filteredReviews = currentProduct.reviews.filter(
      (review) => review.id !== deletedReview.id
    );
    currentProduct.reviews = filteredReviews;
    const filteredProducts = products.map((product) => {
      if (product.id === currentProduct.id) {
        return currentProduct;
      } else return product;
    });
    setProducts(filteredProducts);
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
          element={
            <CRUDContext.Provider
              value={{ onCreateReview, onDeleteReview, onUpdateReview }}
            >
              <Shop products={products} onAddProduct={onAddProduct} />{" "}
            </CRUDContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
