import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./wishlist.css";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Wishlist = () => {
  const [{ wishlist }, dispatch] = useStateValue();
  console.log("this is wishlist" + wishlist);
  return (
    <div className="wishlist">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {wishlist.length === 0 && (
        <div className="empty-wishlist">
          <h1> Your wishlist is empty</h1>
          <ShoppingBasketIcon style={{ fontSize: "15rem" }} />
        </div>
      )}
      {wishlist.map((item) => (
        <CheckoutProduct
          wsh
          id={item.id}
          image={item.image}
          title={item.title}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Wishlist;
