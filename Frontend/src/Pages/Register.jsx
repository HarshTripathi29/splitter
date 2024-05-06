import React from 'react'
import { useState } from 'react';

const Register = () => {

const [email, setEmail] = useState("");
const [phoneno, setPhoneno] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


  return (
    <div className='flex justify-center items-center bg-neutral-900 w-screen h-screen'>
    <div className='w-64 h-80 bg-neutral-950 text-neutral-500 flex flex-col justify-center rounded-md p-4'>
    <div className='rounded-lg text-center'>
      <h1 className='font-bold text-2xl text-white'>Sign Up</h1>
      <h3>Enter your details</h3>
      <div className='my-1'>
      <input   
        placeholder="email id"
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />
      <input
        placeholder="phone number"
        onChange={(e)=>{setPhoneno(e.target.value)}}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />
      <input
       
        placeholder="username" 
        onChange={(e)=>{setUsername(e.target.value)}}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />
      {console.log(username)}
      <input
        placeholder="password"
        onChange={(e)=>{setPassword(e.target.value)}}
        className='h-8 w-52 p-1 border-none rounded-md mb-2 bg-neutral-800'
        />
      </div>
      <button className='h-8 w-52 bg-neutral-800 rounded-md hover:bg-neutral-900 hover:font-bold
     text-center cursor-pointer'>Submit</button>
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
