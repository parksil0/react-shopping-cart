import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { ActionType } from "./../action-types/index";
import { getCartProducts } from ".";
import { cartProducts } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { rest } from "msw";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});

beforeEach(() => (store = mockStore({})));

test("장바구니 목록 불러오기 성공 시 상품 목록을 불러온다.", async () => {
  await store.dispatch(getCartProducts() as any);
  const actions = store.getActions();

  const expectedAction = {
    type: ActionType.GET_CART_PRODUCTS_SUCCESS,
    payload: cartProducts,
  };

  expect(actions[1]).toEqual(expectedAction);
});

test("장바구니 목록 불러오기 실패 시 에러를 호출한다.", async () => {
  server.use(
    rest.get("http://localhost:3003/carts", (_, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({ message: "Internal Server Error" })
      );
    })
  );

  await store.dispatch(getCartProducts() as any);
  const actions = store.getActions();

  const expectedAction = {
    type: ActionType.GET_CART_PRODUCTS_ERROR,
    payload: "Request failed with status code 500",
  };

  expect(actions[1]).toEqual(expectedAction);
});
