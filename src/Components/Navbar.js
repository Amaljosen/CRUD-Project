import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo.png'
import SideNav from './Sidenav';

export default function Navbar() {

  const [click,setclick]=useState(true)
  

  function check(){
    setclick(false)
    
  }
  return (
      <>
      <SideNav click={click} setclick={setclick}/>
      <nav className='flex justify-between items-center px-5 py-3 shadow-lg'>
      <FontAwesomeIcon icon={faBars} size='xl' onClick={check} className='cursor-pointer lg:ml-6 text-sky-800 lg:hidden hover:text-orange-600 duration-300 hover:rotate-180'/>
      <FontAwesomeIcon icon={faBars} size='2x' onClick={check} className='cursor-pointer lg:ml-6 text-sky-800 hidden lg:block hover:text-orange-600 duration-300 hover:rotate-180'/>
      <img src={Logo} alt="" className='lg:w-48 w-32'/>
      <div></div>
      </nav>
      </>
    
  )
}
