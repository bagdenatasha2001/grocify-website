import React from 'react'

export default function Heading(props) {
  return (
    <>
       < div className=' mx-auto w-fit'>
                <h2 className='md:text-5xl text-[2.5rem] text-zinc-800 font-bold'> 
                    <span className='text-orange-500'>{props.highlight} </span>{props.heading} </h2>
                    <div className='w-35 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto'></div>
            </div>
      
    </>
  )
}
