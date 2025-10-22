import React, { use } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
        <img classname='w-44 cursor-pointer' src={assets.logo} alt=""/>
        <ul className="hidden md:flex items-start gap-5 font-medium">
            <NavLink to="/">
                <li>HOME</li>
                <hr className='border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctors">
                <li>ALL DOCTORS</li>
                <hr className='border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/about">
                <li>ABOUT</li>
                <hr className='border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/contact">
                <li>CONTACT</li>
                <hr className='border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex item-center gap-4'>
            <NavLink to="/login">
                <button onClick={()=>navigate('/login')} className='bg-primary text-black px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            </NavLink>
        </div>
        </div>
  )
}

export default Navbar