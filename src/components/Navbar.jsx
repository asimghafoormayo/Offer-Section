import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-300 px-5 py-4 flex justify-between items-center">
    {/* Left side: Single Image */}
    <div>
      <img src="/images/button.png" alt="Logo" className="h-4" />
    </div>

    {/* Right side: Two Images */}
    <div className="flex space-x-4">
      <img src="/images/person.png" alt="Person" className="h-12" />
      <img src="/images/notify.png" alt="Notification" className="h-12" />
    </div>
  </div>
  )
}

export default Navbar