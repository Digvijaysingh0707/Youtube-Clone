import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomeName } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch()
  const chatMessage = useSelector(store => store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomeName(),
          message: generateRandomMessage(20)
        })
      );

    }, 2000)
    return () => clearInterval(i);
  })
  return (
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessage?.map((message, i) => <ChatMessage key={i} name={message.name} message={message.message} />)}
      </div>
      <form className='w-full p-2 ml-2 border border-black flex' onSubmit={e => e.preventDefault()}>
        <input className='px-2 w-96 border border-black' type='text' value={liveMessage} onChange={e => setLiveMessage(e.target.value)} />
        <button className='px-2 mx-2 bg-gray-100' onClick={() => {
          dispatch(
            addMessage({
              name: "Digvijay Singh",
              message: liveMessage
            })
          );
          setLiveMessage('')
        }}>Send</button>
      </form>
    </>

  )
}

export default LiveChat