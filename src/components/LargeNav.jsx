import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const LargeNav = () => {
  return (
    <div className='w-full min-h-[12vh] h-20 bg-primary' >
      <nav className='w-10/12 h-full max-w-6xl mx-auto flex justify-between items-center' >
      <NavLink to="/" className='h-full p-2 flex gap-x-2 justify-center items-center' >
        <img className='h-full'  src={logo} alt="" />
        <div>
          <p className='font-bold text-white text-xl'>Brainy Quest</p>
          <p className='text-white' >Test Your Brain</p>
        </div>
      </NavLink>
      </nav>
    </div>
  )
}

export default LargeNav
