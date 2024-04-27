import React from 'react'
import SideCards from './SideCards'

const Sidebar = () => {
  return (
    <div>
      <div className='h-screen w-48 bg-stone-800 flex flex-col justify-top pt-6 items-center'>
        <SideCards title="Groups"/>
        <SideCards title="Friends"/>
        <SideCards title="Activity"/>
        <SideCards title="Title"/>
      </div>
    </div>
  )
}

export default Sidebar
