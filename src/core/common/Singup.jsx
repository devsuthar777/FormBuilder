import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {signup} from "../../services/operations/signup"
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { contWithGoogle } from '../../services/operations/contWithGoogle';
import { useDispatch } from 'react-redux';

const Singup = () => {

    const [formData,setFormData] = useState({name:"",email:"",password:"",confirmPassword:""});
    const [loader,setLoader] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitHandler  = (event) => {
        console.log(event);
        event.preventDefault();
        console.log(event);
        if(!ValiditionBeforeSumbit()) return false;

        signup(formData,setLoader,navigate);

        return false;
        
    }

    const ValiditionBeforeSumbit = () => {

        if(formData.name =="" || formData.email == "" || formData.password == "" || formData.confirmPassword == "")
        {
            toast.error("All Fields are mandatory!");
            return false;
        }

        console.log("validation");
        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Confirm password must be same");
            return false;
        }

        return true;
    }

    const formKeyPressHandler = (event) => {
        console.log(event.target.name,event.target.value);
        setFormData((prev) =>  ({...prev,[event.target.name] : event.target.value}))
    }

    
    const resolveHandler = (data) => {
        console.log( data);
        contWithGoogle(data.credential,setLoader,dispatch,navigate)

    }

    const rejectHandler = (err) => {
        console.log("error",err);
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
                <h1 className='text-3xl font-medium font-edu-sa'>Let's Start</h1>
        <p className='text-sm text-richblack-700'>Register your account to create and review the response in easy and secured way.</p>
        <form onSubmit={submitHandler} >
            <div className='flex flex-col gap-3' onKeyUp={formKeyPressHandler}>
            <div >
                <p className='text-sm font-semibold'>
                  Name
                </p>
                <input type='text' name="name"  className='w-[80%] h-8 px-2 rounded-md text-richblack-600 border border-richblack-300 '></input>
            </div>
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
                    <input type='password' name="password" placeholder='Password'  className='w-full h-8 px-2 rounded-md border border-richblack-300 '></input>
                    <input type='password' name="confirmPassword" placeholder='Confirm Password'  className='w-full h-8 px-2 rounded-md border border-richblack-300 '></input>
                </div>   
            </div>
            <div className='mt-5 flex gap-3 items-center justify-center '>
                <button type="submit" className='w-[50%] bg-[#162D3A] py-2 rounded-md text-white hover:text-richblack-100 transition-all delay-100 hover:border-richblack-500 border'>Sign Up</button>
                <div className='h-8 w-[2px] bg-richblack-500'></div>
                <Link className='text-sm hover:font-medium text-pink-700 underline ' to="/auth/login">Already a user?</Link>
            </div>
            </div>
        </form>
        
        <div className='w-full flex flex-col'>
            <span className='w-full flex items-center gap-2 '><div className='w-full h-[1px] bg-black'></div><p>Or</p><div className='w-full h-[1px] bg-black'></div></span> 
                <div className='mx-auto mt-6'>
                 <GoogleLogin
                 onSuccess={resolveHandler}
                 onError={rejectHandler}
                />
                </div>
        </div>
                    </>
            )
        }
        
    </div>
  )
}

export default Singup