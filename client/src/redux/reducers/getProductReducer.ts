import { Product } from '../../types/product';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

interface InitialState {
  loading: boolean;
  products: Product[] | null,
}

const initialState: InitialState = {
  loading: false,
  products: null,
};

const getProductReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data,
      };
    case ActionType.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default getProductReducer;