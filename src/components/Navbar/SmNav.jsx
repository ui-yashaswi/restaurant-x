import React from "react";
import logo from "/images/BV-Logo.png";
import SideBar from "./SideBar";

function SmNav() {
  return (
    <div className=" w-full  bg-white h-[10vh] fixed z-50 top-0 left-0 shadow-2xl flex items-center justify-between px-10 lg:hidden ">
      <div>
        <img className=" w-full h-10 object-cover" src={logo} alt="" />
      </div>

      <SideBar />
    </div>
  );
}

export default SmNav;
