import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='h-12 w-screen bg-orange-500'>
    <motion.div 
    initial={{x:-50}}
    animate={{x:0}}
    transition={{delay:0.2, duration : 0.5}}
    className='text-4xl text-neutral-900 font-mono font-extrabold p-2'>
    Splitter
    </motion.div> 
    <div></div>
    </div>
  )
}

export default Navbar
