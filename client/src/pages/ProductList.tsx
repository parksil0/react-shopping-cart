import React from "react";
import ProductListItem from "../components/ProductListItem";
import Layout from "../components/Layout";

const ProductList = () => {
  return (
    <Layout>
      <section className="product-container">
        <div className="product-container-row">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </div>
        <div className="product-container-row">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </div>
      </section>
    </Layout>
  );
};

export default ProductList;
