import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const { user, loading, errorMessage, successMessage } = useSelector(
    (slice) => slice.auth
  );
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
