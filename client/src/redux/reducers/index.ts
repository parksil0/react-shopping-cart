import { combineReducers } from "redux";
import getProductReducer from "./getProductReducer";

const reducers = combineReducers({
  products: getProductReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;