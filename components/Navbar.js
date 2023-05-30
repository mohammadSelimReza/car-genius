import React from "react";
import webLogo from "../components/assets/logo.svg";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import Link from "next/link";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="blog">Blog</Link>
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 h-24 mt-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img src={webLogo.src} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="mx-3 text-3xl">
            <BiShoppingBag />
          </div>
          <div className="mx-4 text-3xl">
            <BiSearch />
          </div>

          <button className="btn btn-outline btn-success mx-2">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
