import React, { useEffect, useState } from 'react'
import AnswerBox from './AnswerBox'

const FieldBox = ({element,fieldNo,filedUpdationHandler}) => {
    const [fieldData,setFieldData] = useState(element)
    const dropDownChangeHandler = (event) => {
            setFieldData(prev => 
                (
                    {
                        ...prev,
                        [event.target.name]:event.target.value
                    }
                )               
            )
            
            
           
    }
    
    console.log(fieldData);
            useEffect(()=>{
                try
                {
                    filedUpdationHandler(fieldData,fieldNo);   
                }
                catch(error)
                {
                    console.log(error);
                }
            },[fieldData])

  return (
    <div className='my-3'>
        <div className='w-full flex justify-around gap-2'>
            <input name="fieldTitle" onChange={dropDownChangeHandler} className=' w-[70%] py-2 rounded-lg px-2' placeholder={'Quetion '+fieldNo}></input>
            <select name="fieldType" className='w-[30%] py-2 rounded-lg' value={fieldData.fieldType} onChange={dropDownChangeHandler}>
                <option value="text">Text</option>
                <option value="textarea">Paragprah</option>
                <option value="date">Date</option>
                <option value="radio">CheckBoxes</option>
                <option value="dropdown">DropDown</option>
            </select>
        </div>
        <AnswerBox fieldData={fieldData}></AnswerBox>
        <div className='w-4/5 h-1 bg-richblack-700 mx-auto mt-2'></div>
    </div>
  )
}

export default FieldBox