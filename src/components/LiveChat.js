import React from 'react'
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';


const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages)
  useEffect(()=>{
    const i = setInterval(()=>{
      console.log("Api Polling");
      dispatch(addMessage({
        name: generateRandomName(),
        message: "This is the youtube-clone app"
      }))
    },2000);
    return () => clearInterval(i);
  },[]);

  return (
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
        {//Disclaimer: don't use index as a key
          chatMessages.map((c, i)=> <ChatMessage key={i} name={c.name} message={c.message}/>)}
    </div>
  )
}

export default LiveChat;  