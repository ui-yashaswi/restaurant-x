import React from "react";

function Location() {
  return (
    <div className="w-full h-64">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509417!2d144.95373631531842!3d-37.81627944202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f51d07%3A0x3a08bc62f5c5e2d0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633064669123!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
