import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterButtons = () => {
  
  const navigate = useNavigate();

  return (
    <div className='mx-auto flex  justify-center gap-9 mt-10'>
        <button className='bg-richblue-300 px-8 py-2 font-bold text-richblack-25 ' onClick={() => {navigate('/auth/signup')}}>Sign Up</button>
        <button className='bg-richblue-300 px-8 py-2 font-bold text-richblack-25 ' onClick={() => {navigate('/auth/login')}} >Log In</button>
    </div>
  )
}

export default RegisterButtons