import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

const reducers = combineReducers({
  products: productReducer,
  carts: cartReducer,
  orders: orderReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
