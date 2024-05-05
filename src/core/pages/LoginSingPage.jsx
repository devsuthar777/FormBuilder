import React from 'react'
import { Outlet } from 'react-router-dom'
import sidelogo from '../assests/logo-black.png'

const LoginSingPage = () => {
  return (
    <div className='w-full h-[100% - 48px] flex flex-row'>
        <div className='w-3/5'>
                <img src={sidelogo} className='h-screen mb-[-48px] w-full'/>
        </div>
        <div className='w-2/5'>
            <Outlet />
        </div>
    </div>
    
  )
}

export default LoginSingPage