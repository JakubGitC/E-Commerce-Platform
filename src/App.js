import React from "react";
import "./App.css";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/index.tsx";
import Home from "./modules/Home/index.tsx";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product/index.tsx";
import Products from "./modules/Products/index.tsx";
import CategoryProducts from "./modules/CategoryProducts/index.tsx";
import Cart from "./modules/Cart/index.tsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
