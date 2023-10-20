import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const dispatch = useDispatch()

  const searchCache = useSelector(store => store.search)

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestions(json?.[1])
    dispatch(cacheResults({
      [searchQuery]: json?.[1]
    }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      }
      else getSearchSuggestion()
    }, 200)
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery])
  return (
    <div className='grid grid-flow-col m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-12 cursor-pointer'
          alt='menu'
          src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
        />
        <a href='/'>
          <img
            className='h-11 w-22 '
            alt='youtube-logo'
            src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'
          />
        </a>

      </div>
      <div className='col-span-10 text-center'>
        <div>
          <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200 '>
            Search
          </button>
        </div>

        {showSuggestions && <div className='fixed bg-white py-2 px-2 w-[35rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions && suggestions?.map(s => <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>{s}</li>)}
          </ul>
        </div>}

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