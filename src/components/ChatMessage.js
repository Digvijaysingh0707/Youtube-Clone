import React, { useEffect } from 'react'

const ChatMessage = ({ name, message }) => {

  
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
        className='h-8'
        alt='user'
        src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage