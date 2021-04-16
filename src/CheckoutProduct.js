import React from "react";
import "./checkoutProduct.css";

import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, noBtn, wsh }) => {
  const [{ basket, userInfo }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const removeFromWishlist = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!noBtn && (
          <button onClick={wsh ? removeFromWishlist : removeFromBasket}>
            Remove from {wsh ? "Wishlist" : "Basket"}{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
