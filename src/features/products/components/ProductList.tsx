import React from "react";
import { ProductItem } from "../components";
import { Product } from "../interfaces/product";

type ProductListProps = {
  products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
}): JSX.Element => {
  return (
    <div className="row g-3">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
