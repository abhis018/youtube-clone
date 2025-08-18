import React from 'react';
import { FaCircleUser } from "react-icons/fa6";

const Comment = (data) => {
    const {name, text, replies} = data;
  return (
    <div>
        <FaCircleUser size={25} />
        <div>
            <p>Name</p>
            <p>Comment</p>
        </div>
    </div>
  )
}

export default Comment;