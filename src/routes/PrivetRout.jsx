import React, { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivetRout;
