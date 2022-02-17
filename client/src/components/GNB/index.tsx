import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <Link to="/">
          <h1 className="nav-title">CLEAN CODE SHOP</h1>
        </Link>
      </div>
      <div className="flex gap-15">
        <Link to="/cart">
          <button className="nav-button">장바구니</button>
        </Link>
        <Link to="/orderList">
          <button className="nav-button">주문목록</button>
        </Link>
      </div>
    </nav>
  );
};

export default index;
