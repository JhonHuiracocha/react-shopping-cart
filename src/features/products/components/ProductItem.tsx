import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartContextProps, Item } from "../../../features";
import { Product } from "../interfaces/product";

type ProductItemProps = {
  product: Product;
};

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
}): JSX.Element => {
  const { addToCart, removeFromCart, doesItemExistInCart } =
    useContext<CartContextProps>(CartContext);

  const itemExists: boolean = doesItemExistInCart(product.id);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card-img-top"
          style={{ height: "16rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <Link
            to={`/products/${product.id}`}
            className="link-dark text-decoration-none"
          >
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <p>${product.price}</p>

          {!itemExists ? (
            <button
              className="btn btn-dark"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              <i className="bi bi-cart-plus"></i>
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(product.id)}
            >
              <i className="bi bi-cart-dash"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
