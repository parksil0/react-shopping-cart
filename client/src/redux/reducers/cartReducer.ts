import { Cart } from "../../types/dto";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

interface InitialState {
  loading: boolean;
  products: Cart[] | null;
  message: string | null;
}

const initialState: InitialState = {
  loading: false,
  products: null,
  message: null,
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_CART_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_CART_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ActionType.GET_CART_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        products: null,
        message: "상품을 불러오는데 실패하였습니다.",
      };
    case ActionType.POST_CART_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.POST_CART_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.POST_CART_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        message: "요청에 실패하였습니다.",
      };
    case ActionType.DELETE_CART_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.DELETE_CART_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // products: action.payload,
      };
    case ActionType.DELETE_CART_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        message: "삭제하는데 실패하였습니다.",
      };
    default:
      return state;
  }
};

export default cartReducer;
