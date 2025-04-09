import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='h-fit w-full'>
            <NavLink to="/" >Home   </NavLink>
            <NavLink to="/Explore">Explore   </NavLink>
          
        </nav>
    </div>
  )
}

export default Navbar