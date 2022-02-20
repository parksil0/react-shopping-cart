import { JSXElementConstructor, ReactElement } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import GNB from "./index";

const renderWithRouter = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { route = "/" } = {}
) => {
  window.history.pushState({}, "", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("타이틀 클릭 시 장바구니 메인 페이지로 이동한다.", async () => {
  const history = createMemoryHistory({ initialEntries: ["/cart"] });
  renderWithRouter(<GNB />);

  const cartButton = screen.getByText("CLEAN CODE SHOP");

  expect(history.location.pathname).toBe("/cart");
  fireEvent.click(cartButton);
  setTimeout(() => {
    expect(history.location.pathname).toBe("/");
  }, 500);
});

test("장바구니 버튼 클릭 시 장바구니 페이지로 이동한다.", async () => {
  const history = createMemoryHistory();
  renderWithRouter(<GNB />);

  const cartButton = screen.getByText("장바구니");

  expect(history.location.pathname).toBe("/");
  fireEvent.click(cartButton);
  setTimeout(() => {
    expect(history.location.pathname).toBe("/cart");
  }, 500);
});

test("주문목록 버튼 클릭 시 주문목록 페이지로 이동한다.", async () => {
  const history = createMemoryHistory();
  renderWithRouter(<GNB />);

  const cartButton = screen.getByText("장바구니");

  expect(history.location.pathname).toBe("/");
  fireEvent.click(cartButton);
  setTimeout(() => {
    expect(history.location.pathname).toBe("/orderList");
  }, 500);
});
