import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "slice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    removeItem: (store) => {
      store.items.pop();
    },
    clearCart: (store) => {
      store.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
