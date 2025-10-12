import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  setBrand,
  setModel,
  setYear,
  setPrice,
  setCategory,
  setTransmission,
  setFuelType,
  setSeats,
  setDescription,
  resetForm,
} from "../redux/slices/carFormSlice";
import { addCar } from "../api/carApi";

const AddCarForm = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.carForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "brand":
        dispatch(setBrand(value));
        break;
      case "model":
        dispatch(setModel(value));
        break;
      case "year":
        dispatch(setYear(Number(value)));
        break;
      case "price":
        dispatch(setPrice(Number(value)));
        break;
      case "category":
        dispatch(setCategory(value));
        break;
      case "Transmission":
        dispatch(setTransmission(value));
        break;
      case "Fuel_Type":
        dispatch(setFuelType(value));
        break;
      case "seats":
        dispatch(setSeats(Number(value)));
        break;
      case "Description":
        dispatch(setDescription(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("Sending car data:", formData);
      const response = await addCar(formData);
      alert("✅ Car added successfully!");
      console.log("Server response:", response);
      dispatch(resetForm()); // reset after successful submission
    } catch (error) {
      alert("❌ Failed to add car. Check the console for details.");
      console.error(error);
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <div className="p-4">
      {/* Brand + Model */}
      <div className="flex flex-wrap gap-x-8 items-center">
        <div className="pt-8 grid">
          <label htmlFor="brand" className="text-gray-700 font-medium">
            Brand
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            placeholder="e.g. BMW, Mercedes, Audi..."
            className="border border-gray-300 rounded-lg h-[40px] w-[300px] px-2"
            onChange={handleChange}
            value={formData.brand}
          />
        </div>

        <div className="pt-8 grid">
          <label htmlFor="model" className="text-gray-700 font-medium">
            Model
          </label>
          <input
            id="model"
            name="model"
            type="text"
            placeholder="e.g. X5, E-Class, M4..."
            className="border border-gray-300 rounded-lg h-[40px] w-[300px] px-2"
            onChange={handleChange}
            value={formData.model}
          />
        </div>
      </div>

      {/* Year + Price + Category */}
      <div className="flex flex-wrap gap-x-8 items-center">
        <div className="pt-8 grid">
          <label htmlFor="year" className="text-gray-700 font-medium">
            Year
          </label>
          <input
            id="year"
            name="year"
            type="number"
            min="1990"
            max="2026"
            placeholder="2025"
            className="border border-gray-300 rounded-lg h-[40px] w-[150px] px-2"
            onChange={handleChange}
            value={formData.year ?? ""}
          />
        </div>

        <div className="pt-8 grid">
          <label htmlFor="price" className="text-gray-700 font-medium">
            Daily Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            max="1000"
            placeholder="0"
            className="border border-gray-300 rounded-lg h-[40px] w-[150px] px-2"
            onChange={handleChange}
            value={formData.price ?? ""}
          />
        </div>

        <div className="pt-8 grid">
          <label htmlFor="category" className="text-gray-700 font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="border border-gray-300 rounded-lg p-2 text-gray-700 w-[180px]"
            onChange={handleChange}
            value={formData.category}
          >
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
          <label htmlFor="Transmission" className="text-gray-700 font-medium">
            Transmission
          </label>
          <select
            id="Transmission"
            name="Transmission"
            className="border border-gray-300 rounded-lg p-2 text-gray-700 w-[200px]"
            onChange={handleChange}
            value={formData.Transmission}
          >
            <option value="">Select a transmission</option>
            <option value="auto">Automatic</option>
            <option value="manual">Manual</option>
            <option value="semi-auto">Semi-Automatic</option>
          </select>
        </div>

        <div className="pt-8 grid">
          <label htmlFor="Fuel_Type" className="text-gray-700 font-medium">
            Fuel Type
          </label>
          <select
            id="Fuel_Type"
            name="Fuel_Type"
            className="border border-gray-300 rounded-lg p-2 text-gray-700 w-[200px]"
            onChange={handleChange}
            value={formData.Fuel_Type}
          >
            <option value="">Select a fuel type</option>
            <option value="gas">Gas</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="pt-8 grid">
          <label htmlFor="seats" className="text-gray-700 font-medium">
            Seating Capacity
          </label>
          <input
            id="seats"
            name="seats"
            type="number"
            min="1"
            max="30"
            placeholder="4"
            className="border border-gray-300 rounded-lg h-[40px] w-[200px] px-2"
            onChange={handleChange}
            value={formData.seats ?? ""}
          />
        </div>
      </div>

      {/* Description */}
      <div className="pt-8">
        <label htmlFor="Description" className=" flex felex-col text-gray-700 font-medium">
          Description
        </label>
        <textarea
          id="Description"
          name="Description"
          placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine."
          className="border border-gray-300 rounded-lg w-[850px] h-[200px] p-3 resize-none placeholder:text-gray-400"
          onChange={handleChange}
          value={formData.Description ?? ""}
        ></textarea>
      </div>

      {/* Submit + Reset Buttons */}
      <div className="pt-6 flex gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="border rounded-lg border-gray-300 w-[150px] h-[45px] bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300"
        >
          ✓ List Your Car
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="border rounded-lg border-gray-300 w-[150px] h-[45px] bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AddCarForm;
