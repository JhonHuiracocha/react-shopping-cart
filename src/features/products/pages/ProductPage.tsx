import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context";
import { Product } from "../interfaces/product";
import { useState } from "react";

export const ProductPage: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { getProduct } = useContext(ProductContext);

  useEffect(() => {
    if (id) {
      const product: Product | null = getProduct(Number(id));
      setProduct(product);
    }
  }, [id]);

  return (
    <>
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

          <span>
            Back to{" "}
            <Link to="/" className="link-dark text-decoration-none">
              {" "}
              <b>Home</b>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
