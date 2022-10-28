import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductPage, ProductsPage } from "../pages";

export const ProductRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/:id" element={<ProductPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
