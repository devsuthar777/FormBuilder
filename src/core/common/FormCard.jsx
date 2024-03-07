import React from 'react'

const FormCard = ({formDetails}) => {
  return (
    <div  className='w-72 bg-richblue-25 h-max rounded-lg'>
        <div className='w-60 h-44   mx-auto flex flex-col gap-2'>
          <h2 className='text-xl font-bold w-full text-center my-5 '>{formDetails.title}</h2>
          <p className='text-xs text-pure-greys-400'>{formDetails.description}</p>
          <p className='text-sm text-pure-greys-400'>Publisher: <span className='font-bold'>{formDetails.publisherName}</span></p>
        </div>
        <div className='w-full flex justify-around mb-3'>
          <button className='border rounded-md px-3 w-24 hover:shadow-lg text-center'>Fill</button>
          <button className='border rounded-md px-3 w-24 hover:shadow-lg text-center' >Responses</button>
        </div>
    </div>
    
  )
}

export default FormCard