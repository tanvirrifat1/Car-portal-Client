import React, { useContext } from 'react';
import { FaCarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.warning('LogOut Successfully', { autoClose: 500 }) })
            .catch(err => console.error(err))
    }


    const menuItems = <>
        <li className='font-bold text-black'><Link to='/'>Home</Link></li>
        <li className='font-bold text-black'><Link to='/blog'>Blog</Link></li>
        {/* <li className='font-bold text-black'><Link to=''></Link></li> */}
        {user?.uid ?
            <>
                <li className='font-bold text-black'><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            :
            <li className='font-bold text-black'><Link to='/login'>Login</Link></li>
        }
        {user?.photoURL ?
            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                src={user?.photoURL} alt=""></img>
            :
            <></>
        }
    </>

    return (

        <div>
            <div className="navbar flex justify-between bg-secondary text-primary-content mt-4 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold hover:text-3xl">Car <FaCarAlt className='ml-2 text-3xl text-black'></FaCarAlt></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                </label>
            </div>
        </div>

    );
};

export default Navbar;