import React from 'react'
import formBuilderLogo from '../assests/oneture-high-resolution-logo-black-transparent.png'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {

const location = useLocation();
const currLocation = location.pathname.split("/").at(-1);
    
  return (
   <div className='w-full bg-blue-50 h-12 transition-all duration-200'>
      <div className='w-8/12 mx-auto flex  justify-between  items-center h-full'>
        <Link to=""><img alt="webLogo" src={formBuilderLogo} width={120} height={30}></img></Link>
          <div className='flex my-auto w-1/2 justify-around'>
            <Link className={`font-extrabold  text-richblack-700 ${currLocation=="createForm" ? "border-[1px]" : ""}   py-1 px-2 rounded-md hover:shadow-lg `} to={'/createForm'}>Create Form</Link>
            <Link className={`font-extrabold text-richblack-700 ${currLocation=="viewAllForms" ? "border-[1px]" : ""}  py-1 px-2 rounded-md hover:shadow-lg`} to={'/viewAllForms'}>View Forms</Link>
          </div>
        
      </div>
        
   </div>
  )
}

export default Navbar