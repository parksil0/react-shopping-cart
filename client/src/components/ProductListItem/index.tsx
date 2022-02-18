import React from "react";
import cartIcon from "../../examples/assets/svgs/cart.svg";
import { Product } from "../../types/product";

interface ProductListProps {
  product: Product;
  onClickCartIcon: (id: number) => void;
}

const ProductList = ({ product, onClickCartIcon }: ProductListProps) => {
  return (
    <div>
      <img
        src={product.imageUrl}
        width="283"
        height="283"
        alt="PET보틀-정사각(420ml)"
      />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{product.price}원</span>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => onClickCartIcon(product.id)}
        >
          <img src={cartIcon} alt="장바구니" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
