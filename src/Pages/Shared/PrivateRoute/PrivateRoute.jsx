import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'

const PrivateRoute = () => {
    const {user} = useAuth()
    return user ? <Outlet/> : (
        <Navigate to='/register' />
    );
};

export default PrivateRoute;