import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartList } from "../components";
import { CartContextProps, CartContext } from "../context";

export const CartPage: React.FC = (): JSX.Element => {
  const { cartState, cleanCart, getTotalPrice } =
    useContext<CartContextProps>(CartContext);

  const totalPrice: number = getTotalPrice();

  return (
    <>
      {!cartState?.items.length ? (
        <>
          <p className="text-center">
            The cart is empty, click here to return to{" "}
            <Link to="/" className="link-dark text-decoration-none">
              <b>Home</b>
            </Link>
          </p>
        </>
      ) : (
        <>
          <CartList items={cartState?.items} />

          <h6 className="my-3">Total: ${totalPrice}</h6>
          <button
            onClick={() => cleanCart()}
            className="btn btn-danger ms-auto"
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </>
      )}
    </>
  );
};
