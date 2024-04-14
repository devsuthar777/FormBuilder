import React from 'react'
import imageLogo from '../assests/oneture-high-resolution-logo.png'
import RegisterButtons from '../common/RegisterButtons'
const HomePage = () => {

  return (
    <div className='w-10/12 mx-auto mt-7'>
        <h1 className='text-5xl text-center mt'>Welcome to FormBuilder</h1>
        <img src={imageLogo} className='rounded-lg w-80 h-30 mx-auto mt-3'></img>
        <p className='text-xl text-center mt-2'>By <span className='text-2xl font-extrabold'>OneTure</span></p>
        <div className='w-32 h-1 bg-richblack-500 mx-auto my-2'></div>
        <p className='mx-auto font-bold text-pure-greys-300 w-3/5 text-center'>Create your customised forms with FormBuilder. Flexible and easy to make your forms to get your required feedbacks.</p>
        <RegisterButtons/>
    </div>
  )
}

export default HomePage