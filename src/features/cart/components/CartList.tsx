import React from "react";
import { CartItem } from "../components";
import { Item } from "../interfaces/cart";

type CartListProps = {
  items: Item[];
};

export const CartList: React.FC<CartListProps> = ({ items }): JSX.Element => {
  return (
    <div className="row g-3">
      {items?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
