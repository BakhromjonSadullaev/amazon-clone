import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user, userInfo }, dispatch] = useStateValue();
  console.log(userInfo);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout-title">{user?.email} Your shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
