import React from "react";
import Locationsl from "../constants/Locationsl";

const Component = () => {
  return (
    <div className="p-4">
      {/* Brand + Model */}
      <div className="flex flex-wrap gap-x-8 items-center">
        <div className="pt-8 grid">
          <span>Brand</span>
          <input
            type="text"
            placeholder="e.g. BMW, Mercedes, Audi..."
            className="border border-gray-300 rounded-lg h-[40px] w-[300px] px-2"
          />
        </div>

        <div className="pt-8 grid">
          <span>Model</span>
          <input
            type="text"
            placeholder="e.g. X5, E-Class, M4..."
            className="border border-gray-300 rounded-lg h-[40px] w-[300px] px-2"
          />
        </div>
      </div>

      {/* Year + Price + Category */}
      <div className="flex flex-wrap gap-x-8 items-center">
        <div className="pt-8 grid">
          <span>Year</span>
          <input
            type="number"
            min="1990"
            max="2026"
            placeholder="2025"
            className="border border-gray-300 rounded-lg h-[40px] w-[150px] px-2"
          />
        </div>

        <div className="pt-8 grid">
          <span>Daily Price ($)</span>
          <input
            type="number"
            min="0"
            max="1000"
            placeholder="0"
            className="border border-gray-300 rounded-lg h-[40px] w-[150px] px-2"
          />
        </div>

        <div className="pt-8 grid">
          <label className="text-gray-700 font-medium">Category</label>
          <select className="border border-gray-300 rounded-lg p-2 text-gray-700 w-[180px]">
            <option value="">Select a category</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
          </select>
        </div>
      </div>

      {/* Transmission + Fuel + Seating */}
      <div className="flex flex-wrap gap-x-8 items-center">
        <div className="pt-8 grid">
          <label className="text-gray-700 font-medium">Transmission</label>
          <select className="border border-gray-300 rounded-lg p-2 text-gray-700 w-[200px]">
            <option value="">Select a transmission</option>
            <option value="auto">Automatic</option>
            <option value="manual">Manual</option>
            <option value="semi-auto">Semi-Automatic</option>
          </select>
        </div>

        <div className="pt-8 grid">
          <label className="text-gray-700 font-medium">Fuel Type</label>
          <select className="border border-gray-300 rounded-lg p-2 text-gray-700 w-[200px]">
            <option value="">Select a fuel type</option>
            <option value="gas">Gas</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="pt-8 grid">
          <span>Seating Capacity</span>
          <input
            type="number"
            min="1"
            max="30"
            placeholder="4"
            className="border border-gray-300 rounded-lg h-[40px] w-[200px] px-2"
          />
        </div>
      </div>

      {/* Location Selector */}
      <div className="pt-8">
        <Locationsl />
      </div>

      {/* Description */}
      <div className="pt-8">
        <label className="text-gray-700 font-medium">Description</label>
        <textarea
          placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine."
          className="border border-gray-300 rounded-lg w-[850px] h-[200px] p-3 resize-none placeholder:text-gray-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button className="border rounded-lg border-gray-300 w-[150px] h-[45px] bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300">
          ✓ List Your Car
        </button>
      </div>
    </div>
  );
};

export default Component;
