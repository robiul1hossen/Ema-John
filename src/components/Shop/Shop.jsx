import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} key={product.id} handleCart={addToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>order summary</h4>
        <p>Selected Item: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
