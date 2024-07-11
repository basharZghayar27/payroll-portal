import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { routesConstant } from '../../utils/constants';

const ProtectedRoute = ({children} : any) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={routesConstant.login} replace />;
  }

  return children;
};

export default ProtectedRoute;
