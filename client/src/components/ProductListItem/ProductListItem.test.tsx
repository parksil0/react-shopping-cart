import { fireEvent, render, screen } from "@testing-library/react";
import ProductListItem from "./index";

const mockNavigation = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigation,
}));

it("장바구니 버튼 클릭 시 장바구니 페이지로 이동한다.", () => {
  render(
    <ProductListItem
      product={{
        id: 1,
        name: "냉면용기(대)",
        price: 83700,
        imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
      }}
    />
  );

  const cartIcon = screen.getByRole("button", {
    name: /cart-icon/i,
  });

  fireEvent.click(cartIcon);

  expect(mockNavigation).toBeCalled();
  expect(mockNavigation).toBeCalledWith("/cart");
});
