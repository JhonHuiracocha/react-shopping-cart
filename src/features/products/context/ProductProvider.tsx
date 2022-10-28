import React from "react";
import { ProductContext, ProductContextProps } from "../context";
import { useProducts } from "../hooks/useProducts";

type ProductProvider = {
  children: JSX.Element | JSX.Element[];
};

export const ProductProvider: React.FC<ProductProvider> = ({
  children,
}): JSX.Element => {
  const { products, getProduct }: ProductContextProps = useProducts();

  return (
    <ProductContext.Provider value={{ products, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
