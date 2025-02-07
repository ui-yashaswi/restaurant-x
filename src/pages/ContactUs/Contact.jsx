import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "./section/Banner";
import Footer from "../../components/Footer/Footer";
import Booking from "../../components/Booking";
import SmNav from "../../components/Navbar/SmNav";

function Contact() {
  return (
    <div>
      <SmNav />
      <Navbar />
      <Banner />
      <Booking />
      <Footer />
    </div>
  );
}

export default Contact;
