import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold text-blue-600">
    Welcome to My Website!
  </h1>
  <div className="flex flex-col items-center mt-4">
    <NavLink to='/' className={({ isActive }) =>
          `text-2xl hover:text-blue-700 mt-2 ${isActive ? 'text-red-500' : 'text-blue-500'}`
        }>
      Home
    </NavLink>
    <NavLink to='/about' className={({ isActive }) =>
          `text-2xl hover:text-blue-700 mt-2 ${isActive ? 'text-red-500' : 'text-blue-500'}`
        }>
      About
    </NavLink>
    <NavLink to='/contact' className={({ isActive }) =>
          `text-2xl hover:text-blue-700 mt-2 ${isActive ? 'text-red-500' : 'text-blue-500'}`
        }>
      Contact
    </NavLink>
  </div>
</div>

  
  )
}

export default Home