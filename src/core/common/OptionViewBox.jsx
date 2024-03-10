import React, { useEffect, useState } from 'react'

const OptionViewBox = ({element,valData,onChangeFieldHandler,index}) => {

  console.log("allOptions",element);
  const [allOptions,setAllOptions] = useState([""]);


  useEffect(()=>{
   
    let options = JSON.parse(element.options);
    console.log(options);      
    let arrayElement = [];
    Object.values(options).forEach(value => {
    arrayElement.push( value);
    setAllOptions(arrayElement);
  });
 
  },[])


console.log("allOptions",allOptions);


  return (
    <div className='w-full'>
    {
      element.fieldType == "dropdown" ? (
        <select className='min-w-[30%] px-5 h-10 text-lg rounded-lg' name={"field"+index} onChange={onChangeFieldHandler} value={valData[index]} >
          {
            allOptions.map((val,index) => {
            return <option value={index} >{val}</option>
          })
          }
        </select>
      
      ) : (<div></div>)
      
    } 
    </div>
    
  )
}

export default OptionViewBox