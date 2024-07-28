import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            {/* <header>
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
            </header> */}

            <nav  class="flex flex-row justify-between lg:m-10 mt-10">
                <div class="nav-logo">
                    <NavLink to="/"> Nimbalkar Dhananajay </NavLink>
                </div>
                <ul class="flex float-right justify-center items-center ">
                    <li class="hidden sm:flex mx-2">
                        <NavLink class="text-decoration-none" id="home" to="/">Home</NavLink>
                    </li>
                    <li class="sm:hidden mx-2">
                        <NavLink class="text-decoration-none" to="/"><svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                        </svg></NavLink>
                    </li>
                    <li class="hidden sm:flex mx-2">
                        <NavLink class="text-decoration-none" to="/about">About</NavLink>
                    </li>
                    <li class="sm:hidden mx-2">
                        <NavLink class="text-decoration-none" to="/about">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24" data-testid="DeveloperBoardSharpIcon">
                                <path
                                    d="M22 9V7h-2V3H2v18h18v-4h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z">
                                </path>
                            </svg>
                        </NavLink>
                    </li>
                    <li class="hidden sm:flex mx-2">
                        <NavLink class="text-decoration-none" to="/service">Services</NavLink>
                    </li>
                    <li class="sm:hidden mx-2">
                        <NavLink class="text-decoration-none" to="/service">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24" data-testid="CodeIcon">
                                <path
                                    d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z">
                                </path>
                            </svg>
                        </NavLink>
                    </li>
                    <li class="hidden sm:flex mx-2">
                        <NavLink class="text-decoration-none" to="/contact">Contact</NavLink>
                    </li>
                    <li class="sm:hidden mx-2">
                        <NavLink class="text-decoration-none" to="/contact">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24" data-testid="RememberMeIcon">
                                <path
                                    d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21z">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </NavLink>
                    </li>
                    <li class="hidden mx-2 sm:flex">
                        <NavLink class="text-decoration-none" to="/register">Register</NavLink>
                    </li>
                    <li class="mx-2 sm:hidden">
                        <NavLink class="text-decoration-none" to="/register"><svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon">
                            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg></NavLink>
                    </li>
                    <li class="hidden mx-2 sm:flex">
                        <NavLink class="text-decoration-none" to="/login">Login</NavLink>
                    </li>
                    <li class="mx-2 sm:hidden">
                        <NavLink class="text-decoration-none" to="/login"><svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon">
                            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg></NavLink>
                    </li>
                 
                   
    
                </ul>
            </nav>
        </>
    );
}
