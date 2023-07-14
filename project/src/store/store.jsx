import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart/cartSlice";
import { catalogSlice } from "./slices/catalog/catalogSlice";

export const store = configureStore({
  reducer: {
    // add slices.reducer here
    cart: cartSlice.reducer,
    catalog: catalogSlice.reducer,
  },
});
