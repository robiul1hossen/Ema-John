import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;
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
        {" "}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
