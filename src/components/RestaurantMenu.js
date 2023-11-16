import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./ShimmerMenu";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.JS";
import { RestaurantMenuCard } from "./RestaurantMenuCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isVegFiltered, setVegFiltered] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  if (resInfo == null) return <ShimmerMenu />;

  const {
    name,
    areaName,
    locality,
    cuisines,
    totalRatingsString,
    avgRating,
    sla,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="flex justify-between mx-auto mt-8 p-4 w-4/6">
        <div>
          <h1 className="text-lg">
            <strong>{name}</strong>
          </h1>
          <div className="text-md my-2">
            <div>{cuisines?.join(", ")}</div>
            <div>
              {`${locality} | ${areaName} , ${sla?.deliveryTime / 10} km`}
            </div>
          </div>
        </div>
        <div className="m-2 p-4 border border-solid border-gray-400 shadow-sm rounded-lg">
          <div className="text-green-700 text-lg font-semibold">{`🌟 ${avgRating}`}</div>
          <hr />
          <div>{totalRatingsString}</div>
        </div>
      </div>

      <hr className="mx-auto w-4/6" />
      <div>
        <div>
          {totalPrice > 0 && (
            <div className="flex justify-between mx-64 m-2  bg-green-300 border-solid border-white border-2 shadow-lg text-lg font-medium font-serif">
              <div className="mx-16 my-4">
                {cartItems.length} Items |  ₹ {totalPrice}
              </div>
              <Link to="/cart">
                <div className="mx-20 my-4">View Cart 🛍️</div>
              </Link>
            </div>
          )}
          <div className="mx-80 p-4 m-2">
            <span className="text-lg font-semibold font-mono mr-2 p-2">Veg Only</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                class="w-11 h-6 peer bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-lg  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-lg after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"
                onClick={() => {
                  setVegFiltered(!isVegFiltered);
                }}
              ></div>
            </label>
          </div>
          <hr className="mx-auto my-2 w-4/6" />
          {categories?.map((x) => {
            return (
              <RestaurantMenuCard
                itemCards={x?.card?.card}
                price={totalPrice}
                setTotalPriceFunc={setTotalPrice}
                isVegFiltered={isVegFiltered}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
