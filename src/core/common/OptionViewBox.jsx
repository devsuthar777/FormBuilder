import React, { useEffect, useState } from 'react'

const OptionViewBox = ({element,valData,onChangeFieldHandler,index}) => {

  console.log("allOptions",element,valData[0],index);
  const [allOptions,setAllOptions] = useState([]);
  
  const [checkBoxData,setCheckBoxData]= useState({});

  useEffect((event)=>{
   
    let options = JSON.parse(element.options);
    console.log(options);      
    let arrayElement = [];
    Object.values(options).forEach(value => {
    arrayElement.push( value);
    setAllOptions(arrayElement);
    if(element.fieldType !="dropdown")
    {
          try
          {
            setCheckBoxData(valData[index] ? JSON.parse(valData[index]) : {});
          }
          catch(error)
          {

          }
    } 
    
  });
 
  },[valData])


   useEffect ( () => {
      let event = {target:{name:"field"+index,value: "0"}};
      if(element.fieldType =="dropdown") onChangeFieldHandler(event);

    
  
   },[])

const checkChangeHanlder = (event) => {
  console.log(event.target.name,event.target.checked);
  setCheckBoxData((prev) => 
   {
    let newObject = {...prev,[event.target.name]:event.target.checked};
  
    onChangeFieldHandler({target:{name:"field"+index,value:JSON.stringify(newObject)}});
    return newObject;
   }
  )
}
console.log("allOptions",checkBoxData,valData[index]);



  return (
    <div className='w-full'>
    {
      element.fieldType == "dropdown" ? (
        <select className='min-w-[30%] px-5 h-10 text-lg rounded-lg' name={"field"+index} onChange={(event) =>onChangeFieldHandler(event)} value={valData[index] } >
          {
            allOptions.map((val,ind) => {
              
            return <option value={ind} >{val}</option>
          })
          }
        </select>
      
      ) : (<div className='w-2/3  gap-3'>
        {
            allOptions.map((val,ind) => {
            return <div>
            <label className='w-1/2 text-xl text-center flex items-center gap-3'>
             <input
             className='rounded-full w-5 h-5'
              type="checkbox"
              id={"option"+ind}
              name={"option"+ind}
              value={ind}

              checked={checkBoxData["option"+ind] ? checkBoxData["option"+ind]  : false }
              onChange={checkChangeHanlder}
              />
         <spna>{"  "+val}</spna> 
      </label>
            </div>
          })
        }
      </div>)
      
    } 
    </div>
    
  )
}

export default OptionViewBox