import React from "react";
import "./productCategory.css";
import { useStateValue } from "./StateProvider";

const ProductCategory = ({ id, image, title, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();

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

  return (
    <div className="productCategory">
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
      <button onClick={addToBasket}>Coming soon ...</button>
    </div>
  );
};

export default ProductCategory;
