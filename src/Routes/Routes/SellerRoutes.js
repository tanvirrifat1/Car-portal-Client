import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'
import useSeller from '../../Hooks/useSeller'
import Loading from '../../Pages/Home/Loading/Loading'


const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation()
    console.log(loading)
    if (loading || isSellerLoading) {
        return (
            <div className='h-screen'>
                <Loading></Loading>
            </div>
        )
    }

    if (user && isSeller) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default SellerRoutes;