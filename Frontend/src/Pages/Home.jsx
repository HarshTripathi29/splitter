import React from 'react'

const Home = () => {
  return (
    <div>
    <div className='flex flex-col justify-center bg-stone-900 border-2-yellow rounded-sm'>
    <div>
    <button className='bg-orange-700 text-white border-2-black rounded-sm w-24'>Get Started</button>
      <img src="" placeholder="friends" className='h-40 w-60'/>
      <div className='h-60 w-80 text-white'>
      Splitwise Clone is a group expense management web app, simplifying bill splitting 
      and tracking. Built with React and Tailwind CSS, it offers 
      an intuitive interface for managing groups, friends, and tracking expenditures
      </div>
      <div className='flex'>
        <div className='h-28 w-28 border-2 rounded-sm '>cards</div>
        <div className='h-28 w-28 border-2 rounded-sm '>cards</div>
        <div className='h-28 w-28 border-2 rounded-sm '>cards</div>
        <div className='h-28 w-28 border-2 rounded-sm '>cards</div>
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
