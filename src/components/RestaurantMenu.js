import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./ShimmerMenu";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.JS";
import { RestaurantMenuCard } from "./RestaurantMenuCard";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isVegFiltered, setVegFiltered] = useState(false);

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
          <div className="flex mx-64 m-2">
            <div className="mx-16 my-4">Total Amount | 💰{totalPrice}</div>
            <button
              className="rounded-[7px] border bg-transparent m-2 px-3 py-2.5 font-sans text-md focus:border-2 border-solid border-blue-200 click"
              onClick={() => {
                setVegFiltered(!isVegFiltered);
              }}
            >
              {isVegFiltered ? "All" : "Veg"}
            </button>
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
