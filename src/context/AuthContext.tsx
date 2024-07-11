// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, TLogin, TSignUp } from "../utils/types/Auth";
import User from "../server/userService";
import { routesConstant } from "../utils/constants";
import { message } from "antd";

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async (v: TLogin) => {},
  signUp: async (v: TSignUp) => {},
  logout: () => {},
});
const userApi = new User();
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | undefined| null>(null);

  const navigate = useNavigate();

  const login = async (values: TLogin) => {
    try {
      const result = await userApi.login(values.username, values.password);
      if (result === "Login successful") {
        setCurrentUser(userApi.getCurrentUser());				
        setIsAuthenticated(true);
				message.success(`Welcome back ${currentUser}`, 2);
        navigate(routesConstant.dashboard);
      } else {
				message.error(result, 2);
      }
    } catch (err) {
			console.error(err);
    }
  };
	
  const signUp = async (values: TSignUp) => {
		try {
			const result = await userApi.createAccount(
				values.username,
        values.password
      );
      if (result === "Account created successfully") {
				message.success(result, 2);
        navigate(routesConstant.login);
      } else {
        message.error("Account already exist! Login instead", 2, () =>
          navigate(routesConstant.login)
        );
      }
    } catch (err) {
      message.error("Something went wrong", 2);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate(routesConstant.login);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
