import { Cart, Order, OrderDetail, Product } from "../../types/dto";
import { ActionType } from "../action-types";

export interface GetProductsRequestAction {
  type: ActionType.GET_PRODUCTS_REQUEST;
}
export interface GetProductsSuccessAction {
  type: ActionType.GET_PRODUCTS_SUCCESS;
  payload: Product[];
}
export interface GetProductsErrorAction {
  type: ActionType.GET_PRODUCTS_ERROR;
  payload: string | null;
}

export interface PostCartProductsRequestAction {
  type: ActionType.POST_CART_PRODUCTS_REQUEST;
}
export interface PostCartProductsSuccessAction {
  type: ActionType.POST_CART_PRODUCTS_SUCCESS;
}
export interface PostCartProductsErrorAction {
  type: ActionType.POST_CART_PRODUCTS_ERROR;
  payload: string | null;
}

export interface GetCartProductsRequestAction {
  type: ActionType.GET_CART_PRODUCTS_REQUEST;
}
export interface GetCartProductsSuccessAction {
  type: ActionType.GET_CART_PRODUCTS_SUCCESS;
  payload: Cart[];
}
export interface GetCartProductsErrorAction {
  type: ActionType.GET_CART_PRODUCTS_ERROR;
  payload: string | null;
}

export interface DeleteCartProductsRequestAction {
  type: ActionType.DELETE_CART_PRODUCTS_REQUEST;
}
export interface DeleteCartProductsSuccessAction {
  type: ActionType.DELETE_CART_PRODUCTS_SUCCESS;
}
export interface DeleteCartProductsErrorAction {
  type: ActionType.DELETE_CART_PRODUCTS_ERROR;
  payload: string | null;
}

export interface GetOrdersRequestAction {
  type: ActionType.GET_ORDERS_REQUEST;
}
export interface GetOrdersSuccessAction {
  type: ActionType.GET_ORDERS_SUCCESS;
  payload: Order[];
}
export interface GetOrdersErrorAction {
  type: ActionType.GET_ORDERS_ERROR;
  payload: string | null;
}

export interface GetOrderRequestAction {
  type: ActionType.GET_ORDER_REQUEST;
}
export interface GetOrderSuccessAction {
  type: ActionType.GET_ORDER_SUCCESS;
  payload: Order;
}
export interface GetOrderErrorAction {
  type: ActionType.GET_ORDER_ERROR;
  payload: string | null;
}

export interface PostPaymentProductsRequestAction {
  type: ActionType.POST_PAYMENT_PRODUCTS_REQUEST;
}
export interface PostPaymentProductsSuccessAction {
  type: ActionType.POST_PAYMENT_PRODUCTS_SUCCESS;
  payload: OrderDetail[];
}
export interface PostPaymentProductsErrorAction {
  type: ActionType.POST_PAYMENT_PRODUCTS_ERROR;
  payload: string | null;
}

export type Action =
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsErrorAction
  | PostCartProductsRequestAction
  | PostCartProductsSuccessAction
  | PostCartProductsErrorAction
  | GetCartProductsRequestAction
  | GetCartProductsSuccessAction
  | GetCartProductsErrorAction
  | DeleteCartProductsRequestAction
  | DeleteCartProductsSuccessAction
  | DeleteCartProductsErrorAction
  | GetOrdersRequestAction
  | GetOrdersSuccessAction
  | GetOrdersErrorAction
  | GetOrderRequestAction
  | GetOrderSuccessAction
  | GetOrderErrorAction
  | PostPaymentProductsRequestAction
  | PostPaymentProductsSuccessAction
  | PostPaymentProductsErrorAction;
