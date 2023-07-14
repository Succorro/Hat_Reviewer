import React from "react";
import { Link } from "react-router-dom";
// import Cart from "./store/Cart.js";

function Navigation() {
  return (
    <nav className="nav" aria-label="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
