import React, { useState } from "react";
import logo from "../../assets/marental.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="Header bg-zinc-900 w-full">
      <div className="max-w-[1440px] mx-auto py-6 px-10 flex justify-between">
        <div>
          <NavLink to="/">
            <img className="h-8 w-70 ml-16" src={logo} alt="MaRental logo"></img>
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <nav className="flex items-center">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              About
            </NavLink>
            <NavLink to="/property" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Property
            </NavLink>
            <NavLink to="/owner" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Owner
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Contact
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Blog
            </NavLink>

            <button className="m-4 rounded">
              <NavLink className="" to="/UserForm">
                Get Started
              </NavLink>
            </button>
          </nav>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block lg:hidden mr-0 p-2 full-rounded-2xl hover:bg-blue-700 duration-300">
          {nav ? <AiOutlineClose size={30} className="" /> : <AiOutlineMenu size={30} className="" />}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? "w-full left-0 flex justify-center text-center bg-zinc-900 top-[80px] absolute z-10" : "absolute left-[-100%]"}>
          <nav className="pb-8">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              About
            </NavLink>
            <NavLink to="/property" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Property
            </NavLink>
            <NavLink to="/owner" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Owner
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Contact
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
              Blog
            </NavLink>

            <button className="m-4 rounded">
              <NavLink className="" to="/UserForm">
                Get Started
              </NavLink>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
