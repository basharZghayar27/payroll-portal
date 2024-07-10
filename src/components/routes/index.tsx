import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PrivetLayout } from "../layout/privet-layout/PrivetLayout";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../../context/AuthContext";
import { PublicLayout } from "../layout/public-layout/PublicLayout";
import LoginPage from "../../view/Login";

const AppRoutes = () => {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path='/public' element={<PublicLayout />}>
						<Route path='/public/login' element={<LoginPage />} />
						<Route path='/public/sign-up' element={<div>logout</div>} />
					</Route>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<PrivetLayout />
							</ProtectedRoute>
						}
					>
						<Route path='dashboard' element={<div>dashboard</div>} />
						<Route path='employees' element={<div>employees</div>} />
						<Route path='salaries' element={<div>salaries</div>} />
					</Route>
				</Routes>
			</AuthProvider>
		</Router>
	);
};
export default AppRoutes;
