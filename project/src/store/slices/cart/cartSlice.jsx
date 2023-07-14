import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addNewProductToCart: (state, action) => {
      const newItem = action.payload;
      // check if item exists
      const foundItem = state.cartProducts.find(
        (product) => product.id === newItem.id
      );
      if (foundItem) {
        foundItem.quantity++;
      } else {
        // if not, add it
        state.cartProducts.push({ ...newItem, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      // state.cartProducts = action.payload;
      const removedItem = action.payload;
      const foundItem = state.cartProducts.find(
        (product) => product.id === removedItem.id
      );
      if (foundItem.quantity === 1) {
        // if it is the last item, then remove it
        state.cartProducts = [state.cartProducts].filter(
          (product) => product.id !== removedItem.id
        );
      } else {
        // if not, change its quantity
        foundItem.quantity--;
      }
    },

    deleteProductFromCart: (state, action) => {
      const deletedItemId = action.payload;
      state.cartProducts = [state.cartProducts].filter(
        (product) => product.id !== deletedItemId
      );
    },
  },
});

export const {
  addNewProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} = cartSlice.actions;
