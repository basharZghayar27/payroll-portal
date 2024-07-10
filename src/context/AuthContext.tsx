// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({ isAuthenticated: true, login: () => {}, logout: () => {} });

export const AuthProvider = ({children}: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const navigate = useNavigate();

	const login = () => {
		setIsAuthenticated(true);
		navigate("/dashboard");
	};

	const logout = () => {
		setIsAuthenticated(false);
		navigate("/login");
	};

	return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
