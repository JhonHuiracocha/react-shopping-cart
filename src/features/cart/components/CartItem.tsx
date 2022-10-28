import React, { useContext, useMemo } from "react";
import { Product } from "../../../features";
import { CartContext, CartContextProps } from "../context";
import { Item } from "../interfaces/cart";

type CartItemProps = {
  item: Item;
};

export const CartItem: React.FC<CartItemProps> = ({ item }): JSX.Element => {
  const { removeFromCart, addQuantity, subtractQuantity, getItem } =
    useContext<CartContextProps>(CartContext);

  const product: Product | null = useMemo(() => getItem(item.id), [item.id]);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="card-img-top"
          style={{ height: "16rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product?.name}</h5>
          <p>${product?.price}</p>

          <div className="d-flex">
            <button
              onClick={() => addQuantity(item.id)}
              className="btn btn-dark"
            >
              <i className="bi bi-plus"></i>
            </button>
            <button className="btn btn-outline-dark" disabled>
              {item.quantity}
            </button>
            <button
              onClick={() => subtractQuantity(item.id)}
              className="btn btn-dark"
            >
              <i className="bi bi-dash"></i>
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-danger ms-3"
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
