import { createSlice } from "@reduxjs/toolkit";

/**
 * 
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ], 
    "quantity": 1,
    "subtotal": 0
  },
 */

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalCartProducts: 0,
    isCartModalDisplayed: false,
  },
  reducers: {
    addNewProductToCart: (state, action) => {
      const newItem = action.payload;
      // check if item exists
      const foundItem = state.cartProducts.find(
        (product) => product.id === newItem.id
      );
      if (foundItem) {
        // if yes, then change quantity and subtotal
        foundItem.quantity++;
        foundItem.subtotal = foundItem.subtotal + newItem.price;
      } else {
        // if not, add it wih quantity and subtotal new props
        state.cartProducts.push({
          ...newItem,
          quantity: 1,
          subtotal: newItem.price,
        });
      }
      // also, update total of products on cart
      state.totalCartProducts++;
    },
    removeProductFromCart: (state, action) => {
      //const removedItem = action.payload;
      const { id, quantity, price } = action.payload;
      const foundItem = state.cartProducts.find((product) => product.id === id);
      if (foundItem.quantity === 1) {
        // if it is the last item, then remove it
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== id
        );
        foundItem.quantity = foundItem.quantity - quantity;
      } else {
        foundItem.quantity--;
        foundItem.subtotal = foundItem.subtotal - price;
      }
      state.totalCartProducts--;
    },
    deleteProductFromCart: (state, action) => {
      //const deletedItem = action.payload;
      const { id, quantity } = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== id
      );
      state.totalCartProducts = state.totalCartProducts - quantity;
    },
    manageCartModalDisplay: (state) => {
      state.isCartModalDisplayed = !state.isCartModalDisplayed;
    },
  },
});

export const {
  addNewProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  manageCartModalDisplay,
} = cartSlice.actions;
