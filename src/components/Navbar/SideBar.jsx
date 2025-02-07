import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import React from "react";
import gsap from "gsap";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const textRefs = useRef([]); // Store references for text elements

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        textRefs.current,
        { x: 50, opacity: 0, filter: "blur(5px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Menu Button (Hidden when sidebar is open) */}
      {!isOpen && (
        <button
          className="fixed top-3 right-4 z-50 text-3xl text-white hover:border border-green-600 bg-[#396d5c] p-2 rounded-full "
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="text-2xl" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {/* Sidebar Content with GSAP Animation */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <Link ref={(el) => (textRefs.current[0] = el)} to={"/"}>
            Home
          </Link>
          <p ref={(el) => (textRefs.current[1] = el)}>Meal Services</p>
          <p ref={(el) => (textRefs.current[2] = el)}>Gallery</p>
          <p ref={(el) => (textRefs.current[3] = el)}>Blogs</p>
          <Link ref={(el) => (textRefs.current[4] = el)} to={"/about"}>
            About us
          </Link>
          <Link ref={(el) => (textRefs.current[5] = el)} to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
