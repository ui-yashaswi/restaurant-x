import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex-col  justify-center gap-5  text-4xl flex items-center  bg-slate-900 text-white">
      <div className="  font-semibold">NotFound</div>
      <Link to={"/"} className="text-lg underline">
        ◀ GO Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
