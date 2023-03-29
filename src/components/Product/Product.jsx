import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="products">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p className="price">Price ${price}</p>
        <p className="seller">Manufacturer :{seller}</p>
        <p className="rating">Ratings: {ratings} star</p>
      </div>
      <div className="product-btn">
        <button onClick={() => handleAddToCart(props.product)}>
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
