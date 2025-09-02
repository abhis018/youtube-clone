import React from 'react'
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  return (
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Abhishek kumar" message="This is youtube-clone app!"/>
        <ChatMessage name="Abhishek kumar" message="This is youtube-clone app!"/>
        <ChatMessage name="Abhishek kumar" message="This is youtube-clone app!"/>
        <ChatMessage name="Abhishek kumar" message="This is youtube-clone app!"/>
        <ChatMessage name="Abhishek kumar" message="This is youtube-clone app!"/>
    </div>
  )
}

export default LiveChat;