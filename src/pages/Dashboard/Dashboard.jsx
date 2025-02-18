import React, { useEffect, useState } from "react";
import {
  Calendar1,
  HandPlatter,
  Home,
  LayoutDashboardIcon,
} from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

export const Dashboard = ({ children }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.split("/")[2]);

  useEffect(() => {
    setActive(pathname.split("/")[2]);
  }, [pathname]);
  return (
    <div className="w-full flex items-center justify-center bg-amber-100 h-screen ">
      <div className="lg:min-w-[17vw] flex flex-col gap-5 justify-center shadow-r-md pl-4">
        {[
          { path: "/", icon: Home, text: "home" },
          {
            path: "/admin/dashboard",
            icon: LayoutDashboardIcon,
            text: "dashboard",
          },
          { path: "/admin/events", icon: Calendar1, text: "events" },
          { path: "/admin/caterings", icon: HandPlatter, text: "caterings" },
        ].map((item, idx) => (
          <Link to={item.path} key={idx}>
            <div
              className={`flex items-center hover:bg-amber-200 rounded-xl duration-500 justify-between  pr-12 p-4 w-64  ${
                active === item.text ? " bg-amber-200" : " "
              }`}
            >
              {item.text}

              <item.icon />
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full bg-zinc-300">{children}</div>
    </div>
  );
};
