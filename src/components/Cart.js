import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import { getFinalAmount } from "../utils/util";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  let total = 0;

  return cartItems?.length > 0 ? (
    <>
      <div className="flex justify-center">
        <button
          className="w-1/12 p-4 my-6 text-center border-solid border-white bg-black text-white rounded-md shadow-lg font-serif font-medium"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </div>
      <div>
        {cartItems.map((x) => {
          let finalAmount = getFinalAmount(x);
          total = total + finalAmount;
          return (
            <div className="flex justify-between w-1/2 m-auto p-4 shadow-sm">
              <div className="text-xl">{x?.card?.info?.name}</div>
              <div className="text-m">{finalAmount && "₹ " + finalAmount}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-1/2 m-auto p-4 text-lg shadow-xl font-bold">
        <div>Total Amount</div>
        <div>₹ {total}</div>
      </div>
    </>
  ) : (
    <div className="w-3/12 m-auto p-4 text-lg shadow-xl font-bold text-center my-16">Cart feels empty!</div>
  );
};

export default Cart;
