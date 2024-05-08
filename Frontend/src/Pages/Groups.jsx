import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import MainContainer from '../Components/MainContainer'
import { motion } from 'framer-motion'

const Groups = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick=()=>{
    setShowSidebar(!showSidebar);
  }

  return (
    <div className='bg-neutral-900 absolute'>
    <motion.div 
    initial={{y:50, opacity:0.5}}
    animate={{y:0, opacity:1}}
    transition={{delay:0.1, duration:0.5}}
    className='flex h-screen w-screen overflow-hidden font-mono'>  
    <div className='py-2 '>
        <button 
        onClick={handleClick}
        className='h-6 w-16 text-center bg-neutral-800 text-white '>Show</button>
      {showSidebar && (<Sidebar/>)}
      </div>
      <MainContainer/>
    </motion.div>
    </div>
  )
}

export default Groups
