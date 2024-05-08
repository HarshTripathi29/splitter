import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { checkValidData } from '../utils/vailidate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Register = () => {

const[isSignUpForm, setIsSignUpForm] = useState(true);
const[errorMessage, setErrorMessage] = useState(" ");

const email = useRef();
const password = useRef();
const phoneno = useRef();
const username = useRef();

const dispatch = useDispatch();

const handleClick =()=>{

  const message = checkValidData(email.current.value, password.current.value);
  console.log(message);
  setErrorMessage(message);
 
  if(message) return

if(isSignUpForm){
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" - " + errorMessage);
    // ..
  });
  
  console.log(errorMessage);
}  

else {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// if(errorMessage==" ")
//   {
//   dispatch(addUser({
//   name : username.current.value,
//   email : email.current.value,
//   phonenumber : phoneno.current.value,
//   password : password.current.value,
// }))}
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
     <div>{errorMessage}</div>
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
