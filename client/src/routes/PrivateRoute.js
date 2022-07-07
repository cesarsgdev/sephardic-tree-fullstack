import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isExpired, setIsExpired] = useState(false);
  if (token) {
    const decoded = jwt_decode(token);
    // console.log(decoded);
    // console.log(Date.now());
    // console.log(Date.now() < decoded.exp * 1000);

    if (Date.now() >= decoded.exp * 1000) {
      localStorage.removeItem("token");
      // navigate("/login", { replace: true });
      setIsExpired(true);
    }
  }
  if (!token || isExpired) return <Navigate to="/login"></Navigate>;
  return <>{children}</>;
};

export default PrivateRoute;
