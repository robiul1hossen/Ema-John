import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Shipping :${totalShipping}</p>
      <p>Tax : ${tax}</p>
      <h6>Grand Total : ${totalPrice + totalShipping + tax}</h6>
      <button onClick={handleClearCart} className="clear-cart-btn">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
