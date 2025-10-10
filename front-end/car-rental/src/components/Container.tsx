import React from "react";
import {
  Car,
  ClipboardList,
  AlertTriangle,
  ClipboardCheck,
} from "lucide-react";
const container = () => {
  return (
    <div className="grid gap-y-8">
      <div className="flex  gap-x-8 pt-8">
        <div className="  w-[200px] h-20 flex justify-between  items-center border-y border-x border-gray-300 rounded-lg">
          <div className="flex   flex-col pl-6   ">
            <p className="text-sm text-color-gray-500  ">Total cars</p>
            <h2 className="text-2xl font-bold  ">0</h2>
          </div>

          <div className="bg-blue-600/10 p-4 flex items-center w-10 h-10 justify-center rounded-full">
            <Car color="#4F46E5" className="" />
          </div>
        </div>
        <div className="  w-[200px] h-20 flex justify-between   items-center border-y border-x border-gray-300 rounded-lg">
          <div className="flex   flex-col pl-6   ">
            <p className="text-sm text-color-gray-500  ">Total cars</p>
            <h2 className="text-2xl font-bold  ">0</h2>
          </div>

          <div className="bg-blue-600/10 p-4 flex items-center justify-center w-10 h-10 rounded-full">
            <AlertTriangle color="#4F46E5" className="w-4 h-4" />
          </div>
        </div>
        <div className="  w-[200px] h-20 flex justify-between  items-center border-y border-x border-gray-300 rounded-lg">
          <div className="flex   flex-col pl-6   ">
            <p className="text-sm text-color-gray-500  ">Total cars</p>
            <h2 className="text-2xl font-bold  ">0</h2>
          </div>

          <div className="bg-blue-600/10 p-4 flex items-center justify-center w-10 h-10 rounded-full">
            <ClipboardCheck color="#4F46E5" className="w-4 h-4" />
          </div>
        </div>
        <div className="  w-[200px] h-20 flex justify-between  items-center border-y border-x border-gray-300 rounded-lg">
          <div className="flex   flex-col pl-6   ">
            <p className="text-sm text-color-gray-500  ">Total cars</p>
            <h2 className="text-2xl font-bold  ">0</h2>
          </div>

          <div className="bg-blue-600/10 p-4 flex items-center justify-center w-10 h-10 rounded-full">
            <Car color="#4F46E5" className="w-4 h-4" />
          </div>
        </div>
      </div>
      {/* the socond part*/}
      <div className="flex gap-x-8">
        <div className="   w-[600px] min-h-28 flex justify-between  items-center border-y border-x border-gray-300 rounded-lg">
          <div className="   flex-col pl-6  w-full  ">
            <h1 className=" text-color-black text-lg font-bold  ">
              Recent Bookings
            </h1>
            <p>Latest customer bookings</p>

            {/* confirmed button */}
            <div className="flex flex-col pt-4 gap-1 ">
              <div className="flex items-center gap-3">
                <ClipboardList color="#4F46E5" className="flex-shrink-0" />
                <h3 className="text-black font-bold ">BMW Serie 3</h3>
                {/* */}
                <div className="flex  items-center ml-auto px-3 py-1  text-green-700 text-sm   ">
                  <span className="text-black pr-3 ">$447</span>

                  <span className="bg-green-100 font-medium rounded-full border-full w-full h-full ">
                    Confirmed
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm pl-9">12/12/2025</p>
            </div>
          </div>
        </div>
        <div className="  w-[300px] h-40 flex justify-between  items-center border-y border-x border-gray-300 rounded-lg">
          <div className="flex   flex-col pl-6   ">
            <h1 className=" text-color-black text-lg font-bold  ">
              Monthly Revenue
            </h1>
            <p>Revenue for current month</p>
            <h1 className="text-3xl text-blue-500 font-bold  pt-4">$0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default container;
