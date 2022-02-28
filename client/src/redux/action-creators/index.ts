import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import {
  requestDeleteCartProduct,
  requestGetCartProducts,
  requestGetProducts,
  requestPostCartProduct,
} from "../../api";
import { Product } from "../../types/dto";

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

export const postCartProduct = (product: Product, callback: () => void) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.POST_CART_PRODUCTS_REQUEST });
    try {
      await requestPostCartProduct(product);
      dispatch({ type: ActionType.POST_CART_PRODUCTS_SUCCESS });
      callback();
    } catch (error: any) {
      dispatch({
        type: ActionType.POST_CART_PRODUCTS_ERROR,
        payload: error.message,
      });
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

export const deleteCartProduct = (
  id: number,
  callback: () => void = () => {}
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.DELETE_CART_PRODUCTS_REQUEST });
    try {
      await requestDeleteCartProduct(id);
      dispatch({
        type: ActionType.DELETE_CART_PRODUCTS_SUCCESS,
      });
      callback();
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_CART_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };
};
