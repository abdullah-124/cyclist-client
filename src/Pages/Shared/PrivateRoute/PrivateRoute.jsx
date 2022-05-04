import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'

const PrivateRoute = () => {
    const {user} = useAuth()
    const location = useLocation()
    return user ? <Outlet/> : (
        <Navigate to='/login'  state={{from: location}} />
    );
};

export default PrivateRoute;