import { useState } from "react";
import RestaurantMenuCardDetails from "./RestaurantMenuCardDetails";

export const RestaurantMenuCard = ({
  itemCards,
  price,
  setTotalPriceFunc,
  isVegFiltered,
}) => {
  const [isCollapsed, collapse] = useState(false);
  const data = isVegFiltered
    ? itemCards?.itemCards?.filter(
        (x) => x?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      )
    : itemCards?.itemCards;
  return (
    data.length && (
      <div>
        <div
          className="flex justify-between mx-auto mt-8 p-4 shadow-2xl w-4/6 text-lg"
          onClick={() => {
            collapse(!isCollapsed);
          }}
        >
          <div className="font-bold font-serif">
            {itemCards?.title} ({data?.length})
          </div>
          <span className="font-extrabold text-black text-2xl">{"↕"}</span>
        </div>
        {isCollapsed && (
          <div className="justify-between mx-auto p-4 shadow-lg w-4/6 font-serif text-lg">
            {data?.map((x) => {
              return (
                <RestaurantMenuCardDetails
                  card={x}
                  price={price}
                  setTotalPriceFunc={setTotalPriceFunc}
                />
              );
            })}
          </div>
        )}
      </div>
    )
  );
};
