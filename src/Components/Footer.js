import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../Logo.png'

export default function Footer() {
  return (
    <div className='text-sky-900 p-10 w-screen'>
      <div>
      <img src={Logo} alt="" className='lg:w-36 w-20'/>
        </div>

        <div className='text-xs lg:text-xl mt-10 flex w-full justify-between'>
           <div className='pr-5'>
            <h1 className='text-lg pb-3 lg:text-xl '>Address</h1>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>The Claim Zippy</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>4925 North Scottsdale Road,</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>Scottsdale,</p>
            <div className='flex w-2/3 justify-between pt-5 lg:hidden'>
            <FaInstagram size={16} className='hover:text-orange-600 transition-all duration-300 cursor-pointer'/>
            <FaFacebookF size={16} className='hover:text-orange-600 transition-all duration-300 cursor-pointer'/>
            <BsTwitterX  size={16} className='hover:text-orange-600 transition-all duration-300 cursor-pointer'/>
           
            </div>
           </div>

           <div className='pr-5'>
            <h1 className='text-lg pb-3 lg:text-xl '>Contact</h1>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>News & Accolades</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>Careers</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>Privacy Policy</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>FAQ</p>
            </div>


           <div>
            <h1 className='text-lg pb-3 lg:text-xl'>Reservations</h1>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>T.800 699 9588</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>T.706 299 5584</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'>T.850 694 9588</p>
            </div>


           <div className='hidden lg:block'>
            <h1 className='text-lg pb-3 lg:text-xl'>Media</h1>

            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'> <FaLinkedin size={20} className='inline pr-2'/>Linkedin</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'> <FaFacebookF size={20} className='inline pr-2'/>Facebook</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'><FaInstagram size={20} className='inline pr-2'/>Instagram</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-xs pb-1 lg:text-lg'><BsTwitterX  size={20} className='inline pr-2'/>Twiter</p>
            </div>

        </div>
    </div>
  )
}
