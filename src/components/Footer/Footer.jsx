import React from "react";
import { GoLocation } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "/images/BV-Logo.png";
const Footer = () => {
  return (
    <footer className="py-12 lg:px-28 px-10 lg:flex hidden flex-col  bg-[rgb(60,60,61)] text-white ">
      <div className="flex items-start justify-between">
        <div className="left">
          <img src={logo} alt="" />
          <div className=" mt-10 textcontent flex flex-col items-start text-lg justify-start gap-4 ">
            <div className="flex items-center gap-2 justify-center ">
              <GoLocation />
              <h1>Road No.60 Ayyappa Society,Mega Hills, Hyd</h1>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <FaPhone />
              <h1 className=" text-nowrap">
                Dedicated Helpline (IST 9:00am to 6:00pm):{" "}
                <span className=" font-semibold ">8333923733</span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <GoMail />
              <h1>Info@Citychefs@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="flex items-center mb-8 justify-start">
            <input
              type="email"
              className="h-10 pl-4 border rounded-l-lg bg-white border-none text-black lg:w-[28vw]"
              placeholder="Your Email Address"
            />
            <button className="px-5 rounded-r-lg text-white bg-[#376D5C] h-10 ">
              subscribe
            </button>
          </div>
          <div className="textcontent flex items-center justify-center  gap-20 ">
            <div className="flex items-start  gap-2 flex-col justify-start ">
              <h1 className="text-lg font-semibold">INFORMATION</h1>
              <h1>Customer Service</h1>
              <h1>F.A.Q'S</h1>
            </div>
            <div className="flex items-start gap-2 flex-col   ">
              <h1 className="text-lg font-semibold">CATERING</h1>
              <h1>Hyderabad</h1>
              <h1>Secundrabad</h1>
              <h1>Object tracking</h1>
            </div>
            <div className="flex items-start gap-2 flex-col   ">
              <h1 className="text-lg font-semibold">IMPORTANT LINKS</h1>
              <h1>Refund policy</h1>
              <h1>Shipping policy</h1>
              <h1>Privacy policy</h1>
            </div>
          </div>

          <div className="flex gap-20 items-center my-12 justify-start">
            <h2>Follow us</h2>
            <div className="flex gap-4 items-center justify-center text-xl">
              <AiFillInstagram className="text-pink-600" />
              <FaFacebook className="text-blue-300" />
              <FaTwitter className="text-blue-400" />
              <FaYoutube className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
