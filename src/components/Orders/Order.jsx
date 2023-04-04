import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const cart = useLoaderData();
  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>This is order page : {cart.length}</h2>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
