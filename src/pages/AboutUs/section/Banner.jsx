import React from "react";

function Banner() {
  return (
    <div className="relative w-full h-[70vh] mt-24">
      {/* Background Image */}

      <div className="h-[70vh] w-full bg-black flex justify-center items-center">
        <img
          src="/images/aboutUs-1.jpeg"
          alt="Banner"
          className=" h-[70vh] bg-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-50 left-0 w-full h-34  bg-[#2F291F] opacity-60"></div>

      {/* Text (Separate from Overlay) */}
      <div className="absolute inset-0 bottom-18 gap-4 left-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-xl md:text-3xl font-bold">About us</h1>
        <p className="text-[#b2b5b5]">
          Authentic Pure Vantillu Mana Bramhana vantillu
        </p>
      </div>
    </div>
  );
}

export default Banner;
