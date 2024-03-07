import React, { useEffect, useState } from 'react'
import { retriveFormTemplates } from '../../services/operations/retriveFormTemplates';
import FormCard from '../common/FormCard';

const AllFormsPage = () => {
    
    const [loader,setLoader] = useState(true);
    const [formTemplates,setFormTemplates] = useState([]);

    useEffect(async ()=>{
        const formArray = await retriveFormTemplates();
        if(formArray.length)
        {
            setFormTemplates(formArray);
        }
        console.log(formTemplates);
        setLoader(false);
    },[])


    
  return (
        <div className="w-screen h-screen flex flex-col items-center justify-center ">
            <h1 className='text-3xl'>All Form Templates</h1>
            <p className='text-sm text-richblue-200 mt-2'>View All the templates, submit your response or view other's Responses</p>
            {
                loader ? (<div className='loader  mx-auto'></div>) : (
                        <div className="w-10/12 h-[500px] bg-blue-50 mt-8 rounded-xl gap-7 mx-auto flex p-6" >
                            {
                                formTemplates.map((element,index) => (
                                    <FormCard formDetails={element} key={index} />
                                ))
                            }
                        </div>
                        )
            }
        </div>
   
  )
}

export default AllFormsPage