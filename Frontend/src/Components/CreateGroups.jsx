import React, { useState } from 'react'
import Button from './Button'
import GroupCard from './GroupCard';
import { motion } from 'framer-motion';

const CreateGroups = () => {

  const[showGroupCard, setShowGroupCard] = useState(false);
  const[createGroup, setCreateGroup] = useState("");
  const[showCreateGrp, setShowCreateGrp] = useState(true);

  const handleCreateClick=()=>{
    setShowGroupCard(true);
    // setShowCreateGrp(false);
  }

  const handleCancelClick=()=>{
    setShowGroupCard(false);
  }

  const handleChange=(e)=>{
    setCreateGroup(e.target.value);
    console.log("CreateGroup");
  }

  return (
    <div>
      <motion.div initial={{x:-5, opacity:0.5}} animate={{x:0, opacity:1}} className='w-4/4 h-screen bg-neutral-900'>

      {showCreateGrp && (<>
        <h1 className='text-2xl text-white mt-8 font-bold'>Create Group</h1>
        <input 
            type='text' 
            placeholder='enter group name'
            className='w-1/5 bg-neutral-800 border-none rounded-md mt-2 h-8 px-2'
            onChange={handleChange}
        />
        <div className='flex'>

        <button 
        className='h-8 w-24 bg-neutral-800 border-none rounded-md hover:bg-neutral-900 hover:font-bold
        mt-1 mr-1 text-center cursor-pointer'
        onClick={handleCreateClick}
        >Create</button>

       <button 
        className='h-8 w-24 bg-neutral-800 border-none rounded-md hover:bg-neutral-900 hover:font-bold
        mt-1 mr-1 text-center cursor-pointer'
        onClick={handleCancelClick}
        >Cancel</button>
        </div>

        </>)}
        {showGroupCard && <GroupCard grpname={createGroup}/>}
       
      </motion.div>
    </div>
  )
}

export default CreateGroups
