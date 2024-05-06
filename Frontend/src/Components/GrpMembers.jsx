import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGroup } from '../utils/groupSlice';
import { useNavigate } from 'react-router';

const GrpMembers = ({name}) => {
  // const [arrayGroupMembers, setArrayGroupMembers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick=()=>{
    // dispatch(addGroup(name));
    // console.log(name);
    navigate("/groups/transactions");
  }
 
  return (
    <div>
      <div className=' flex-col  w-60 h-56 bg-neutral-800 rounded-md p-2 '>
      <h1 className='font-bold text-xl'>Group Members</h1>
        <div>
            <ul>
              {name.map((f)=>(
                <li className=''>{f}</li>
              ))}
            </ul>
        </div>
      </div>
      <button className='h-6 w-32 text-center bg-neutral-800 rounded-xl hover:bg-neutral-900 mt-1 hover:font-bold'
        onClick={handleClick}
        >Create Group</button>
    </div>
  )
}

export default GrpMembers
