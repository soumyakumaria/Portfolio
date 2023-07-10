import React from "react";
import Regular from "../views/all-home-version/Regular";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/regular" element={<Regular />} />
        <Route path="*" element={<Regular />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
