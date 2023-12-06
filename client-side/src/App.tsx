import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Loading from "./Components/Loading/Loading";

const Login = React.lazy(() => import('./Views/Login/Login'));
const SenderDashboard = React.lazy(() => import('./Views/SenderDashboard/SenderDashboard'));
const BikerTool = React.lazy(() => import('./Views/BikerTool/BikerTool'));

const App =() => {
  return (
    <HashRouter>
      <React.Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={true ? <Navigate to="/login" replace /> : <Login />}
          />
          <Route
            path="/sender-dashboard"
            element={true ? <SenderDashboard /> : <Navigate to="/" replace />}
          />
          <Route
            path="/biker-tool"
            element={true ? <BikerTool /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
