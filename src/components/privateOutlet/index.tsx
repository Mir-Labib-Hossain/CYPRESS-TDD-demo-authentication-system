import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateOutlet: React.FC = () => {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateOutlet;
