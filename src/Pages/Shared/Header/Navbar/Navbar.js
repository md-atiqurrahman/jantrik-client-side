import { faBasketShopping, faGear, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/Navbar/logo.png';
import './Navbar.css';

const Navbar = () => {
    
    return (
        <div className='header'>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52">
                            <li><a>Home</a></li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='mt-[-14px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 uppercase mt-[9px] text-[#333333]">
                        <li className='hover:text-primary'><Link to='/'>Home</Link></li>
                        <li className='hover:text-primary'><a>Shop</a></li>
                        <li className='hover:text-primary'><a>Blogs</a></li>
                        <li className='hover:text-primary'><a>Contact Us</a></li>
                        <li className='hover:text-primary'><a>About Us</a></li>
                        <li className='hover:text-primary'><a>Login</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className=" btn-circle">
                        <FontAwesomeIcon className='text-2xl text-[#9d9d9d] hover:text-primary' icon={faGear} />
                    </button>
                    <button className="btn-circle">
                        <FontAwesomeIcon className='mt-[3px] text-2xl text-[#9d9d9d] hover:text-primary' icon={faHeart}></FontAwesomeIcon>
                    </button>
                    <button className="btn-circle">
                        <FontAwesomeIcon className='text-2xl text-[#9d9d9d] hover:text-primary' icon={faBasketShopping}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;