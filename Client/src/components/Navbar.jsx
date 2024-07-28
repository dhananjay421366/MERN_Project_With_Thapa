import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <header>
                <div className=" p-16 md:flex md:justify-between">
                    <div className="logo">
                        <NavLink to="/">Chai Aur Code</NavLink>
                    </div>
                    <nav>
                        <ul  className="md:flex gap-[20px]  list-none ">
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
            </header>
        </>
    );
}
