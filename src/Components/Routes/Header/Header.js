import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import { AuthContext } from '../../Context/Context.js';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>

        {
            user?.email ?
                <>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <>
                    <li className='font-bold'><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></li>

                    <li className='font-bold'><Link style={{ textDecoration: 'none' }} to='/register'>Sign Up</Link></li>
                </>
        }

    </>

    return (
        <div className="navbar container mx-auto h-24 mb-20 pt-8 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown xxl:hidden xl:hidden lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
                        <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/courses'>Courses</Link></li>
                        <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link></li>
                        <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/checkout'>Premium</Link></li>
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='h-10' src={Logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center xs:hidden md:hidden sm:hidden lg:flex">
                <ul className="py-2 menu menu-horizontal p-0">
                    <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
                    <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/courses'>Courses</Link></li>
                    <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link></li>
                    <li className='font-semibold'><Link style={{ textDecoration: 'none' }} to='/checkout'>Premium</Link></li>
                    {menuItems}
                </ul>

            </div>

        </div>
    );
};

export default Header;