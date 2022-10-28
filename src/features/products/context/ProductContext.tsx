import React from "react";
import { Product } from "../interfaces/product";

export type ProductContextProps = {
  products: Product[];
  getProduct: (id: number) => Product | null;
};

export const ProductContext: React.Context<ProductContextProps> =
  React.createContext({} as ProductContextProps);
