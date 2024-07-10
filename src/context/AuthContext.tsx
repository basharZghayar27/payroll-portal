// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, TLogin } from "../utils/types/Auth";
import { IUser } from "../utils/types/user";
import User from "../server/userService";

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async (v: TLogin) => {},
  logout: () => {},
});
const userApi = new User();
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const login = async (values: TLogin) => {
    try {
      const result = await userApi.login(values.username, values.password);
      if (result === "Login successful") {
        setCurrentUser(userApi.getCurrentUser());
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
