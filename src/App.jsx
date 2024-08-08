import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Navbar />
        <div className="flex-grow p-8">
          {/* Your main content goes here */}
          <Main></Main>
        </div>
      </div>
    </div>
    </>
  )
}

export default App