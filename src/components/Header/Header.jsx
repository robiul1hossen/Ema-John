import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="header-menu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Lon In</Link>
        <Link to="/sign-up">Sign up</Link>
        {user && (
          <span className="text-white">
            welcome to {user.email}
            <button onClick={handleSignOut}> Log Out </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
