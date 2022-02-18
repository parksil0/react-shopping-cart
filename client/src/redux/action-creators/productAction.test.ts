import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setupServer } from 'msw/node';

import { ActionType } from './../action-types/index';
import { getProducts } from '.';
import { Product } from '../../types/product';
import { rest } from 'msw';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});

const products: Product[] = [
  {
    "id": 1,
    "name": "냉면용기(대)",
    "price": 83700,
    "imageUrl": "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg"
  },
  {
    "id": 2,
    "name": "생새우살 (71/90) 500g 4개",
    "price": 29000,
    "imageUrl": "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg"
  }
]

const server = setupServer(
  rest.get('http://localhost:3003/products', (_, res, ctx) => {
    return res(ctx.json(products))
  }),
);

beforeAll(() => server.listen());

beforeEach(() => store = mockStore({})) // 매 번 테스트마다 스토어 초기화

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('상품 목록 불러오기 성공 시 상품 목록을 불러온다.', async () => {
  await store.dispatch(getProducts() as any);
  const actions = store.getActions();

  const expectedAction = {
    type: ActionType.GET_PRODUCTS_SUCCESS,
    payload: products,
  }

  expect(actions[1]).toEqual(expectedAction);
});

test('상품 목록 불러오기 실패 시 에러를 호출한다.', async () => {
  server.use(
    rest.get('http://localhost:3003/products', (_, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }))
    }),
  )

  await store.dispatch(getProducts() as any);
  const actions = store.getActions();

  const expectedAction = {
    type: ActionType.GET_PRODUCTS_ERROR,
    payload: 'Request failed with status code 500',
  }

  expect(actions[1]).toEqual(expectedAction);
})