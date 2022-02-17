import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import "./examples/css/index.css";
import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderList" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
