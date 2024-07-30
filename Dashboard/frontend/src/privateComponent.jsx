import React from "react";
import { Outlet, Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//const navigate = useNavigate();
const PrivateComponent = () => {
    
    const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateComponent;
