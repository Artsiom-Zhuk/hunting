import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Example from "../pages/Example";
import { ROUTER_PATHS } from "../constants";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTER_PATHS.Home} element={<Home />} />
      <Route path={ROUTER_PATHS.Example} element={<Example />} />
      <Route path="*" element={<Navigate to={ROUTER_PATHS.Home} />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
