import React, { useEffect, useState } from 'react'
import FieldBox from '../common/FieldBox';
import { submitFormTemplate } from '../../services/operations/submitFormTemplate';

const FormCreationPage = () => {

   
    
    const [fieldCount,setFieldCount] = useState(1); 
    const [loader,setLoader] = useState(false);    
    const [currField,setCurrField] = useState({fieldTitle:"",value:"",fieldIndex:1,fieldType:"text",options:""});
    const [allFields,setAllFields] = useState([currField]);
    const [formMetaData,setFormMetaData] = useState({title:"",description:"",publisherName:""});
    

    const onClickHandler = (event) =>{
      event.preventDefault();
      setFieldCount((prev) => prev+1)
      setCurrField({fieldTitle:"",value:"",fieldIndex:fieldCount+1,fieldType:"text",options:""});
      setAllFields(prev => [...prev,currField]);
    }

    const fieldUpdationHandler = (fieldData,fieldNo) =>{
      const newAllFiels =  allFields.map((item,i) => (i==fieldNo-1 ? fieldData : item))
      setAllFields(newAllFiels);
    }

    const metaDataHandler = (event) =>
    {
      setFormMetaData((prev) =>{ return{ 
        ...prev,
        [event.target.name] : event.target.value
      }})
    }
    
    const formSubmitHandler =(event) =>
    {
      event.preventDefault();
      console.log("formMetaData",formMetaData);

      let newData = formMetaData;
      newData.AllFieldsJson = allFields;
      console.log("FinalFormTemplate",newData);

      setLoader(true);
      submitFormTemplate(newData,setLoader);

    }
    console.log("formMetaData",formMetaData);
    console.log("forFields",allFields);
  return (
    <div className="h-full min-w-screen mb-6  ">
    {
      loader ? <div className='loader mx-auto mt-72'></div> :(
        <>
        <h1 className='text-3xl text-center mt-5 font-bold mb-4'>Create Your Form</h1>
            <div className='w-10/12 h-full mx-auto'>
            <form className='flex flex-col gap-4'>

                <div className='w-10/12 h-full bg-blue-50 flex flex-col mx-auto gap-3 rounded-md'>
                <input name="title" id="formTitle" className='border mt-2 w-11/12 mx-auto rounded-md py-3 px-2 text-2xl'
                placeholder='Title' onChange={metaDataHandler} value={formMetaData.title}
                 ></input>
                <input name="description"   className='border w-11/12 mx-auto rounded-md py-2 px-2'
                placeholder='Description' onChange={metaDataHandler} value={formMetaData.description}
                ></input>
                <input id="publisherName" name='publisherName' className='border w-11/12 mx-auto mb-2  py-2 rounded-md px-2'
                placeholder='Name' onChange={metaDataHandler} value={formMetaData.publisherName}
                ></input>
                </div>

                 <div className='w-10/12 h-full h-min-[30px] bg-blue-50 flex flex-col mx-auto gap-3 rounded-md'>
                    
                    
                    <div className='w-11/12 mx-auto  rounded-md '>
                      {
                        allFields.map((field,index) =>(
                          <FieldBox element={field} key={index} fieldNo = {index+1} filedUpdationHandler={fieldUpdationHandler}/>
                        ))
                      }
                    </div>

                    <div className=' flex items-center w-11/12 mx-auto min-h-11'>
                      <span className='w-full h-1 bg-richblack-400'></span>
                      <button
                        onClick={onClickHandler}
                       className=' bg-brown-900 rounded-full text-white w-10 h-5 text-center place-content-center hover:scale-105 mx-2'>+</button>
                      <span className='w-full h-1 bg-richblack-400'></span></div>
                </div>

                
                <div className=' w-full flex justify-center'> 
                  <button onClick={formSubmitHandler}
                  className='bg-richblue-400 py-2 px-14 text-white text-xl rounded-md transition-all duration-500 hover:shadow-lg hover:scale-105'>Create</button>
                </div>
              </form>
            </div>
        </>

      )
    }
            
              
            
        </div>
  )
}

export default FormCreationPage