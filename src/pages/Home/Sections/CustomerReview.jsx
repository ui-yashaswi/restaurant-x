import React from "react";
import customer1 from "/images/customer-1.png";
import { MdStarRate } from "react-icons/md";

const Customer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-28 px-10 py-12">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-semibold">Our Happy Customers</h1>
        <p className="text-gray-400 text-lg">What our Customers Are Saying</p>
      </div>

      <div className="flex lg:flex-row flex-col justify-between w-full pt-6">
        {[
          {
            title: "Sri Kavya",
            img: customer1,
            subheading:
              "The Purest ghee sweets I've ever tasted! Every bite brings back fond memories of traditional celebrations.....",
          },
          {
            title: "Prasanth",
            img: customer1,
            subheading:
              "The Purest ghee sweets I've ever tasted! Every bite brings back fond memories of traditional celebrations.....",
          },
          {
            title: "Manasa",
            img: customer1,
            subheading:
              "The Purest ghee sweets I've ever tasted! Every bite brings back fond memories of traditional celebrations.....",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-full lg:w-[27vw] border border-gray-50 shadow-xl  pt-6  rounded-md  px-4 h-[29vh] flex flex-col"
          >
            {/* Profile Section */}
            <div className="flex gap-4 items-center">
              <img className="size-12 rounded-full" src={item.img} alt="" />
              <p className="text-2xl font-semibold">{item.title}</p>
            </div>

            <div className="flex text-amber-400 gap-1 text-2xl my-2">
              {[...Array(5)].map((_, i) => (
                <MdStarRate key={i} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-[#5f6368]">{item.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
