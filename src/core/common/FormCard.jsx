import React from 'react'
import { Link } from 'react-router-dom'

const FormCard = ({formDetails}) => {
  return (
    <div  className='w-72 bg-richblue-25  flex flex-col gap-4 hover:scale-105 hover:shadow-lg rounded-lg transition-all duration-200'>
        <div className='w-60 h-full  mx-auto flex flex-col gap-2'>
          <h2 className='text-xl font-bold w-full text-center my-5 '>{formDetails.title}</h2>
          <p className='text-xs text-pure-greys-400 h-16 overflow-hidden  transition-all duration-500'>{formDetails.description.length>150 ? (formDetails.description.substring(0,150) + "...") : formDetails.description }</p>
          <p className='text-sm text-pure-greys-400'>Publisher: <span className='font-bold'>{formDetails.publisherName}</span></p>
        </div>
        <div className='w-full flex justify-around mb-3'>
          <Link className='border rounded-md px-3 w-24 hover:shadow-lg text-center' to={"/viewform/"+formDetails._id}>Fill</Link>
          <Link className='border rounded-md  w-24 hover:shadow-lg text-center' to={"/viewformData/"+formDetails._id} >Responses</Link>
        </div>
    </div>
    
  )
}

export default FormCard