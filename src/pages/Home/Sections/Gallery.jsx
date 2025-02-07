import React from "react";
import g1 from "/images/g-1.png";
import g2 from "/images/g-2.jpg";
import g3 from "/images/g-3.jpg";
import g4 from "/images/g-4.jpg";

const images = [g1, g2, g3, g4];

function Gallery() {
  return (
    <div className=" h-full w-full py-10">
      <div className="w-full h-full flex flex-col lg:pt-10  gap-6 items-center">
        <p className="text-4xl font-medium">Gallery</p>
        <p className="text-zinc-500">
          Preserving Traditions, One Dish at a Time.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-10 lg:px-28">
        <div className=" w-full flex justify-between gap-6 lg:flex-row flex-col">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[40vh]  object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
