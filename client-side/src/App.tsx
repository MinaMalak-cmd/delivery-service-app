import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Loading from "./Components/Loading/Loading";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const Login = React.lazy(() => import("./Views/Login/Login"));
const SenderDashboard = React.lazy(
  () => import("./Views/SenderDashboard/SenderDashboard")
);
const BikerTool = React.lazy(() => import("./Views/BikerTool/BikerTool"));

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute allowedRole="user" />}>
            <Route path="/sender-dashboard" element={<SenderDashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRole="biker" />}>
            <Route path="/biker-tool" element={<BikerTool />} />
          </Route>

          <Route path="*" element={<Login />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
