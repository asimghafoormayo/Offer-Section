import React from 'react'
import ChaufferItem from './ChaufferItem'

const ChauffuerCard = () => {

    const chauffuer = [
        {
            person : 'JACK PAUL SMITH',
            carNumber : 'LEM-84-5656-LEMEEEE',
            img : "/images/man.png",
            city : 'New York',
            country : 'United States of America',
        },
        {
            person : 'JACK DOE',
            carNumber : 'LEM-8222DFF4-5656-NEEEMEEEE',
            img : "/images/man.png",
            city : 'Michigan',
            country : 'United States of America',
        }
    ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Select Chauffeur</h2>

    <div className="mb-4">
      <label className="inline-flex items-center mr-6 bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
        <input type="radio" className="form-radio text-blue-600" name="chauffeur" defaultChecked />
        <span className="ml-2">With Chauffeur</span>
      </label>
      <label className="inline-flex items-center bg-gray-200 px-4 py-2 rounded-lg cursor-pointer my-2">
        <input type="radio" className="form-radio text-blue-600" name="chauffeur" />
        <span className="ml-2">Without Chauffeur</span>
      </label>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-2">Search Chauffeur</h3>
      <input
        type="text"
        placeholder="Search Chauffeur"
        className="w-1/2 p-2 border border-gray-300 rounded-md"
      />
    </div>

    
    <div className="flex flex-col md:flex-row justify-between md:flex-wrap mt-4">
      {chauffuer.map((item, index) => (
        <ChaufferItem key={index} item={item} />
      ))}
    </div>
  </div>
  )
}

export default ChauffuerCard