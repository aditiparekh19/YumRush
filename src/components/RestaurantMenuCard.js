import { useState } from "react";

export const RestaurantMenuCard = ({ info, price, setTotalPriceFunc }) => {
  console.log(info);
  const [numberOfItems, setNumberOfItems] = useState(0);

  let charges = info?.price > 1000 ? info?.price / 100 : info?.price;
  var finalAmount = Math.ceil(
    charges != NaN && charges != null ? charges : info?.defaultPrice / 100
  );
  return (
    <>
      <div className="res-menu">
        <div className="res-menu-details">
          <div className="res-menu-name">
            <div>
              <b>{info?.name} </b>
            </div>
            <div>{finalAmount ? "💸" + finalAmount : finalAmount}</div>
          </div>
          <div className="res-menu-buttons">
            {numberOfItems == 0 ? (
              <button
                className="btn-menu-cart"
                onClick={() => {
                  setNumberOfItems(numberOfItems + 1);
                  setTotalPriceFunc(price + finalAmount);
                }}
              >
                {numberOfItems == 0 ? "ADD +" : numberOfItems}
              </button>
            ) : (
              <>
                <button
                  className="add-delete-btn"
                  onClick={() => {
                    setNumberOfItems(numberOfItems - 1);
                    setTotalPriceFunc(price - finalAmount);
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: "15px" }}>{numberOfItems}</span>
                <button
                  className="add-delete-btn"
                  onClick={() => {
                    setNumberOfItems(numberOfItems + 1);
                    setTotalPriceFunc(price + finalAmount);
                  }}
                >
                  +
                </button>
              </>
            )}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
