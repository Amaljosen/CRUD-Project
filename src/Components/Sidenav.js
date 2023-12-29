import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';


export default function Sidenav({click,setclick}) {
  
    function setclose(){
        setclick(true)
    }
   let cls=`${click?"-ml-96 bg-white text-white transition-all duration-500 h-full":"text-sky-800 bg-white shadow h-full transition-all duration-1000 z-20 pr-5"}`
  return (
    <div  style={{position:'fixed'}} className={cls}>
        <div className='flex justify-between items-start'>
        <div className='ml-5 p-6'>
           <h1 className='text-2xl lg:text-4xl lg:font-normal font-light font-serif hover:text-orange-600 transition-all duration-500 cursor-pointer'>CLAIM</h1> 
           <p className='text-xl lg:text-2xl font-light text-orange-600'>ZIPPY</p>
        </div>
        <div className='p-6 cursor-pointer transition-all duration-500 hover:text-orange-600 hover:rotate-90 ml-20' onClick={setclose} setclose={setclose}><FontAwesomeIcon icon={faXmark} size='2x'/>         </div>
        </div>

       <ul className='pl-10 pb-5 flex flex-col justify-between h-5/6' onClick={setclose}>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>01</span> Dashboard</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>02</span> Task Queue</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>03</span> Network Providers</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>04</span> Network Providers</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>05</span> My Document</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>06</span> Profile</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>07</span> Audit Trail</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>08</span> Support</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>09</span> Search</li>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>10</span> Details</li>
       </ul>

    </div>
  )
}
