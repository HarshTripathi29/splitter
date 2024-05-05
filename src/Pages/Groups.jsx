import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainContainer from '../Components/MainContainer'

const Groups = () => {
  return (
    <div>
    <div className='flex h-screen w-screen overflow-hidden font-mono'>
      <Sidebar/>
      <MainContainer/>
    </div>
    </div>
  )
}

export default Groups
