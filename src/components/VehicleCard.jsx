import React from 'react'
import CarCard from './CarCard'

const VehicleCard = () => {

    const car = [
        {
          carName: "Suzuki",
          model: "LEM 2017",
          year: 2012,
          type: "simple",
          color: "red",
          city: "New York",
        },
        {
          carName: "Suzuki",
          model: "LEM 2017",
          year: 2012,
          type: "simple",
          color: "red",
          city: "New York",
        },
        {
          carName: "Suzuki",
          model: "LEM 2017",
          year: 2012,
          type: "simple",
          color: "red",
          city: "New York",
        },
        {
          carName: "Suzuki",
          model: "LEM 2017",
          year: 2012,
          type: "simple",
          color: "red",
          city: "New York",
        },
      ];

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full my-8">
    <h1 className="text-lg font-semibold mb-4">Select Vehicle</h1>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="make">
            Make
          </label>
          <select
            id="make"
            name="make"
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select Make</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="model">
            Model
          </label>
          <select
            id="model"
            name="model"
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select Model</option>
            <option value="corolla">LEM 2012</option>
            <option value="civic">LEM 2016</option>
            <option value="focus">LEM 2024</option>

          </select>
        </div>
      </div>
    </form>

    {/* Nested Card Section */}
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap -mx-4">
       

        { car.map( (item) => <CarCard item={item}></CarCard> )  }

      </div>
    </div>
  </div>
  )
}

export default VehicleCard