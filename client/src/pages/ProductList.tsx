import React, { useEffect } from "react";
import ProductListItem from "../components/ProductListItem";
import Layout from "../components/Layout";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Product } from "../types/product";

const ProductList = () => {
  const { getProducts } = useActions();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Layout>
      <section className="product-container">
        {products?.products?.map((product: Product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </section>
    </Layout>
  );
};

export default ProductList;
