import React, { useState } from "react";
import { useState } from "react";
import { IMGCDN } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/CartSlice";

const RestaurantMenuCardDetails = ({ card, price, setTotalPriceFunc }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const dispatch = useDispatch();
  let charges =
    card?.card?.info?.price > 1000
      ? card?.card?.info?.price / 100
      : card?.card?.info?.price;
  let defaultPrice =
    card?.card?.info?.defaultPrice > 1000
      ? card?.card?.info?.defaultPrice / 100
      : card?.card?.info?.defaultPrice;
  let finalAmount = Math.ceil(
    charges && charges != NaN && charges > 0
      ? charges
      : defaultPrice && defaultPrice != NaN && defaultPrice > 0
      ? defaultPrice
      : null
  );
  return (
    <div className="flex justify-between shadow-sm">
      <div className="m-4 p-4 border-solid border-black">
        <div className="text-xl">{card?.card?.info?.name}</div>
        <div>{finalAmount && "₹" + finalAmount}</div>
        <div className="text-m">{card?.card?.info?.description}</div>
        <div className="text-m">
          {card?.card?.info?.ratings?.aggregatedRating?.rating &&
            "🌟" + card?.card?.info?.ratings?.aggregatedRating?.rating}
        </div>
      </div>
      <div className="m-4 p-4">
        <div>
          {numberOfItems === 0 ? (
            <button
              className="p-2 absolute shadow-sm border border-solid bg-black text-white text-sm w-14 rounded-md"
              onClick={() => {
                setNumberOfItems(numberOfItems + 1);
                setTotalPriceFunc(price + finalAmount);
                dispatch(addItem(card?.card?.info));
              }}
            >
              ADD
            </button>
          ) : (
            <div className="mx-2 flex absolute">
              <button
                className="p-2 shadow-sm border border-solid bg-black text-white text-sm w-7 rounded-md"
                onClick={() => {
                  setNumberOfItems(numberOfItems - 1);
                  setTotalPriceFunc(price - finalAmount);
                }}
              >
                -
              </button>
              <span className="text-lg text-black font-bold mx-2">
                {numberOfItems}
              </span>
              <button
                className="p-2 shadow-sm border border-solid bg-black text-white text-sm w-7 rounded-md"
                onClick={() => {
                  setNumberOfItems(numberOfItems + 1);
                  setTotalPriceFunc(price + finalAmount);
                  dispatch(addItem(card?.card?.info));
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="w-40 shadow-md border-gray-100">
          {card?.card?.info?.imageId && (
            <img src={IMGCDN + card?.card?.info?.imageId}></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCardDetails;
