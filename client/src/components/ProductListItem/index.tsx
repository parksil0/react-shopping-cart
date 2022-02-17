import React from "react";
import foo from "../../examples/assets/images/product.png";
import bar from "../../examples/assets/svgs/cart.svg";

const index = () => {
  return (
    <div>
      <img src={foo} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">PET보틀-정사각(420ml)</span>
          <span className="product-info__price">43,000원</span>
        </div>
        <img src={bar} alt="장바구니" />
      </div>
    </div>
  );
};

export default index;
