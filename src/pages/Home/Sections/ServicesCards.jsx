import React from "react";
import plate1 from "/images/plate1.png";
import plate2 from "/images/plate2.png";
import plate3 from "/images/plate3.png";
import Button from "../../../components/Button.jsx";
const cardsData = [
  {
    title: "Simple Plate 180rs/-",
    img: plate1,
    subtitle: "Light, fresh, and fulfilling",
    bgColor: "bg-[#396d5c]",
    menuItems: [
      "Pappu",
      "Curry",
      "Rice",
      "Roti",
      "Juice",
      "Puri",
      "Curd",
      "Papad",
    ],
  },
  {
    title: "Classic Plate 250rs/-",
    subtitle: "Light, fresh, and fulfilling",
    img: plate2,
    bgColor: "bg-[#757575]",
    menuItems: [
      "Paneer",
      "Dal Fry",
      "Rice",
      "Butter Naan",
      "Juice",
      "Puri",
      "Curd",
      "Papad",
      "Sweet Lassi",
      "Puri",
      "Salad",
      "Pickle",
    ],
  },
  {
    title: "Grand Plate 350rs/-",
    subtitle: "A grand indulgence",
    img: plate3,
    bgColor: "bg-[#b98710]",
    menuItems: [
      "Biryani",
      "Korma",
      "Tandoori Roti",
      "Paneer",
      "Dal Fry",
      "Rice",
      "Butter Naan",
      "Juice",
      "Puri",
      "Curd",
      "Papad",
      "Sweet Lassi",
      "Puri",
      "Shahi Tukda",
      "Butter Naan",
      "Juice",
      "Falooda",
      "Puri",
      "Raita",
      "Gulab Jamun",
    ],
  },
];

function ServicesCards() {
  return (
    <div className="w-full  h-full lg:px-28 px-6">
      <div className="w-full h-full flex flex-col pt-20 gap-6 items-center">
        <p className="text-4xl font-medium">Our Meal Services</p>
        <p className="text-zinc-500">Pure Flavors, Perfectly Portioned</p>
      </div>

      {/* Cards Section */}
      <div className="w-full h-full lg:gap-0 gap-10 lg:flex-row flex-col flex flex-wrap justify-between my-10">
        {cardsData.map((card, index) => {
          return (
            <div
              key={index}
              className="lg:w-[26vw] w-full h-full card   shadow-md rounded-xl"
            >
              {/* Heading */}
              <div
                className={`heading lg:w-[26vw] w-full py-3 flex flex-col gap-2 rounded-t-xl justify-center items-center text-white ${card.bgColor}`}
              >
                <p className="font-semibold text-2xl">{card.title}</p>
                <p className="font-light">{card.subtitle}</p>
              </div>

              {/* Image */}
              <div className="lg:w-[26vw] py-4 w-full h-full flex justify-center items-center">
                <img
                  src={card.img}
                  alt="Meal"
                  className="lg:w-60 lg:h-60 w-60 h-60 rounded-lg"
                />
              </div>

              {/* Menu List */}
              <div className="menu-list  lg:h-full bg-pin-500   px-5   flex  justify-start gap-20   py-5   text-md font-semibold text-[#396d5c] ">
                <div className="flex flex-col flex-wrap gap-2  justify-start min-h-80 max-h-80">
                  {card?.menuItems.map((item, idx) => (
                    <li key={idx} className="lg:w-42  w-32">
                      {item}
                    </li>
                  ))}
                </div>
              </div>

              <p className="w-full text-center py-2 text-lg font-semibold text-white bg-[#396d5c]">
                Minimum 10 people
              </p>

              {/* Additional Info */}
              <div className="p-2 bg-[#f8faf9] text-[#808283] font-medium">
                <li className="mt-2">Transport Extra Charges.</li>
                <li className="mt-2">
                  Disposable Plates & Glasses, Tissues Included.
                </li>
                <li className="mt-2">
                  Service boys will be provided for above 100people order
                </li>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center  gap-4 py-3">
                <Button
                  text={"poceed now"}
                  className={"bg-[#396d5c] text-white"}
                />

                <Button className="">What's App</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesCards;
