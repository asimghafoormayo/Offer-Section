import React from 'react'

const ChaufferItem = ({item}) => {
  return (
    <div className="w-full md:w-[40%] px-4 mb-6 my-1">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={item.img}
            alt="Car 1"
            className="w-full md:w-1/3 h-26 object-cover mr-2 mb-4 md:mb-0"
          />
          <div className="flex-1 text-center md:text-left ml-6">
            <h3 className="text-lg font-semibold">{item.person}</h3>
            <h4 className="text-md text-gray-600">{item.carNumber}</h4>
            <div className="text-sm text-gray-500 mt-2">
              <p>City: {item.city} </p>
              <p>Country: {item.country} </p>
            </div>
            <button className="mt-6 md:mt-0 bg-transparent text-green-500 border border-green-500 px-6 py-1 rounded-md">
              Available
            </button>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-900 text-white px-4 py-1 rounded-md">
            Select
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChaufferItem