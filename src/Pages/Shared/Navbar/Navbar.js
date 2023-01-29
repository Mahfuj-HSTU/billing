import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link> </li>
        <li className='font-semibold'><Link to='/billing'>Bill</Link> </li>
        {/* {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myReview'>My Review</Link> </li>
                    <li className='font-semibold'><Link to='/addServices'>Add Services</Link> </li>
                    <li className='font-semibold'>
                        <button onClick={ handleLogOut } className='btn-ghost'>Log Out</button>
                    </li>
                </> :
                <li className='font-semibold'><Link to='/login'>Login</Link> </li>
        } */}
    </>

    return (
        <div className="navbar h-16 bg-slate-300 fixed top-0 z-30 left-0 right-0 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <u tabIndex={ 0 } className="menu menu-compact dropdown-content p-2 shadow bg-base-500 rounded-box w-52">
                        { menuItems }
                    </u>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">BILLING</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    { menuItems }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
