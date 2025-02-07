import React from "react";
import block1 from "/images/block1.jpg";
import block2 from "/images/block2.jpg";
import block3 from "/images/block3.jpg";
const Latestblogs = () => {
  return (
    <div className="mb-20">
      <div className="w-full h-full flex flex-col justify-center gap-2 items-center">
        <h1 className="text-3xl font-semibold">Latest Blogs</h1>
        <p className="text-gray-500 font-lg">
          Discover Delicious New Recipes Every Day
        </p>
      </div>
      <div className="flex lg:flex-row flex-col w-full gap-8 h-full justify-center lg:px-28 px-10 pt-9">
        {[
          {
            img: block1,
            title: "Pure Veg Catering for 1500 Guests, Made Perfect",
            btn: "Read more",
          },
          {
            img: block2,
            title: "Serving 1500 Guests with Authentic Vegetarian Flavors",
            btn: "Read more",
          },
          {
            img: block3,
            title: "Pure Veg Meals, Made at Brahmana Vantillu",
            btn: "Read more",
          },
        ].map((item, idx) => (
          <div className="flex flex-col gap-2">
            <div className="lg:w-[27vw] h-[27vh]   ">
              <img
                className="w-full h-full object-cover rounded-lg bg-auto   "
                src={item.img}
                alt="image"
              />
            </div>
            <p className="text-[#203D34] font-semibold">{item.title}</p>
            <p className="border text-[#203d34] rounded-md text-center text-lg border-[#203D34] font-semibold p-2">
              {item.btn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestblogs;
