import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../services/api";

export const loadProductsData = createAsyncThunk(
  "catalog/loadProducts",
  async () => {
    const response = await api.get("/products");
    return response.data;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalogProducts: [],
    isDataLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProductsData.pending, (state) => {
      state.isDataLoading = true;
    });
    builder.addCase(loadProductsData.fulfilled, (state, action) => {
      state.catalogProducts = action.payload;
      state.isDataLoading = false;
    });
  },
});
