import { Cart, Product } from "../../types/dto";
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
  | DeleteCartProductsErrorAction;
