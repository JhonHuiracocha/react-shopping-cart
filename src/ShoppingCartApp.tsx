import React from "react";
import { CartProvider, ProductProvider } from "./features";
import { AppRouter } from "./router/AppRouter";

export const ShoppingCartApp: React.FC = (): JSX.Element => {
  return (
    <ProductProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ProductProvider>
  );
};
