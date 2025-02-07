import React from "react";
import plate1 from "/images/plate1.png";
import plate2 from "/images/plate2.png";
import plate3 from "/images/plate3.png";

const cardsData = [
  {
    title: "Sample Plate 180rs/-",
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
    title: "Premium Plate 250rs/-",
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
    title: "Royal Plate 350rs/-",
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
    <div className="w-full h-full lg:px-28 px-10">
      <div className="w-full h-full flex flex-col pt-20 gap-6 items-center">
        <p className="text-4xl font-medium">Our Meal Services</p>
        <p className="text-zinc-500">Pure Flavors, Perfectly Portioned</p>
      </div>

      {/* Cards Section */}
      <div className="w-full h-full lg:gap-0 gap-10 lg:flex-row flex-col flex flex-wrap justify-between my-10">
        {cardsData.map((card, index) => {
          const firstColumnItems = card.menuItems.slice(0, 10);
          const secondColumnItems =
            card.menuItems.length > 10 ? card.menuItems.slice(10) : [];

          return (
            <div
              key={index}
              className="lg:w-[26vw] w-full h-full card shadow-lg rounded-xl"
            >
              {/* Heading */}
              <div
                className={`heading lg:w-[26vw] w-full py-3 flex flex-col gap-2 rounded-t-xl justify-center items-center text-white ${card.bgColor}`}
              >
                <p className="font-semibold text-2xl">{card.title}</p>
                <p className="font-light">{card.subtitle}</p>
              </div>

              {/* Image */}
              <div className="lg:w-[26vw] w-full h-full flex justify-center items-center">
                <img
                  src={card.img}
                  alt="Meal"
                  className="lg:w-60 lg:h-60 w-60 h-60 rounded-lg"
                />
              </div>

              {/* Menu List */}
              <div className="menu-list lg:h-[40vh] bg-pink-00 p-6 grid grid-cols-2 lg:gap-y-10 lg:gap-x-10 text-md font-semibold text-[#396d5c]">
                <div>
                  {firstColumnItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </div>
                {secondColumnItems.length > 0 && (
                  <div>
                    {secondColumnItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </div>
                )}
              </div>

              <p className="w-full text-center py-2 text-lg font-semibold text-white bg-[#396d5c]">
                Minimum 10 people
              </p>

              {/* Additional Info */}
              <div className="p-2 bg-[#f8faf9] text-[#808283] font-medium">
                <li className="mt-2">Lorem hic dolores eaque quaerat re?</li>
                <li className="mt-2">
                  Consectetur adipisicing elit. Vel doloribus.
                </li>
                <li className="mt-2">
                  Eaque cum tempora quaerat accusamus officia.
                </li>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center  gap-4 py-3">
                <button className="text-white bg-[#396d5c] font-semibold text-lg lg:px-12 lg:py-3 py-2 px-6 rounded-3xl">
                  Proceed
                </button>
                <button className="lg:w-40 lg:px-0 lg:py-3 py-2 px-4 text-[#396d5c] font-semibold rounded-3xl border-2 border-[#396d5c]">
                  What's App
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesCards;
