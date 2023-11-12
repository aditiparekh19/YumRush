import { useState } from "react";
import { IMGCDN } from "../utils/Constants";

export const RestaurantMenuCard = ({ itemCards, price, setTotalPriceFunc }) => {
  // const [numberOfItems, setNumberOfItems] = useState(0);
  const [isCollapsed, collapse] = useState(false);

  // let charges = info?.price > 1000 ? info?.price / 100 : info?.price;
  // var finalAmount = Math.ceil(
  //   charges != NaN && charges != null ? charges : info?.defaultPrice / 100
  // );
  return (
    <>
      <div
        className="flex justify-between mx-auto mt-8 p-4 shadow-2xl w-4/6 text-lg"
        onClick={() => {
          collapse(!isCollapsed);
        }}
      >
        <div className="font-bold font-serif">{itemCards?.title}</div>
        <span className="font-extrabold text-black text-2xl">{"↕"}</span>
      </div>
      {isCollapsed && (
        <div className="justify-between mx-auto p-4 shadow-lg w-4/6 font-serif text-lg border-b-2 border-gray-100">
          {itemCards?.itemCards?.map((x) => {
            return (
              <div className="flex justify-between shadow-sm">
                <div className="m-4 p-4">
                  <div className="text-xl">{x?.card?.info?.name}</div>
                  <div>
                    {"₹" + x?.card?.info?.price / 100 ??
                      x?.card?.defaultPrice / 100}
                  </div>
                  <div className="text-m">{x?.card?.info?.description}</div>
                </div>
                <img src={IMGCDN + x?.card?.info?.imageId} className="w-40 m-4 p-4 drop-shadow-sm"></img>
              </div>
            );
          })}
        </div>
      )}
    </>

    // <>
    //   <div className="res-menu">
    //     <div className="res-menu-details">
    //       <div className="res-menu-name">
    //         <div>
    //           <b>{info?.name} </b>
    //         </div>
    //         <div>{finalAmount ? "💸" + finalAmount : finalAmount}</div>
    //       </div>
    //       <div className="res-menu-buttons">
    //         {numberOfItems == 0 ? (
    //           <button
    //             className="btn-menu-cart"
    //             onClick={() => {
    //               setNumberOfItems(numberOfItems + 1);
    //               setTotalPriceFunc(price + finalAmount);
    //             }}
    //           >
    //             {numberOfItems == 0 ? "ADD +" : numberOfItems}
    //           </button>
    //         ) : (
    //           <>
    //             <button
    //               className="add-delete-btn"
    //               onClick={() => {
    //                 setNumberOfItems(numberOfItems - 1);
    //                 setTotalPriceFunc(price - finalAmount);
    //               }}
    //             >
    //               -
    //             </button>
    //             <span style={{ fontSize: "15px" }}>{numberOfItems}</span>
    //             <button
    //               className="add-delete-btn"
    //               onClick={() => {
    //                 setNumberOfItems(numberOfItems + 1);
    //                 setTotalPriceFunc(price + finalAmount);
    //               }}
    //             >
    //               +
    //             </button>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //     <hr />
    //   </div>
    // </>
  );
};
