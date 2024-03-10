import React, { useEffect, useMemo, useState } from 'react'
import { viewFormTemplateCall, viewFormTemplateData } from '../../services/operations/retriveFormTemplates';
import { useLocation, useParams } from 'react-router-dom';
import FieldViewBox from '../common/FieldViewBox';
import { submitFormTemplateData } from '../../services/operations/submitFormTemplate';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const FormFillAndViewPage = () => {

    const [formData,setFormData] = useState({});
    
    const [viewData,setViewData] = useState([]);
    const [loader,setLoader] = useState(true);
    const {formId} = useParams();
    const location = useLocation();
    const viewDataFlag = location.pathname.includes("viewformData");
    const [subData,setSubData] = useState([]);
    const [currViewData,setCurrViewData] = useState([]);
    const [counter,setCounter] = useState(0);    


    useEffect(() => {
      if(viewData.length) {
        console.log(viewData)
       let viewDataArrayString = viewData[counter].formValue[0];
       viewDataArrayString = viewDataArrayString.split("##$$");
       console.log("viewDataArrayString",viewDataArrayString);
       setCurrViewData(viewDataArrayString);
      }
    },[viewData]);

    useEffect( () => {

        viewFormTemplateCall(formId,setLoader,setFormData,setSubData,viewDataFlag,setViewData);
       
    },[])

    function onChangeFieldHandler(event)
    {
      const newAllFiels =  subData.map((item,i) => (i==event.target.name.replace("field","") ? event.target.value : item))
      setSubData(newAllFiels);
     
    }
    
    function onSubmitHandler(event)
    {
      event.preventDefault();
      let newStringData = "";
      for(let elementData of subData)
      {
        newStringData=newStringData+"##$$"+elementData;
      }
      newStringData=newStringData.replace("##$$","");
      
      submitFormTemplateData(formId,newStringData,setLoader);

    }

    function navigateHandler(event)
    {
      event.preventDefault();
      console.log(event.currentTarget.id);
      if(event.currentTarget.id=="navRight")
      {
        console.log(counter)
        //setCounter(prev=> prev+1==viewData.length ? prev : ++prev);
        setCounter(prev=> prev+1);
        let viewDataArrayString = viewData[counter+1].formValue[0];
        viewDataArrayString = viewDataArrayString.split("##$$");
        console.log("viewDataArrayString",viewDataArrayString);
        setCurrViewData(viewDataArrayString);
      

      }
      else
      {
        //setCounter(prev=> prev==0 ? 0 : --prev);
        setCounter(prev=> prev-1);
        let viewDataArrayString = viewData[counter-1].formValue[0];
        viewDataArrayString = viewDataArrayString.split("##$$");
        console.log("viewDataArrayString",viewDataArrayString);
        setCurrViewData(viewDataArrayString);
      }

    }

    console.log(viewDataFlag,viewData);
    console.log("currRentDataToView",currViewData);
  return (

    loader ? (<div className='loader mx-auto mt-52'></div>) : (
      <form className='min-w-screen min-h-screen '>
        <h1 className='text-4xl text-center mt-4 font-bold'>{formData.title}</h1>
        <div className='w-40 h-1 bg-richblack-500 mx-auto mt-3'></div>
        <p className='text-md text-center mt-4 w-1/2 mx-auto text-richblack-400'>{formData.description}</p>
        
        <div className='w-full flex   items-center justify-center gap-5'>
            { 
              (viewDataFlag && viewData.length > 1 && counter!=0) ? <button id="navLeft" onClick={navigateHandler} className='hover:shadow-xl h-max text-4xl  rounded-full hover:scale-105 '><FaArrowAltCircleLeft/></button> : <div className='p-5'></div>}
          <div className='w-8/12 min-h-[300px] bg-blue-50 rounded-lg mt-3 py-5' >
            {
            
              formData?.formFields.length>0 ? (formData?.formFields.map((element,index) =>(
              <FieldViewBox valData={currViewData} element={element} key={index} index={index} size={formData?.formFields} 
              setSubData ={setSubData} onChangeFieldHandler={onChangeFieldHandler} subData={subData}></FieldViewBox>) 
            ))  : (<div></div>)
            
            }
          </div>
          { (viewDataFlag && viewData.length > 1 && counter+1!=viewData.length) ? <button id="navRight" onClick={navigateHandler} className='hover:shadow-xl text-4xl h-max rounded-full hover:scale-105'><FaArrowAltCircleRight/></button> : <div  className='p-5'></div>}
        </div>
        
        <div className=' w-full flex justify-center mt-3 mb-12'> 
                  {
                    (viewDataFlag) ? (<div className='w-1/2 mx-auto flex  justify-center items-center gap-6'>
                                        <span className='text-3xl text-centeral flex  items-center justify-center text-white bg-richblack-300 rounded-full w-12 h-12'>  {viewData.length ? counter+1 : 0}
                                        </span>
                                          <span className='text-3xl border-b-2'>OF </span>
                                        <span className='text-3xl text-centeral flex  items-center justify-center text-white bg-richblack-300 rounded-full w-12 h-12'>
                                        {viewData.length}
                                        </span></div>
                                        ) : ( <button onClick={onSubmitHandler}
                  className='bg-richblue-400 mt-4 py-2 px-14 text-white text-xl rounded-md transition-all duration-500 hover:shadow-lg hover:scale-105'>Submit</button>
                    )
                  }
        </div>
    </form>
    )
    
  )
}

export default FormFillAndViewPage