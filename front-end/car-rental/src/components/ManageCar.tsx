import React from 'react';
import { Eye, Trash2 } from 'lucide-react';

const ManageCar = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      seats: 5,
      transmission: 'automatic',
      category: 'Economy',
      price: 45,
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Honda Civic',
      seats: 5,
      transmission: 'automatic',
      category: 'Economy',
      price: 48,
      status: 'Not Available',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=200&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'BMW 3 Series',
      seats: 5,
      transmission: 'automatic',
      category: 'Luxury',
      price: 95,
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'automatic',
      category: 'Luxury',
      price: 120,
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=150&fit=crop'
    }
  ];

  return (
    <div className="pt-8 w-full max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="grid grid-cols-5 gap-4 py-4 px-6 bg-gray-50 border-b border-gray-200">
        <span className="text-gray-600 font-medium">Car</span>
        <span className="text-gray-600 font-medium">Category</span>
        <span className="text-gray-600 font-medium">Price</span>
        <span className="text-gray-600 font-medium">Status</span>
        <span className="text-gray-600 font-medium">Actions</span>
      </div>

      {/* Car Rows */}
      {cars.map((car) => (
        <div
          key={car.id}
          className="grid grid-cols-5 gap-4 py-4 px-6 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
        >
          {/* Car Info */}
          <div className="flex items-center gap-3">
            <img
              src={car.image}
              alt={car.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-gray-900">{car.name}</h3>
              <p className="text-sm text-gray-500">
                {car.seats} seats • {car.transmission}
              </p>
            </div>
          </div>

          {/* Category */}
          <span className="text-gray-700">{car.category}</span>

          {/* Price */}
          <span className="text-gray-900 font-medium">${car.price}/day</span>

          {/* Status */}
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                car.status === 'Available'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {car.status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="View details"
            >
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete"
            >
              <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageCar;