import React from 'react'

const TermsCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
     
      <h2 className="text-xl font-semibold my-6">Terms and Conditions</h2>
      
      
      <h4 className="text-lg mb-2">Please specify terms and conditions</h4>
      
     
      <textarea
        className="w-full p-2 border border-gray-400 rounded-md"
        placeholder="Enter terms and conditions here..."
        rows="4"
      ></textarea>
    </div>
  )
}

export default TermsCard