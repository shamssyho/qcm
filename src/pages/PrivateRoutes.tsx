import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../services/AuthProvider';


interface PrivateRouteProps {
    element: React.ComponentType;
    roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, roles }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || !roles.includes(user.role)) {
        return <Navigate to="/unauthorized" state={{ from: location }} />;
    }

    return <Component />;
};

export default PrivateRoute;