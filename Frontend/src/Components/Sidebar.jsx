import React from 'react'
import SideCards from './SideCards'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (

    <div>
      <motion.div 
      initial={{x:-50}} 
      animate={{x:-5}} 
      transition={{delay : 0.1, duration:0.5}}
      className='h-48 w-28 bg-neutral-800 flex flex-col rounded-md justify-top items-center'>
        <Link to="/groups"><SideCards title="Groups"/></Link>
        <Link to="/friends"><SideCards title="Friends"/></Link>
        <Link to="/activity"><SideCards title="Activity"/></Link>
        <Link to="/profile"><SideCards title="Profile"/></Link>
      </motion.div>
    </div>
  )
}

export default Sidebar
