import React, { useContext } from 'react'
import { storyDataContext } from '../context/StoryContext'

const Section = () => {
    const data=useContext(storyDataContext)
    console.log(data[3].user.username)
  return (
    <div className='w-full h-[61%] bg-cyan-900 p-10'>
      <h1 className='text-amber-50 text-4xl font-semibold font-mono'>Section ({data[3].user.name}) :- {data[3].user.username}</h1>
    </div>
  )
}

export default Section
