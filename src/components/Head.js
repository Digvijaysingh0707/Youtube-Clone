import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          className='h-12'
          alt='menu'
          src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
        />
        <img
          className='h-11 w-22 '
          alt='youtube-logo'
          src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'
        />

      </div>
      <div className='col-span-10 text-center'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200 '>
          Search
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='user'
          src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
      </div>
    </div>
  )
}

export default Head