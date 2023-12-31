import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/logo1.png'
import { AuthContext } from '../providers/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => console.log(err))
    }
    // console.log(user);
    return (
        <div className="navbar sticky z-40 bg-[#f0f6f0] top-0 h-[100px] justify-between">
            <div className="flex justify-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/alltoys"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            All Toys
                        </NavLink>
                        {user && <>
                            <NavLink
                                to="/myToys"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500" : ""
                                }
                            >
                                My Toys
                            </NavLink>
                            <NavLink
                                to="/addToys"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500" : ""
                                }
                            >
                                Add Toys
                            </NavLink>
                        </>}
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Blog
                        </NavLink>
                        {
                            user && user ? <NavLink onClick={handleLogOut}
                            >
                                LogOut
                            </NavLink> : <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500" : ""
                                }
                            >
                                Login
                            </NavLink>
                        }
                    </ul>
                </div>
                <Link to='/' className='flex gap-2 items-center text-xl font-bold'>
                    <img className='w-16' src={logo} alt="" />
                    <p>Toy's Finder </p>
                </Link>
            </div>
            <div className="navbar-center hidden ml-56 lg:flex">
                <ul className="menu menu-horizontal items-center space-x-8 px-1 ">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/alltoys"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        All Toys
                    </NavLink>
                    {user && <>
                        <NavLink
                            to="/myToys"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            My Toys
                        </NavLink>
                        <NavLink
                            to="/addToys"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Add Toys
                        </NavLink>
                    </>}
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        Blog
                    </NavLink>
                    {
                        user && user ? <NavLink className='bg-green-400 rounded-lg text-white font-bold flex gap-1 hover:bg-green-500 transition-all items-center  p-2' onClick={handleLogOut}
                        >
                            <span>LogOut</span> <FaSignOutAlt></FaSignOutAlt>
                        </NavLink> : <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : ""
                            }
                        >
                            Login
                        </NavLink>
                    }


                </ul>
            </div>
            <div className="w-10 rounded-full ml-12 lg:ml-80 navbar-end">
                <img className='rounded-full w-10' title={user?.displayName} src={user?.photoURL} />
            </div>

        </div>
    );
};

export default Navbar;