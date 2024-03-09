import React, { useEffect, useState } from 'react'

const OptionBox = ({setFieldData}) => {

    const [optionCount,setOptionCount] = useState(0);
    const [optionData,setOptionData] = useState();
    const [optionFields,setOtionFields]=useState([""]);

    useEffect(()=>{
        setFieldData(currField => 
            {
                let newObject = {};
                
                for(let i=0;i<optionFields.length; i++)
                {
                    newObject["option"+i] =   optionFields[i];
                }
               

                
                 console.log("newCurrField",currField);
                currField.options = JSON.stringify(newObject)
                 return currField

             } );
    },[optionFields])

    const valChangeHandler = (event) =>
    {
            console.log("hello",event.target.name.replace("option",""));
            setOtionFields((data )=> {
                                        const newArray = [...data];
                                        newArray[event.target.name.replace("option","")] =event.target.value;

                                      return newArray;
            
                                      
                                    });
            

    }

    const fieldAddHandler = (event) =>
    {
        event.preventDefault();
        setOtionFields(prev => [...prev,""]);
        setOptionCount(prev => prev+1);   
    }

    const fieldRemoveHandler = (event) =>
    {
        event.preventDefault();
        setOtionFields(prev => [...prev,""]);
        setOptionCount(prev => prev+1);
    }
    console.log(optionFields,optionCount);
    console.log()
  return (
       
        <div>
            {
                optionFields.map((element,index) => (
                    <div key={index} className='mt-2 flex gap-2 justify-start items-center'>
                        <input className='rounded-lg w-1/3 px-2 ' name={"option"+index} 
                        onChange={valChangeHandler}
                        placeholder={"Option "+(index+1)}></input>
                        <div className='flex gap-3'>
                        {
                            optionCount == index ? (<><button  onClick={fieldAddHandler} className='w-5 h-5 font-bold text-sm bg-richblack-25 text-richblue-800 hover:scale-105 hover:shadow-xl flex text-center items-center justify-center rounded-full '><span className='mx-auto my-auto'>+</span></button>
                            <button  onClick={fieldAddHandler} className='w-5 h-5 bg-richblack-25 font-bold text-xl text-richblue-800 hover:scale-105 hover:shadow-xl flex items-center justify-center text-center rounded-full'><span >-</span></button>
                            </>) : (<div></div>)
                        }
                        </div>
                    </div>
                 ))
            }
        </div>
   
  )
}

export default OptionBox