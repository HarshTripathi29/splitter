import React, { useEffect, useState } from 'react'
import FriendsCards from './FriendsCards'
import GrpMembers from './GrpMembers'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const AddUsers = ({groupname}) => {

  const [searchText, setSearchText] = useState(" ");
  const [filterSearchText, setFilterSearchText] = useState(null);
  const [addToGrpArray, setAddToGrpArray] = useState([]);

  const friendsList = useSelector((store)=>store.friend);

  console.log(friendsList);
  const handleChange=(e)=>{
    setSearchText(e.target.value);
  }

  // if (!friendsList) return;
  const handleClick=async()=>{
  const filteredList = await friendsList.filter((f)=> f.name==searchText);
  setFilterSearchText(filteredList[0]);
  console.log(filterSearchText); 
  }

  const handleClickAddToGrp =()=>{
    setAddToGrpArray([...addToGrpArray,filterSearchText.name]);
  }
    
  return (
    <>
    <motion.div initial={{x:-5, opacity:0.5}} animate={{x:0, opacity:1}} className='mt-8 flex h-screen w-4/4 justify-between bg-neutral-900 ml-20'>
    <div className=''>
    <h1 className='font-bold text-2xl'>{groupname}</h1>
      <h1 className='text-xl font-semibold'>Search Friends</h1>
      <div>
        <input 
            type='text'
            placeholder='search friends'
            className='w-2/4 bg-neutral-800 border-none rounded-md mt-2 px-2 h-8'
            onChange={(e)=>{handleChange(e)}}
        />
        <button className='h-8 w-24 bg-neutral-800 rounded-md hover:bg-neutral-900 hover:font-bold
          m-1 text-center cursor-pointer'
          onClick={()=>{handleClick()}}>Search</button>
      </div>
      <div>
        <p>User Found</p>
        <>
        { filterSearchText && (
        <div 
        className='flex-col h-32 w-36 bg-neutral-800 text-white rounded-md
         m-2 p-2'>
         <div className='font-bold'>{filterSearchText.name}</div>
         <div>{filterSearchText.description}</div>
         <div className='h-6 w-20 text-center bg-neutral-900 rounded-xl my-1'>{filterSearchText.group}</div>
          <button className='h-6 w-20 text-center bg-neutral-900 rounded-xl '
          onClick={handleClickAddToGrp}
          >Add</button>
        </div>
        )}
         </> 
      </div>
      </div>
      <div>
        <GrpMembers name={addToGrpArray}/>
      </div>
    </motion.div>
    </>
  )
}

export default AddUsers
