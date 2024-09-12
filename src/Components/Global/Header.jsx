import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Hook/useAuth';


const Header = () => {
  const { logOut, user } = useAuth();
  // console.log(user?.photoURL);
  
  return (
    <>
      <div className="px-8 py-1 bg-gray-100 text-gray-800">
        <div className="flex items-center mx-auto container justify-center gap-5 py-2 text-sm font-medium">
          <div>
            <span>Get up to 50% off your first order + free shipping,&nbsp;</span>
            <a href="#" rel="noopener noreferrer" className="underline">sign up</a>today!
          </div>
          <a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex text-[#d17f34]">
            <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
              <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
            </svg>
            <span className="hover:underline focus-visible:underline">Gift Cards</span>
          </a>
        </div>
      </div>

      <nav className="navbar bg-base-100 container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base">
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"shop"}>Shop</Link></li>
              <li><Link to={"about"}>About Us</Link></li>
              <li><Link to={"contact"}>Contact Us</Link></li>
            </ul>
          </div>
          <Link to={"/"} className=' w-20 md:w-32  '>
            <img className='w-full' src="logo.png" alt="" />

          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base ">
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-semibold " : "text-gray-500 font-semibold"} to={"/"}>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-semibold " : "text-gray-500 font-semibold"} to={"shop"}>Shop</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-semibold " : "text-gray-500 font-semibold"} to={"about"}>About Us</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-black font-semibold " : "text-gray-500 font-semibold"} to={"contact"}>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>

          {
            user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img
                        alt="profile"
                        src={user?.photoURL}
                      />
                    ) : (
                      <h2 className="text-2xl uppercase">{user?.email[0]}</h2>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <Link to={"/dashboard"} className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li><div onClick={() => logOut()} to={"/"}>Logout</div></li>
                </ul>
              </div>
            ) : (
              <Link to={"/signin"} className="btn btn-neutral ">
                Sign In
              </Link>
            )
          }

        </div>
      </nav>
    </>
  );
};

export default Header;  