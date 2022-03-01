import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import {
  requestDeleteCartProduct,
  requestGetCartProducts,
  requestGetOrder,
  requestGetOrders,
  requestGetProducts,
  requestPostCartProduct,
  requestPostOrderDetails,
} from "../../api";
import { OrderDetail, Product } from "../../types/dto";

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

export const getOrders = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_ORDERS_REQUEST });
    try {
      const orders = await requestGetOrders();
      dispatch({ type: ActionType.GET_ORDERS_SUCCESS, payload: orders });
    } catch (error: any) {
      dispatch({ type: ActionType.GET_ORDERS_ERROR, payload: error.message });
    }
  };
};

export const getOrder = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_ORDER_REQUEST });
    try {
      const order = await requestGetOrder(id);
      dispatch({ type: ActionType.GET_ORDER_SUCCESS, payload: order });
    } catch (error: any) {
      dispatch({ type: ActionType.GET_ORDER_ERROR, payload: error.message });
    }
  };
};

export const postPaymentProducts = (
  paymentProducts: OrderDetail[],
  callback: () => void
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.POST_PAYMENT_PRODUCTS_REQUEST });
    if (paymentProducts) {
      dispatch({
        type: ActionType.POST_PAYMENT_PRODUCTS_SUCCESS,
        payload: paymentProducts,
      });
      callback();
    } else {
      dispatch({
        type: ActionType.POST_PAYMENT_PRODUCTS_ERROR,
        payload: "해당 삼품이 존재하지 않습니다.",
      });
    }
  };
};

export const postOrderDetails = (
  orderDetails: OrderDetail[],
  callback: () => void
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.POST_ORDER_DETAILS_REQUEST });
    try {
      await requestPostOrderDetails(orderDetails);
      dispatch({
        type: ActionType.POST_ORDER_DETAILS_SUCCESS,
      });
      callback();
    } catch (e: any) {
      dispatch({
        type: ActionType.POST_ORDER_DETAILS_ERROR,
        payload: e.message,
      });
    }
  };
};
