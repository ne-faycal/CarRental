// src/api/carApi.ts
import httpClient from "../httpClient";
interface CarData {
  category: string;
  model: string;
    brand: string;
    Transmission: string;
    Fuel_Type: string;
    Location: string;
    Description: string | null;
    price: number | null;
    seats: number | null;
    year: number | null;
    image: string;
}   
// src/types/api.ts


export const addCar = async (carData: CarData) => {
  try {
    const response = await httpClient.post("/cars", carData);
    return response.data;
  } catch (error: any) {
    console.error("Error adding car:", error.response?.data || error.message);
    throw error;
  }
};
