import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen font-mono bg-neutral-900'>
    <div className='flex flex-col items-center bg-neutral-900'>
    <div className='flex flex-col items-center bg-neutral-900 w-3/4 h-screen'>
    <Link to="/groups">
    <button className='bg-neutral-700 text-xl text-orange-600 font-bold border-2-black rounded-xl w-36 h-8 mt-4'>
      Get Started
    </button>
    </Link>

      <img src="https://img.freepik.com/free-vector/hand-drawn-group-people-background-composition_23-2149196877.jpg?w=2000" 
      placeholder="friends" className='h-40 w-60 m-4'/>

      <div className='h-24 w-4/5 text-white bg-neutral-900'>
      Splitter is a group expense management web app, simplifying bill splitting 
      and tracking. Built with React and Tailwind CSS, it offers 
      an intuitive interface for managing groups, friends, and tracking expenditures.
      </div>

      <div className='flex m-4'>
        <div className='h-28 w-28 border-2 rounded-sm m-2 bg-neutral-600'>info cards</div>
        <div className='h-28 w-28 border-2 rounded-sm m-2 bg-neutral-600'>info cards</div>
        <div className='h-28 w-28 border-2 rounded-sm m-2 bg-neutral-600'>info cards</div>
        <div className='h-28 w-28 border-2 rounded-sm m-2 bg-neutral-600'>info cards</div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default Home

/*
button
image
text box
4 mini text boxes in a row
*/
