import React from "react";
import { LuMapPin } from "react-icons/lu";
import BV from "/images/BV-Logo.png";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import FormData from "./FormData.jsx";
import { MdOutlineMail } from "react-icons/md";

const Booking = () => {
  return (
    <div className="flex h-full flex-col w-full py-20">
      <div className="w-full  flex lg:flex-row flex-col justify-evenly gap-10 px-6 lg:py-0 py-10">
        <div className="flex flex-col justify-center  order-2 lg:order-1">
          <img className=" lg:w-[400px] w-[300px]" src={BV} alt="Logo" />
          <div className="flex flex-col gap-4 py-6 justify-center ">
            <p className="text-black text-xl font-bold">Address</p>
            <div className="flex items-center gap-2">
              <LuMapPin className="text-green-700 size-5 " />
              <p className="text-gray-600 lg:text-xl text-md font-semibold">
                Road No.60 Ayyapa Society, Mega Hills, Hyd
              </p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-700 size-5" />
              <p className="lg:text-xl  text-md "> Dedicated Helpine</p>
              <p className="text-gray-500 lg:text-xl text-md">
                (IST 9:00am to 6:00pm)
              </p>
              <p className="lg:text-xl text-md text-black font-semibold">
                : 8333923733
              </p>
            </div>{" "}
            <div className="flex gap-2 items-center">
              <MdOutlineMail className="text-green-700 size-5" />
              <p className="lg:text-xl text-md">Info@Citychefs@gmail.com</p>
            </div>
          </div>
          <p className="text-black text-xl font-bold"> Opening Hours</p>
          <div className="flex gap-2   items-center py-2">
            <IoMdTime className="text-green-700 size-6" />
            <p className="lg:text-xl text-md text-gray-600  font-semibold">
              {" "}
              Monday-sunday 24/7
            </p>
          </div>
        </div>
        <div className="flex flex-col order-1 lg:order-2 ">
          <FormData />
        </div>
      </div>
    </div>
  );
};

export default Booking;
