import React from "react";
import logo from "/images/BV-Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-24 bg-white shadow-2xl text-black fixed top-0 z-10 hidden lg:flex items-center justify-between px-28">
      <div className=" flex">
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-10 items-center justify-center font-semibold tracking-tight">
        <Link to={"/"}>Home</Link>
        <div>Meal Services</div>
        <div>Gallery</div>
        <div>Blog</div>
        <Link to={"/about"}>About us</Link>
        <Link to={"/login"}>Admin</Link>

        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
