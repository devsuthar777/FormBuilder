import React from 'react'
import RadioOption from './RadioOption';
import DropDownOption from './DropDownOption';
import OptionBox from './OptionBox';

const AnswerBox = ({fieldData,setFieldData}) => {
    
    const getContentBasedOnSwitchValue = (switchValue) => {
        switch (switchValue) {
          case 'text':
            return <input className='w-full rounded-md py-1 mt-2' type='text' ></input>;
          case 'textarea':
            return <textarea className='w-full rounded-md mt-2 px-2 py-1'  rows="3" cols="50"></textarea>;
          case 'date':
            return <input className='rounded-md mt-2 w-5/10 px-10 py-2' type='date' placeholder={"DD/MM/YYYY"} ></input>;
          case 'radio':
            return <OptionBox></OptionBox>;
          case 'dropdown':
                return <OptionBox setFieldData={setFieldData}></OptionBox>;
        default: return <p>This is the default content.</p>;
        }
      };
      

  return (
    <div>
        <div>
            {
                getContentBasedOnSwitchValue(fieldData.fieldType)
            }
        </div>
    </div>
  )
}

export default AnswerBox