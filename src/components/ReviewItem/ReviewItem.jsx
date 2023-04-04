import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div>
      <div className="review-item">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="review-info">
          <p>{name}</p>
          <p>
            Price : <span className="text-orange">$ {price}</span>{" "}
          </p>
          <p>
            Quantity : <span className="text-orange"> {quantity}</span>
          </p>
        </div>
        <div>
          <button className="btn-delete">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
