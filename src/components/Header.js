import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/Constants";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="dark bg-white shadow-2xl p-4">
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-20 ml-16 mr-4" src={LOGO}></img>
          <div className="text-amber-950 text-lg font-medium my-6 hover:text-amber-800">
            <Link to="/">YumRush</Link>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/search"
            className="text-amber-950 text-lg font-medium m-6 hover:text-amber-800"
          >
            🔍Search
          </Link>
          <Link
            to="/offers"
            className="text-amber-950 text-lg font-medium m-6 hover:text-amber-800"
          >
            🤑Offers
          </Link>
          <Link
            to="/cart"
            className="text-amber-950 text-lg font-medium m-6 hover:text-amber-800"
          >
            {cartItems.length === 0 ? "🛍️Cart" : `🛍️Cart (${cartItems.length})`}
          </Link>
          <Link
            to="/help"
            className="text-amber-950 text-lg font-medium m-6 hover:text-amber-800"
          >
            🔑Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
