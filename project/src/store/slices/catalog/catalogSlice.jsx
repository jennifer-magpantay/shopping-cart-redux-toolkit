import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../services/api";

export const loadProductsData = createAsyncThunk(
  "catalog/loadProducts",
  async () => {
    const response = await api.get("/products");
    const data = response.data.map((product) => {
      const obj = { ...product, isFavourite: false };
      return obj;
    });
    return data;
  }
);

export const loadProductData = createAsyncThunk(
  "catalog/loadProduct",
  async (productId) => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalogProducts: [],
    product: [],
    favourites: [],
    isDataLoading: false,
    hasError: false,
  },
  reducers: {
    manageFavouriteItem: (state, action) => {
      const id = action.payload;
      // change prop to true
      const itemIndex = state.catalogProducts.findIndex(
        (product) => product?.id === id
      );
      state.catalogProducts[itemIndex].isFavourite = true;
      // filter the favorites
      const favouriteList = state.catalogProducts.filter(
        (product) => product.isFavourite === true
      );
      // save into state
      state.favourites = favouriteList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProductsData.pending, (state) => {
      state.isDataLoading = true;
    });
    builder.addCase(loadProductsData.fulfilled, (state, action) => {
      state.catalogProducts = action.payload;
      state.isDataLoading = false;
    });
    builder.addCase(loadProductData.pending, (state) => {
      state.product = [];
      state.isDataLoading = true;
    });
    builder.addCase(loadProductData.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isDataLoading = false;
    });
  },
});

export const { manageFavouriteItem } = catalogSlice.actions;
