import React, { useState } from 'react'

const SideCards = ({title}) => {


  return (
    <div>
      <div 
   
      className='flex items-center justify-center h-12 w-28 bg-transparent text-white 
       hover:font-bold hover:bg-neutral-900 cursor-pointer'
       >
        {title}
      </div>
    </div>
  )
}

export default SideCards
