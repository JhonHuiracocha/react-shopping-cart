import React from "react";
import { Product } from "../../../features";
import { Item, CartState } from "../interfaces/cart";

export type CartContextProps = {
  cartState: CartState;
  cartItemCount: number;
  addToCart: (cartItem: Item) => void;
  removeFromCart: (id: number) => void;
  addQuantity: (id: number) => void;
  subtractQuantity: (id: number) => void;
  cleanCart: () => void;
  doesItemExistInCart: (itemId: number) => boolean;
  getItem: (itemId: number) => Product | null;
  getTotalPrice: () => number;
};

export const CartContext: React.Context<CartContextProps> = React.createContext(
  {} as CartContextProps
);
