import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Mainlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
