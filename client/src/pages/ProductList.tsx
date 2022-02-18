import React, { useEffect } from "react";
import ProductListItem from "../components/ProductListItem";
import Layout from "../components/Layout";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Product } from "../types/product";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

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
        <InfiniteScroll
          dataLength={products?.products?.length || 12}
          next={getProducts}
          hasMore
          loader={
            <>
              <br />
              <div>loading...</div>
            </>
          }
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          {products?.products?.map((product: Product, index: number) => (
            <ProductListItem
              key={`${product.id}-${index}`}
              product={product}
              onClickCartIcon={() => onClickCartIcon(product.id)}
            />
          ))}
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default ProductList;
