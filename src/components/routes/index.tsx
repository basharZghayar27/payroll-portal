import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PrivetLayout } from "../layout/privet-layout/PrivetLayout";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../../context/AuthContext";
import { PublicLayout } from "../layout/public-layout/PublicLayout";
import LoginPage from "../../view/Login";
import SignUp from "../../view/SignUp";
import { routesConstant } from "../../utils/constants";
import { Provider } from "react-redux";
import store from "../../store";
import Dashboard from "../../view/Dashboard";
import Employees from "../../view/employees/Employees";
import SalariesPage from "../../view/salaries/Salaries";

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path={routesConstant.public} element={<PublicLayout />}>
						<Route path={routesConstant.login} element={<LoginPage />} />
						<Route path={routesConstant.signUp} element={<SignUp />} />
					</Route>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Provider store={store}>
									<PrivetLayout />
								</Provider>
							</ProtectedRoute>
						}
					>
						<Route path={routesConstant.dashboard} element={<Dashboard />} />
						<Route path={routesConstant.employees} element={<Employees />} />
						<Route path={routesConstant.salaries} element={<SalariesPage />} />
					</Route>
				</Routes>
			</AuthProvider>
		</Router>
	);
};
export default AppRoutes;
