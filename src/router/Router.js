import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Example from "../pages/example";
import { ROUTER_PATHS } from "../constants";

const Router = () => (
  <Routes>
    <Route path={ROUTER_PATHS.Home} element={<Home />} />
    <Route path={ROUTER_PATHS.Example} element={<Example />} />
    <Route path="*" element={<Navigate to={ROUTER_PATHS.Home} />} />
  </Routes>
);

export default Router;
