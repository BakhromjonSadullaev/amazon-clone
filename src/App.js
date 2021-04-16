import React, { useEffect } from "react";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Footer from "./Footer";
import CategoryProduct from "./CategoryProduct";
import Wishlist from "./Wishlist";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51IewvQAwlfYokIYSQooQlNNzG6iLJ8slOnopSZ9n1XTQUuhlCkpjUiiySSXDzZIqMRoyYGcWO6za1t2Iwp3zLIsN007T9AxLDK"
);

function App() {
  const [{ category }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`THIS USER IS -->  ${authUser}`);

      if (authUser) {
        // User just signed in or was signed before
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User Logged Out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  console.log(category);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/wishlist">
            <Header />
            <Wishlist />
          </Route>
          <Route path={`/${category.route}`}>
            <Header />
            <CategoryProduct />
            <Footer />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
