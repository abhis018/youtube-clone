import React from 'react'
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    const i = setInterval(()=>{
      console.log("Api Polling");
      dispatch(addMessage({
        name: "abhishek kumar",
        message: "This is the youtube-clone app"
      }))
    },2000);
    return () => clearInterval(i);
  },[]);

  return (
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Abhishek kumar" message="This is youtube-clone app!"/>
    </div>
  )
}

export default LiveChat;