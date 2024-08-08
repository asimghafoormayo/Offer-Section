import React from 'react'

const FormCard = () => {
  return (
    
<div className="bg-white p-6 rounded-lg shadow w-full">
  <h1 className="text-xl my-2 font-semibold mb-4">General Information</h1>

  {/* Form Goes Here */}
  <form>
    {/* First Row: Customer Name and Current Date */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div>
        <label htmlFor="customer-name" className="block text-gray-700 font-semibold mb-1">Customer Name</label>
        <input
          type="text"
          id="customer-name"
          placeholder="Enter customer name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="current-date" className="block text-gray-700 font-semibold mb-1">Current Date</label>
        <input
          type="date"
          id="current-date"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>

    {/* Second Row: Pickup Address, Pickup Date, Pickup Time */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div>
        <label htmlFor="pickup-address" className="block text-gray-700 font-semibold mb-1">Pickup Address</label>
        <input
          type="text"
          id="pickup-address"
          placeholder="Enter pickup address"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="pickup-date" className="block text-gray-700 font-semibold mb-1">Pickup Date</label>
        <input
          type="date"
          id="pickup-date"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="pickup-time" className="block text-gray-700 font-semibold mb-1">Pickup Time</label>
        <input
          type="time"
          id="pickup-time"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>

    {/* Third Row: Pickup Address, Pickup Date, Pickup Time */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div>
        <label htmlFor="pickup-address-2" className="block text-gray-700 font-semibold mb-1">Pickup Address</label>
        <input
          type="text"
          id="pickup-address-2"
          placeholder="Enter pickup address"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="pickup-date-2" className="block text-gray-700 font-semibold mb-1">Pickup Date</label>
        <input
          type="date"
          id="pickup-date-2"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="pickup-time-2" className="block text-gray-700 font-semibold mb-1">Pickup Time</label>
        <input
          type="time"
          id="pickup-time-2"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>

    {/* Fourth Row: Discount */}
    <div className="mb-6">
      <label htmlFor="discount" className="block text-gray-700 font-semibold mb-1">Discount</label>
      <input
        type="text"
        id="discount"
        placeholder="Enter discount amount"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700"
    >
      Submit
    </button>
  </form>
</div>
  )
}

export default FormCard