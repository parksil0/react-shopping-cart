import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { requestGetCartProducts, requestGetProducts } from "../../api";

export const getProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_PRODUCTS_REQUEST });
    try {
      const products = await requestGetProducts();
      dispatch({ type: ActionType.GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error: any) {
      dispatch({ type: ActionType.GET_PRODUCTS_ERROR, payload: error.message });
    }
  };
};

export const getCartProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_CART_PRODUCTS_REQUEST });
    try {
      const cartProducts = await requestGetCartProducts();
      dispatch({
        type: ActionType.GET_CART_PRODUCTS_SUCCESS,
        payload: cartProducts,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_CART_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };
};
