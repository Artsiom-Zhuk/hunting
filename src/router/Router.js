import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Gallery from "../pages/gallery";
import { ROUTER_PATHS } from "../constants";

const Router = () => (
  <Routes>
    <Route path={ROUTER_PATHS.Home} element={<Home />} />
    <Route path={ROUTER_PATHS.Gallery} element={<Gallery />} />
    <Route path="*" element={<Navigate to={ROUTER_PATHS.Home} />} />
  </Routes>
);

export default Router;
