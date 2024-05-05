import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { login } from '../../services/operations/login';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData,setFormData] = useState({email:"",password:""});
    const [loader,setLoader] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler  = (event) => {
        console.log(event);
        event.preventDefault();
        console.log(event);
        if(!ValiditionBeforeSumbit()) return false;

        login(formData,setLoader,dispatch,navigate);

        return false;
        
    }

    const ValiditionBeforeSumbit = () => {

        if(formData.email == "" || formData.password == "" )
        {
            toast.error("All Fields are mandatory!");
            return false;
        }

        console.log("validation");
        

        return true;
    }

    const formKeyPressHandler = (event) => {
        console.log(event.target.name,event.target.value);
        setFormData((prev) =>  ({...prev,[event.target.name] : event.target.value}))
    }

  return (
    <div className='w-[80%] mt-3 mx-auto flex flex-col gap-4 h-full'>

        {
            loader ? (
                <div className='w-full  flex items-center justify-center h-full'>
                    <div className='loader'></div>
                </div>       
            )
            : 
            (
                <>
                <h1 className='text-3xl font-medium font-edu-sa'>Welcome back</h1>
        <p className='text-sm text-richblack-700'>Login your account to create and review the response in easy and secured way.</p>
        <form onSubmit={submitHandler} >
            <div className='flex flex-col gap-3' onKeyUp={formKeyPressHandler}>
           
            <div>
                <p className='text-sm font-semibold'>
                  Email
                </p>
                <input type='email' name="email"  className='w-[80%] h-8 px-2 rounded-md border border-richblack-300 '></input>
            </div>
            <div>
                <p className='text-sm font-semibold'>
                  Password
                </p>
                <div className='flex gap-1'>
                    <input type='text' name="password" placeholder='Password'  className='w-full h-8 px-2 rounded-md border border-richblack-300 '></input>
                </div>   
            </div>
            <div className='mt-5 flex gap-3 items-center justify-center '>
                <button type="submit" className='w-[50%] bg-[#162D3A] py-2 rounded-md text-white hover:text-richblack-100 transition-all delay-100 hover:border-richblack-500 border'>Login</button>
                <div className='h-8 w-[2px] bg-richblack-500'></div>
                <Link className='text-sm hover:font-medium text-pink-700 underline ' to="/auth/signup">New? Create Account</Link>
            </div>
            </div>
        </form>
        
        <div className='w-full flex flex-col'>
               <span className='w-full flex items-center gap-2 '><div className='w-full h-[1px] bg-black'></div><p>Or</p><div className='w-full h-[1px] bg-black'></div></span> 

               <div><p className='font-bold'>Login with</p>  <button></button></div>
        </div>
                </>
            )
        }
        
    </div>
  )
}

export default Login