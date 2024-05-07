import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import FriendsList from '../Components/FriendsList'
import { useDispatch } from 'react-redux'
import { addFriend } from '../utils/friendSlice'

const Friends = () => {

  const [showNewFriend, setShowNewFriend] = useState(false)

  const [newFriend, setNewFriend] = useState({name : " ", description : " ", group : " ",})

  const [friendsList,setFriendsList] = useState([
    {
        id : 1,
        name : "Modi",
        description : "friend from india",
        group : "ally",
    },
    {
        id : 2,
        name : "Trump",
        description : "met in US",
        group : "ally",
    },
    {
        id : 3,
        name : "Putin",
        description : "god of Russia",
        group : "ally",
    },
]);

  const handleClick =()=>{
    setShowNewFriend(!showNewFriend);
  }

  const dispatch = useDispatch();

  const handleClickAddFriend =(e)=>{
    setFriendsList([...friendsList, newFriend]);
    dispatch(addFriend(newFriend));
  }

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setNewFriend((prevValues)=>({...prevValues, [name] : value,}));
  };

  console.log(newFriend);

  return (
    <div className='flex'>
    <Sidebar/>
    <div className='h-screen w-screen bg-neutral-900 text-white p-4'>
    <h1 className='font-bold text-3xl'>Friends</h1>
    <button  
    className='h-8 w-24 bg-neutral-800 rounded-xl hover:bg-neutral-900 hover:font-bold
    m-1 text-center cursor-pointer'
    onClick={()=>{handleClick()}}
      >Add Friend</button>
      {showNewFriend && (<div className='flex-col h-32 w-36 bg-neutral-800 text-white rounded-md
         m-2 p-2'>
        <input 
        placeholder='name' 
        className='h-6 w-32 p-1 border-none rounded mb-1 bg-neutral-900'
        name="name"
        value={newFriend.name}
        onChange={handleChange} />
        <input 
        placeholder='description' 
        className='h-6 w-32 p-1 border-none rounded mb-1 bg-neutral-900'
        name="description"
        value={newFriend.description} 
        onChange={handleChange}
        />
        <input 
        placeholder='group' 
        className='h-6 w-32 p-1 border-none rounded mb-1 bg-neutral-900'
        name="group"
        value={newFriend.group}
        onChange={handleChange} />  
        <button className='h-6 w-12 bg-neutral-800 rounded-md hover:bg-neutral-900 hover:font-bold 
        m-1 text-center cursor-pointer'
        onClick={(e)=>{handleClickAddFriend()}}>Add</button>
      </div>
      )}
      <div>
    <div className='flex flex-wrap'>
    {
      friendsList.map((f)=>(
        <>
        <div 
        className='flex-col h-24 w-36 bg-neutral-800 text-white rounded-md
         m-2 p-2'>
         <div className='font-bold'>{f.name}</div>
         <div>{f.description}</div>
         <div className='h-6 w-20 text-center bg-neutral-900 rounded-xl my-2'>{f.group}</div>
        </div>
         </>
    ))
    }
    </div>
    </div>
    </div>
    </div>
  )
}

export default Friends
