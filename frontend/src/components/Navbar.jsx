import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate();

const [showMenu, setShowMenu] = useState(false)
const [token,setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="logo"/>
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
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-full right-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2'>
                        <p onClick={()=>navigate('my-profile')} className='p-2 hover:bg-gray-100'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='p-2 hover:bg-gray-100 whitespace-nowrap'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='p-2 hover:bg-gray-100'>Logout</p>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')} className='bg-primary text-black px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }
        </div>
    </div>
  )
}

export default Navbar