import React from 'react'

export default function Button(props) {
  return (
    <button className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 md:text-lg text-md rounded-lg 
    hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
      {props.content}
    </button>
  )
}
