import React from "react";
import { CartContext } from "../context";
import { useCart } from "../hooks/useCart";

type CartProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
}): JSX.Element => {
  const {
    cartState,
    cartItemCount,
    addToCart,
    removeFromCart,
    addQuantity,
    subtractQuantity,
    cleanCart,
    doesItemExistInCart,
    getItem,
    getTotalPrice,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartItemCount,
        addToCart,
        removeFromCart,
        addQuantity,
        subtractQuantity,
        cleanCart,
        doesItemExistInCart,
        getItem,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
