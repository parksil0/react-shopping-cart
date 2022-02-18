import React, { useEffect } from "react";
import ProductListItem from "../components/ProductListItem";
import Layout from "../components/Layout";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const { getProducts } = useActions();
  const products = useSelector((state: RootState) => state.products);

  const navigation = useNavigate();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onClickCartIcon = (id: number) => {
    navigation("/cart");
  };

  return (
    <Layout>
      <section className="product-container">
        {products?.products?.map((product: Product) => (
          <ProductListItem
            key={product.id}
            product={product}
            onClickCartIcon={() => onClickCartIcon(product.id)}
          />
        ))}
      </section>
    </Layout>
  );
};

export default ProductList;
