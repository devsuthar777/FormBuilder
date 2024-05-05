import React from 'react'
import formBuilderLogo from '../assests/logo-no-background.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../services/operations/logout';
const Navbar = () => {

const location = useLocation();
const currLocation = location.pathname.split("/").at(-1);
const navigate = useNavigate();
const token = useSelector(state => state.auth.token)
const user = useSelector(state => state.profile.user)
const dispatch = useDispatch();
const logoutHandler =  () => {
    logout(dispatch,navigate);
}
    
  return (
   <div className='w-full bg-blue-50 h-12 transition-all duration-200'>
      <div className='w-8/12 mx-auto flex  justify-between  items-center h-full '>
        <Link to=""><img alt="webLogo" className='bg-black' src={formBuilderLogo} width={100} height={10}></img></Link>
          
          {
              token ? (<div className='flex my-auto w-1/2 justify-around items-center h-full'>
               <Link className={`font-extrabold  text-richblack-700 ${currLocation=="createForm" ? "border-[1px]" : ""}   py-1 px-2 rounded-md hover:shadow-lg `} to={'/createForm'}>Create Form</Link>
               <Link className={`font-extrabold text-richblack-700 ${currLocation=="viewAllForms" ? "border-[1px]" : ""}  py-1 px-2 rounded-md hover:shadow-lg`} to={'/viewAllForms'}>View Forms</Link>
               <div className='h-full flex items-center justify-cente font-edu-sa gap-1'><p>Hey</p><p>{user.name.split(" ").at(0)}{" !"}</p>
               <button className='border px-2 font-inter text-sm font-medium rounded-md text-richblack-600 ml-3 hover:text-black' onClick={logoutHandler}>Log Out</button>
               </div>
              </div>) 
              : 
              <div><p className='font-edu-sa'>Hello Everyone !</p> </div>
          }
          
        
      </div>
        
   </div>
  )
}

export default Navbar