import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const charitiesSlice = createSlice({
  name: "charities",
  initialState: [],
  reducers: {
    setCharities: (state, action) => {
      return action.payload;
    },
  },
});

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: [] as any[],
  reducers: {
    setFavourite: (state, action: PayloadAction<any>) => {
      return [...state, action.payload];
    },
    removeFavourite: (state, action) => {
      return state.filter((s) => s !== action.payload);
    },
  },
});

export const { setCharities } = charitiesSlice.actions;
export const { setFavourite, removeFavourite } = favouriteSlice.actions;
export const charitiesReducer = charitiesSlice.reducer;
export const favouriteReducer = favouriteSlice.reducer;
