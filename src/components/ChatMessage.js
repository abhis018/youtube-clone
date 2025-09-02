import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-1'>
        <img className="w-7 rounded-full" src='https://yt4.ggpht.com/ytc/AIdro_nuNlfceTDiBSTQUhxQ56YDJFbBu1DjRfTpJMFP6ck9D0x3tsglom8eMUA2blBLpRVU8w=s64-c-k-c0x00ffffff-no-rj' alt='icon'/>
        <p className='font-bold px-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage;