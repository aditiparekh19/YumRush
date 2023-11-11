import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { IMGCDN } from "../utils/Constants";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.JS";
import { RestaurantMenuCard } from "./RestaurantMenuCard";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  if (resInfo == null) return <Shimmer />;

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
      <div className="res-info-header">
        <div className="res-info-tabs">
          <h1>
            <strong>{name}</strong>
          </h1>
          <div className="res-info-left">
            <div>{cuisines?.join(", ")}</div>
            <div>
              {`${locality} | ${areaName} , ${sla?.deliveryTime / 10} km`}
            </div>
          </div>
        </div>
        <div className="res-info-right">
          <div
            style={{ color: "darkgreen", fontSize: "large" }}
          >{`🌟 ${avgRating}`}</div>
          <hr />
          <div>{totalRatingsString}</div>
        </div>
      </div>

      <hr className="hr" />
      <div className="res-info">
        <div className="res-menu-card">
          <div className="total-price-card">Total Amount | 💰{totalPrice}</div>
          {resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (x) => {
              return (
                <RestaurantMenuCard
                  info={x?.card?.info}
                  price={totalPrice}
                  setTotalPriceFunc={setTotalPrice}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
