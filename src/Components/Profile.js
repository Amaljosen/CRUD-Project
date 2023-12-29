import React from 'react'
import profile from '../profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';


export default function Profile() {
  return (
    <div className='text-sky-900  shadow-xl  m-5'>
      <nav className='flex justify-between m-2 items-center lg:px-5'>
        <h1 className='font-medium lg:text-xl hidden lg:block'>Package Executive Dashboard</h1>
        <h1 className='font-medium lg:text-xl lg:hidden'>Dashboard</h1>
        <div className='flex items-center'>
            <span className='mr-2 text-sm font-light lg:font-normal cursor-pointer'>Welcome Rathika Sri</span>
            <img src={profile} alt="" className='lg:w-8 shadow rounded-full mr-2 w-6 cursor-pointer'/>
            <FontAwesomeIcon icon={faBell} size='2x' className='text-sky-800 hidden lg:block cursor-pointer'/>
            <FontAwesomeIcon icon={faBell} size='xl' className=' lg:hidden cursor-pointer'/>
        </div>
      </nav><hr />

    <div className='lg:px-5 m-2 flex justify-between items-center'>
        <h1 className='font-medium text-sm lg:text-lg'>Empanelment Case Requests</h1>
        <span className='text-blue-600 italic font-regular text-xs lg:text-xs font-bold cursor-pointer hover:text-blue-800 duration-300'>ASSIGNED GRADE</span>
    </div>

    <div className='text-xs lg:text-base flex flex-col lg:flex-row lg:px-5 m-2 lg:w-full justify-between py-4'>

    <div className='flex lg:flex-col lg:w-fit w-full'>
    <div className='w-2/4 lg:w-fit pr-4'>
        <span className='font-semibold'>THCP Code :</span> <span>312568</span>
    </div>
    <div className='w-2/4 lg:w-fit pr-4'>
        <span className='font-semibold'>Case Id :</span> <span>1-56894524</span>
    </div>
    </div>

    <div className='flex w-full lg:flex-col lg:w-fit'>
    <div className='w-2/4 lg:w-fit pr-4'>
        <span className='font-semibold'>Case Date :</span> <span>29 Jun 2023</span>
    </div>
    <div className='w-2/4 lg:w-fit pr-4'>
        <span className='font-semibold'>Zone :</span> <span>North</span>
    </div>
    </div>

    <div className='flex w-full lg:flex-col lg:w-fit'>
    <div className='w-2/4 lg:w-fit pr-4'>
        <span className='font-semibold'>Provider Name : </span> <span>12548 - Apollo Hospital Mumbai</span>
    </div>
    <div className='w-2/4 lg:w-fit pr-4'>
        <span className='font-semibold'>Status :</span> <span>Work flow Created</span>
    </div>
    </div>


    </div>

    </div>
  )
}
