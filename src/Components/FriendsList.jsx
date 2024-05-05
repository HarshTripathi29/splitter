import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';

const FriendsList = () => {

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

    const newFreindObject = useSelector((store)=>{store.friend})

    const addObject = ()=>{
        setFriendsList([...FriendsList, newFreindObject]);
    }
    return (
    <div>
    <div className='flex flex-wrap'>
    {
      friendsList.map((f)=>(
        <>
        <div key={f.id}
        className='flex-col h-24 w-36 bg-stone-800 text-white rounded-md
         m-2 p-2'>
         <div className='font-bold'>{f.name}</div>
         <div>{f.description}</div>
         <div className='h-6 w-20 text-center bg-stone-900 rounded-xl my-2'>{f.group}</div>
        </div>
         </>
    ))
    }
    </div>
    </div>
  )
}

export default FriendsList
