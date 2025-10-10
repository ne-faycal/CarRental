import React from "react";
const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    seats: 5,
    transmission: "automatic",
    category: "Economy",
    price: 45,
    status: "Completed",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Honda Civic",
    seats: 5,
    transmission: "automatic",
    category: "Economy",
    price: 48,
    status: "Completed",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=200&h=150&fit=crop",
  },
  {
    id: 3,
    name: "BMW 3 Series",
    seats: 5,
    transmission: "automatic",
    category: "Luxury",
    price: 95,
    status: "Pending",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Tesla Model 3",
    seats: 5,
    transmission: "automatic",
    category: "Luxury",
    price: 120,
    status: "Completed",
    dateRange: "4/10/2025 To 4/15/2025",
    total: 447,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=150&fit=crop",
  },
];


const Manage = () => {
  return (
    <div className="pt-8 w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-4 gap-8 px-8 py-4  bg-gray-50 border-b border-gray-200">
        <span>Car</span>
        <span>Date Range </span>
        <span> Total </span>
        <span>Status</span>
        
      </div>

      {cars.map((car) => (
        <div
          key={car.id}
          className="grid grid-cols-4 gap-8 py-4 px-8 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
        >
          
          <div className=" flex items-center gap-3 w-16 h-16 rounded-lg object-cover ">
            <img src={car.image} alt="" />
          </div>
          
            


       <div className="">
        <span>{car.dateRange}</span>
       </div>
       <div className="flex items-center gap-3">
        <span>
         ${car.total}
         </span>
       </div>
       <div>
        
          <span className=
            {`inline-block px-3 py-1 rounded-full text-sm font-medium
           ${car.status==='Completed'? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
                }  `  }>
                  {car.status}
          </span>
   
       </div>


        </div>
      ))}
    </div>
  );
};

export default Manage;
