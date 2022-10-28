import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CartPage } from "../pages/CartPage";

export const CartRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<CartPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
