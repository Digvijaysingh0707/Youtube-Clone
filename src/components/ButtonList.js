import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking",]
  return (
    <div className='flex'>
      {list.map((name, i) => {
        return (
          <Button key={i}  name={name} />
        )
      })}
    </div>
  )
}

export default ButtonList