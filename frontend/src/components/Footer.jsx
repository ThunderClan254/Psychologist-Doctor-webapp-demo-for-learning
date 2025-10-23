import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10' >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        
         {/*------left section------*/}
         <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-grey-600 leading-6' >MindEase connects you with licensed psychologists for confidential, convenient, and compassionate care. We make it simple to book trusted professionals who understand your needs, offering a safe space to talk, heal, and grow—anytime, anywhere.</p>
         </div>

         {/*------center section------*/}
         <div>
          <p className='text-xl font-medium mb-5' >COMPANY</p>
          <ul className='flex flex-col gap-2 text-grey-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
         </div>
          
          {/*------right section------*/}
         <div>
          <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-grey-600' >
            <li>+254 1908766576</li>
            <li>mindease@gmail.com</li>
          </ul>
         </div>
      </div>
      {/*------Copyright Text------*/}
      <div>
        <hr />
        <p className='py-5 text-sm text-center' >© 2025 MindEase. All rights reserved.</p>
        
        </div> 
    </div>
  )
}

export default Footer