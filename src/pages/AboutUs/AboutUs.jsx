import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "./section/Banner";
import Description from "./section/Description";
import SmNav from "../../components/Navbar/SmNav";

function AboutUs() {
  return (
    <div>
      <SmNav />

      <Navbar />
      <Banner />
      <Description />

      <Footer />
    </div>
  );
}

export default AboutUs;
