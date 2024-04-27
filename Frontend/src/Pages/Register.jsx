import React from 'react'
import { useState } from 'react';

const Register = () => {

const [email, setEmail] = useState("");
const [phoneno, setPhoneno] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


  return (
    <div className='flex justify-center bg-stone-900 w-screen h-screen'>
    <div className='bg-stone-950 text-stone-500 flex flex-col justify-center m-8 p-4'>
    <div className='rounded-lg text-center'>
      <h1>Sign Up</h1>
      <h3>Enter your details to create an account</h3>
      <div className=''>
      <InputBox 
        label="email" 
        input="enter your email id"
         
        />
      <InputBox 
        label="phone number" 
        input="enter your phone number"
        onChange={(e)=>{setPhoneno(e.target.value)}}
        />
      <InputBox 
        label="username" 
        input="enter your username" 
        onChange={(e)=>{setUsername(e.target.value)}}
        />
      {console.log(username)}
      <InputBox 
        label="password" 
        input="enter your password"
        onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>
      <button className='bg-stone-800 m-4'>Submit</button>
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
