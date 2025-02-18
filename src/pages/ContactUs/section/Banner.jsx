import React from "react";

function Banner() {
  return (
    <div>
      <div className="relative w-full lg:h-[70vh] lg:mt-24">
        {/* Background Image */}

        <div className="lg:h-[70vh] h-[40vh] w-full bg-black flex justify-center items-center">
          <img
            src="/images/contact-bnr.jpeg"
            alt="Banner"
            className=" lg:h-[70vh] h-[40vh] w-full bg-center bg-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute lg:top-50 left-0 w-full lg:h-34 h-38 top-20 bg-[#2F291F] opacity-60"></div>

        {/* Text (Separate from Overlay) */}
        <div className="absolute inset-0 lg:bottom-18 bottom-10 gap-4 left-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-xl md:text-3xl font-bold">
            Contact us
          </h1>
          <p className="text-[#b2b5b5]">
            Please Send Message For More Information
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
