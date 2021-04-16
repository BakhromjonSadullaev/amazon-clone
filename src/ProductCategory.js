import React from "react";
import "./productCategory.css";
import { useStateValue } from "./StateProvider";

const ProductCategory = ({ id, image, title, rating, price, na }) => {
  const [{ basket, wishlist }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      wished: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  console.log(wishlist);
  return (
    <div className="productCategory">
      {na && <p className="na-info">Not available</p>}
      <img src={image} alt="" />
      <p>{title}</p>
      <div className="price-ranking">
        <div className="rating-container">
          {Array(rating)
            .fill()
            .map((_, item) => (
              <p>⭐</p>
            ))}
        </div>
        <strong>$ {price}</strong>
      </div>
      <button onClick={na ? addToWishlist : addToBasket}>
        {na ? "Add to wishlist" : `Add to cart `}
      </button>
    </div>
  );
};

export default ProductCategory;
