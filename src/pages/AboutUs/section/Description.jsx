import React from "react";
import img from "/images/aboutUs-2.png";
function Description() {
  return (
    <div className="flex flex-col mb-20  py-10  gap-20 justify-center items-center lg:flex-row lg:px-20">
      <div className=" w-[400px] h-[250px] border border-gray-400  rounded-4xl ">
        <img src={img} className="  w-full h-full object-cover" alt="" />
      </div>
      <div className="flex  w-full flex-col lg:pr-[10vw] lg:p-0 p-10 gap-2">
        <p className="text-3xl font-semibold text-center ">About Us</p>
        <p className="text-[#5F6368] text-[20px] leading-8 w-full h-full  ">
          Welcome to Bramhana Vantillu, where tradition meets taste! We are
          dedicated to bringing you authentic, homemade delicacies that capture
          the essence of our rich culinary heritage. Every dish is crafted with
          love, using traditional recipes and premium ingredients to ensure the
          finest quality. From sweets and pickles to savory podis, our offerings
          are a celebration of flavor and culture. At Bramhana Vantillu, we take
          pride in sharing the timeless joy of homemade goodness with every
          bite.
        </p>
      </div>
    </div>
  );
}

export default Description;
