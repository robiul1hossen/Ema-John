import React from "react";
import { useLocation } from "react-router-dom";

const Inventory = () => {
  const location = useLocation();
  return (
    <div>
      <h2>inventory page</h2>
    </div>
  );
};

export default Inventory;
