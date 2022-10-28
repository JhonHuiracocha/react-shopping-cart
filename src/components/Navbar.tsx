import React from "react";
import { Link } from "react-router-dom";
import { CartContext, CartContextProps } from "../features";
import { useContext } from "react";

export const Navbar: React.FC = (): JSX.Element => {
  const { cartItemCount } = useContext<CartContextProps>(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Shopping <i className="bi bi-bag-fill"></i>
        </Link>
        <Link to="cart">
          {!cartItemCount ? (
            <button className="btn btn-light">
              <i className="bi bi-cart"></i>
            </button>
          ) : (
            <button className="btn btn-light position-relative">
              <i className="bi bi-cart-fill"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemCount}
              </span>
            </button>
          )}
        </Link>
      </div>
    </nav>
  );
};
