import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'
import useAdmin from '../../Hooks/useAdmin'
import Loading from '../../Pages/Home/Loading/Loading'


const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()
    console.log(loading)
    if (loading || isAdminLoading) {
        return (
            <div className='h-screen'>
                <Loading></Loading>
            </div>
        )
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default AdminRoutes;
