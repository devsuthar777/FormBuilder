import React, { useEffect, useState } from 'react'
import { viewFormTemplateCall } from '../../services/operations/viewFormTemplateCall';
import { useLocation, useParams } from 'react-router-dom';

const FormFillAndViewPage = () => {

    const [formData,setFormData] = useState({});
    const {formId} = useParams();

    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const formIdParam = queryParams.get("viewform");
    
    useEffect( () => {

      try
    {
        let dataApi = {};
        dataApi.formId = formId
        viewFormTemplateCall(dataApi);
    }
    catch(error)
    {
        console.log(error);
    }
  },[])
    

  return (
    <div className='min-w-screen min-h-screen '>
        <h1></h1>
        <div></div>
        <p></p>
        <div>

        </div>

    </div>
  )
}

export default FormFillAndViewPage