import { combineReducers } from "redux";
import { charitiesReducer, favouriteReducer } from "./charitiesSlice";

const rootReducer = combineReducers({
  charities: charitiesReducer,
  favourite: favouriteReducer,
});

export default rootReducer;
