import React, { useEffect, useState } from 'react'
import { retriveFormTemplates } from '../../services/operations/retriveFormTemplates';
import FormCard from '../common/FormCard';

const AllFormsPage = () => {
    
    const [loader,setLoader] = useState(false);
    const [formTemplates,setFormTemplates] = useState([]);

    useEffect( () => {

        retriveFormTemplates(setLoader,setFormTemplates);
    },[])

    console.log("FormTemplates",formTemplates);




    
  return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center ">
            <h1 className='text-3xl mt-3 font-bold'>All Form Templates</h1>
            <div className='w-40 h-1 bg-richblack-500 mt-2'></div>
            <p className='text-sm text-richblue-200 mt-2'>View All the templates, submit your response or view other's Responses</p>
            {
                loader ? (<div className='loader  mx-auto'></div>) : (
                        <div className="w-10/12 min-h-[500px] mb-11 bg-blue-50 mt-8 rounded-xl gap-7 mx-auto flex flex-wrap items-center justify-center p-6" >
                            {
                                formTemplates.length ?  formTemplates.map((element,index) => (
                                    <FormCard formDetails={element} key={index} />
                                )) : <p className='text-xl font-bold'>No forms To show, Please create form first</p>

                            }
                        </div>
                        )
            }
        </div>
   
  )
}

export default AllFormsPage