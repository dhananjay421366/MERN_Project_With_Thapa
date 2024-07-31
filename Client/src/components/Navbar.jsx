import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FaServicestack } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { FaRegistered } from "react-icons/fa";
export default function Navbar() {
    return (
        <>
            {/* <header>
                <div classNameName=" p-16 md:flex md:justify-between">
                    <div classNameName="logo">
                        <NavLink to="/">Chai Aur Code</NavLink>
                    </div>
                    <nav>
                        <ul  classNameName="md:flex gap-[20px]  list-none ">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header> */}

            <nav  className="flex flex-row justify-between m-10 md:px-20 lg:px-20 ">
                <div className="nav-logo">
                    <NavLink to="/"> Nimbalkar Dhananajay </NavLink>
                </div>
                <ul className="flex float-right justify-center items-center ">
                    <li className="hidden sm:flex mx-2">
                        <NavLink className="text-decoration-none" id="home" to="/">Home</NavLink>
                    </li>
                    <li className="sm:hidden mx-2">
                        <NavLink className="text-decoration-none" to="/"><IoMdHome/></NavLink>
                    </li>
                    <li className="hidden sm:flex mx-2">
                        <NavLink className="text-decoration-none" to="/about">About</NavLink>
                    </li>
                    <li className="sm:hidden mx-2">
                        <NavLink className="text-decoration-none" to="/about">
                         <FcAbout/>
                        </NavLink>
                    </li>
                    <li className="hidden sm:flex mx-2">
                        <NavLink className="text-decoration-none" to="/service">Services</NavLink>
                    </li>
                    <li className="sm:hidden mx-2">
                        <NavLink className="text-decoration-none" to="/service">
                           <FaServicestack/>
                        </NavLink>
                    </li>
                    <li className="hidden sm:flex mx-2">
                        <NavLink className="text-decoration-none" to="/contact">Contact</NavLink>
                    </li>
                    <li className="sm:hidden mx-2">
                        <NavLink className="text-decoration-none" to="/contact">
                            <IoMdContact/>
                        </NavLink>
                    </li>
                    <li className="hidden mx-2 sm:flex">
                        <NavLink className="text-decoration-none" to="/register">Register</NavLink>
                    </li>
                    <li className="mx-2 sm:hidden">
                        <NavLink className="text-decoration-none" to="/register">
                        <FaRegistered/>
                        </NavLink>
                    </li>
                    <li className="hidden mx-2 sm:flex">
                        <NavLink className="text-decoration-none" to="/login">Login</NavLink>
                    </li>
                    <li className="mx-2 sm:hidden">
                        <NavLink className="text-decoration-none" to="/login">
                        <IoLogIn/>
                        </NavLink>
                    </li>
                 
                   
    
                </ul>
            </nav>
        </>
    );
}
