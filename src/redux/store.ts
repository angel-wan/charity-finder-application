import { configureStore } from "@reduxjs/toolkit";
import { charitiesReducer, favouriteReducer } from "./charitiesSlice";

const store = configureStore({
  reducer: {
    charities: charitiesReducer,
    favourite: favouriteReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
