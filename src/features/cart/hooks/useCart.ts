import { useReducer, useContext, useEffect } from "react";
import {
  Product,
  ProductContext,
  ProductContextProps,
} from "../../../features";
import { CartContextProps, cartReducer } from "../context";
import { Item, CartState } from "../interfaces/cart";

const INITIAL_STATE: CartState = {
  items: [],
};

const init = (): CartState => {
  const items: Item[] = JSON.parse(localStorage.getItem("items") || "");

  return {
    items,
  };
};

export const useCart = (): CartContextProps => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE, init);
  const { products } = useContext<ProductContextProps>(ProductContext);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartState.items));
  }, [cartState.items]);

  const addToCart = (item: Item): void => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id: number): void => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const addQuantity = (id: number): void => {
    dispatch({ type: "ADD_QUANTITY", payload: { id } });
  };

  const subtractQuantity = (id: number): void => {
    dispatch({ type: "SUBTRACT_QUANTITY", payload: { id } });
  };

  const cleanCart = (): void => {
    dispatch({ type: "CLEAN_CART" });
  };

  const doesItemExistInCart = (itemId: number): boolean => {
    return cartState?.items.some((item) => item.id === itemId);
  };

  const getItem = (itemId: number): Product | null => {
    return products?.find((product) => product.id === itemId) || null;
  };

  const getTotalPrice = (): number => {
    return cartState?.items.reduce(
      (acc, item) =>
        acc +
        item.quantity *
          (products?.find((product) => product.id === item.id)?.price || 0),
      0
    );
  };

  return {
    cartState,
    cartItemCount: cartState?.items.length || 0,
    addToCart,
    removeFromCart,
    addQuantity,
    subtractQuantity,
    cleanCart,
    doesItemExistInCart,
    getItem,
    getTotalPrice,
  };
};
