import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Register = () => {

const[isSignUpForm, setIsSignUpForm] = useState(true);

const email = useRef();
const password = useRef();
const phoneno = useRef();
const username = useRef();

const dispatch = useDispatch();

const handleClick =()=>{
  dispatch(addUser({
  name : username.current.value,
  email : email.current.value,
  phonenumber : phoneno.current.value,
  password : password.current.value,
}))
}

const toggleSignUp=()=>{
  setIsSignUpForm(!isSignUpForm);
  console.log(isSignUpForm);
}

  return (
    <div className='flex justify-center items-center bg-neutral-900 w-screen h-screen'>
    <div className='w-64 h-84 bg-neutral-950 text-neutral-500 flex flex-col justify-center rounded-md p-4'>
    <div className='rounded-lg text-center'>
      <h1 className='font-bold text-2xl text-white'>{isSignUpForm? "Sign Up" : "Sign In"}</h1>
      <h3>Enter your details</h3>
      <div className='my-1'>
      {isSignUpForm && (<input   
        placeholder="email id" 
        ref={email}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />)}
      
      {isSignUpForm && ( <input
        placeholder="phone number"
        ref={phoneno}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />)}
      
      <input
        placeholder="username" 
        ref={username}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />
      {console.log(username)}
      <input
        placeholder="password"
        ref={password}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />
      </div> 
      <button className='h-8 w-52 bg-neutral-800 rounded-md hover:bg-neutral-900 hover:font-bold
     text-center cursor-pointer'
     onClick={handleClick}>Submit</button>
     <div className='pt-2 cursor-pointer' onClick={toggleSignUp}>{isSignUpForm? "Already Registered ? Login" : "New here ? Register"}</div>
    </div>
    </div>
    </div>
  )
}

const InputBox = ({label, input})=>{
  return(
    <>
    <div className='text-black'></div>
     <div>{label}</div>
      <input placeholder={input}/>
    </>
  )
}

export default Register
