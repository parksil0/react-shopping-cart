import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
