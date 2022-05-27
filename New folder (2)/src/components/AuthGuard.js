import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../config/ROUTES.js";
import { AuthContext } from "../context/AuthContext.js";

function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGNIN} />;
  }

  return <>{children}</>;
}

export default AuthGuard;
