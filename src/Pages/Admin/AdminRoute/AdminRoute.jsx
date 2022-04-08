
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'


const AdminRoute = () => {
    const {user, admin} = useAuth()
    console.log(user,admin)
    
    return user.email && admin ? <Outlet/> : (
        <Navigate to='/dashboard' />
    );
};

export default AdminRoute;