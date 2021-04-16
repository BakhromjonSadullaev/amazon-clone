import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user, wishlist }, dispatch] = useStateValue();

  const handleAuthentification = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header top">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="location">
        <div className="location-icon">
          <LocationOnIcon style={{ fontSize: "medium" }} />
        </div>

        <div>
          <p>Deliver to</p>
          <h3>Uzbekistan</h3>
        </div>
      </div>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentification} className="header-option">
            <span className="header-option-lineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-option-lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="wishlist">
          <div className="header-option">
            <span className="header-option-lineOne">
              Products{" "}
              {wishlist.length > 0 && (
                <strong className="wish-num"> {wishlist.length}</strong>
              )}
            </span>
            <span className="header-option-lineTwo">Wishlist</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-option-lineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
