import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="header-menu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/order-reviews">Order Reviews</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Lon In</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
