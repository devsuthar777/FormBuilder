import React, { useState } from 'react'
import OptionViewBox from './OptionViewBox';

const FieldViewBox = ({valData,element,index,size,subData,setSubData,onChangeFieldHandler}) => {

    console.log("viewData",element);
    console.log(valData);
    const [dataToDisplay,setDataToDisplay] = useState();
    const getContentBasedOnSwitchValue = (switchValue) => {
        switch (switchValue) {
          case 'text':
            return <input name={"field"+index} value ={valData[index]} className='w-full rounded-md py-1 mt-2 px-2' type='text' onChange={onChangeFieldHandler}></input>;
          case 'textarea':
            return <textarea name={"field"+index} value ={valData[index]} className='w-full rounded-md mt-2 px-2 py-1'  rows="3" cols="50" onChange={onChangeFieldHandler}></textarea>;
          case 'date':
            return <input name={"field"+index} value ={valData[index]} className='rounded-md mt-2 w-5/10 px-10 py-2' type='date' placeholder={"DD/MM/YYYY"} onChange={onChangeFieldHandler} ></input>;
           case 'radio':
             return <OptionViewBox element={element} valData={valData} onChangeFieldHandler={onChangeFieldHandler} index={index}></OptionViewBox>;
           case 'dropdown':
                return <OptionViewBox element={element} valData={valData} onChangeFieldHandler={onChangeFieldHandler} index={index}></OptionViewBox>;
        default: return <p>This is the default content.</p>;
        }
      };
  return (
    <div className='my-3 w-10/12 mx-auto'>
        <div className='w-full flex flex-col justify-around gap-2'>
            <p>{(index+1)+". "+element.fieldTitle}</p>
            <div>{getContentBasedOnSwitchValue(element.fieldType)}</div>
        </div>
        
    </div>
  )
}

export default FieldViewBox