import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PrivetLayout } from "../layout/privet-layout/PrivetLayout";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../../context/AuthContext";
import { PublicLayout } from "../layout/public-layout/PublicLayout";
import LoginPage from "../../view/Login";
import SignUp from "../../view/SignUp";
import { routesConstant } from "../../utils/constants";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={routesConstant.public} element={<PublicLayout />}>
            <Route path={routesConstant.login} element={<LoginPage />} />
            <Route path={routesConstant.signUp} element={<SignUp />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <PrivetLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path={routesConstant.dashboard}
              element={<div>dashboard</div>}
            />
            <Route
              path={routesConstant.employees}
              element={<div>employees</div>}
            />
            <Route
              path={routesConstant.salaries}
              element={<div>salaries</div>}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
