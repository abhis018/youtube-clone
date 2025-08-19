import React from 'react';
import { FaCircleUser } from "react-icons/fa6";

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex bg-gray-100 shadow-sm p-2 rounded-lg my-2'>
        <FaCircleUser size={50} />
        <div className='px-3'>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment;