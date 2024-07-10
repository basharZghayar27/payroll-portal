// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TLogin } from "../types/Auth";

const AuthContext = createContext({ isAuthenticated: false, login: (v: TLogin) => {}, logout: () => {} });

export const AuthProvider = ({children}: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	const login = async (values: TLogin) => {
		try{
			/** 
			 * Here the backend api call for auth login and this should be performed in the login store: 
			 * The call will be like: 
			 * const response = await fetch("backend/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const res = await response.json();
      if (res.data) {
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
			* NOTE: The system should have a class to configure the api calls and have an instances in the stores
			* or in any place we need to call the APIs
			*/

			/**
			 * Will use this condition for the log in
			*/
			if (values.username && values.password) {
				setIsAuthenticated(true);
				navigate("/dashboard");
			}
		} catch (err) {
      console.error(err);
    }
	};

	const logout = () => {
		setIsAuthenticated(false);
		navigate("/public/login");
	};

	return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
