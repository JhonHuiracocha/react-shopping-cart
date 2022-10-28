import { CartState, Item } from "../interfaces/cart";

type CartAction =
  | { type: "ADD_TO_CART"; payload: Item }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "ADD_QUANTITY"; payload: { id: number } }
  | { type: "SUBTRACT_QUANTITY"; payload: { id: number } }
  | { type: "CLEAN_CART" };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state?.items.filter((item) => item.id !== action.payload.id),
      };

    case "ADD_QUANTITY":
      return {
        ...state,
        items: state?.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "SUBTRACT_QUANTITY":
      return {
        ...state,
        items: state?.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity),
      };

    case "CLEAN_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};
