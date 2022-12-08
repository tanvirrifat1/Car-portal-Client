import React, { useContext } from 'react';
import { FaAccusoft } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';



const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    console.log(isSeller)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li className='font-bold'><Link to='/dasboard'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li className='font-bold'><Link to='/dasboard/allusers'>All Users</Link></li>
                            </>
                        }


                        {
                            isSeller && <>
                                <li className='font-bold'><Link to='/dasboard/allproducts'> Add products</Link></li>
                                <li className='font-bold'><Link to='/dasboard/manageProduct'>Manage Products</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
