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
      store.items.length = 0;
    },
    clearCart: (store) => {
      store.items.pop();
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
