import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { CartRoutes, ProductRoutes } from "../features";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="products/*" element={<ProductRoutes />} />
          <Route path="cart/*" element={<CartRoutes />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </div>
    </>
  );
};
