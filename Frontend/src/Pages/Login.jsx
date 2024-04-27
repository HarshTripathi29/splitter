import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center bg-stone-900 w-screen h-screen'>
    <div className='bg-stone-950 text-white flex flex-col justify-center m-8 p-4'>
    <div className='rounded-lg text-center'>
      <h1>Sign In</h1>
      <h3>Enter your details to create an account</h3>
      <div className=''>
      <InputBox label="username" input="enter your username"/>
      <InputBox label="password" input="enter your password"/>
        <div>username</div>
        <input placeholder='username'/>
        <div>password</div>
        <input placeholder='password'/>
      </div>
      <button className='bg-stone-800 m-4'>Submit</button>
    </div>
    </div>
    </div>
  )
}

export default Login
