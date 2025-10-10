import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, PlusCircle, Car, Calendar } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: "add-car",
      label: "Add car",
      icon: PlusCircle,
      path: "/add-car",
    },
    {
      id: "manage-cars",
      label: "Manage Cars",
      icon: Car,
      path: "/manage-cars",
    },
    {
      id: "manage-bookings",
      label: "Manage Bookings",
      icon: Calendar,
      path: "/manage-bookings",
    },
  ];

  const [ActivePage, setActivePage] = useState("dashboard");
    const [ActivePath, setActivePath] = useState("/dashboard");

  return (
    <div className="w-60 h-screen border-x border-gray-300">
      <div className="grid text-gray-600">
        {/* Profile section */}
        <div className="flex flex-col items-center justify-between pt-10">
          <img
            src="/faycal.jpg"
            alt="Profile"
            className="rounded-full h-14 w-14 object-cover"
          />
          <h2 className="text-black font-medium mt-2">
            Termouli faycal sni9sho
          </h2>
        </div>

        {/* Navigation section */}
        <div className="pt-14">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = ActivePage === item.id || ActivePath === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {setActivePage(item.id);
                setActivePath(item.path);}
                }
                className={`flex items-center gap-3 px-5 py-4 transition-all duration-300 ease-in-out border-l-4 cursor-pointer
                  ${
                    isActive
                      ? "border-blue-500 bg-blue-100 text-blue-600 font-medium"
                      : "border-transparent hover:bg-gray-100 hover:text-gray-800"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-[15px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
