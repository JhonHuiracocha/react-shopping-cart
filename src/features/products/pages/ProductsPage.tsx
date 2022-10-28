import React, { useContext } from "react";
import { ProductList } from "../components";
import { ProductContext, ProductContextProps } from "../context";

export const ProductsPage: React.FC = (): JSX.Element => {
  const { products } = useContext<ProductContextProps>(ProductContext);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
