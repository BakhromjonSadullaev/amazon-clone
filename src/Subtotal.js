import React from "react";
import "./subtotal.css";
import { useStateValue } from "./StateProvider";

import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button
        onClick={(e) =>
          basket.length > 0
            ? user && history.push("/payment")
            : alert("Please sign in or add some products")
        }
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
