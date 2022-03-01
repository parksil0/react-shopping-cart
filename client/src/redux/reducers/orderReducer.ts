import { Order, OrderDetail } from "../../types/dto";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

interface InitialState {
  loading: boolean;
  orders: Order[] | null;
  paymentProducts: OrderDetail[] | null;
  message: string | null;
}

const initialState: InitialState = {
  loading: false,
  orders: null,
  paymentProducts: null,
  message: null,
};

const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ActionType.GET_ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        orders: null,
        message: "주문목록을 불러오는데 실패하였습니다.",
      };
    case ActionType.GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case ActionType.GET_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        order: null,
        message: "주문을 불러오는데 실패하였습니다.",
      };
    case ActionType.POST_PAYMENT_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.POST_PAYMENT_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentProducts: action.payload,
      };
    case ActionType.POST_PAYMENT_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        paymentProducts: null,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
