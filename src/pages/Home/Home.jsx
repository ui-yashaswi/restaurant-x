import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button";
import Events from "./Sections/Events";
import Cards from "./Sections/ServicesCards.jsx";
import Booking from "../../components/Booking.jsx";
import Latestblogs from "./Sections/Latestblogs.jsx";
import SmNav from "../../components/Navbar/SmNav.jsx";
import Location from "./Sections/Location.jsx";
import Gallery from "./Sections/Gallery.jsx";
import Customer from "./Sections/CustomerReview.jsx";
const Home = () => {
  return (
    <div>
      <SmNav />
      <Navbar />
      <div
        className="relative lg:mt-24  w-full lg:h-[440px] h-[80vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}

        <div className="w-full h-full  lg:px-0 px-0  flex justify-center">
          <div className=" lg:w-[40vw] w-[90vw]  relative flex flex-col items-center  justify-center h-full text-center text-white gap-8">
            <h1 className="text-5xl lg:leading-16 leading-[8vh] font-bold">
              Making Every Occasion Extra Delicious
            </h1>
            <h2 className="text-xl font-semibold">
              BEST CATERING SERVICES IN HYDERABAD
            </h2>
            <p className=" text-wrap lg:text-nowrap">
              From Our Heart to Your Home, Taste the Essence of Traditional
              Vegetarian Delights.
            </p>
            <div className="flex lg:flex-row flex-col items-center font-semibold text-[#376D5C] justify-center gap-4">
              <Button text={"Book Now"} />
              <button className="px-12 py-3 text-white font-semibold  rounded-3xl border-2">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Cards />
      <Events />
      <Customer />
      <Gallery />
      <Latestblogs />
      <Booking />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
