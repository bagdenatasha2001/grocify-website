import React from 'react'
import Heading from '../Heading/Heading.jsx'
import { FaHeart, FaLeaf, FaShieldAlt,FaSeedling } from "react-icons/fa";
import basket from '../../assets/images/basket-full-vegetables.png'




export default function Values() {

 const values = [
    {id:1,
    title:'Trust',
    para:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaHeart />
    },
    {id:2,
    title:'Always Fresh',
    para:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaLeaf />
    } ,
     
    {id:3,
    title:'Food Safety',
    para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon:<FaShieldAlt />
    } ,

    {id:4,
    title:'100% Organic',
    para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon:<FaSeedling/>
    },
]

const leftvalues = values.slice(0,2).map(item =>{
    return (
        <div   key={item.id} className=' flex md:flex-row-reverse items-center gap-7'>
            <div>
                <span className=' flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-white text-3xl'>
                    {item.icon}
                    </span>
            </div>

            <div className=' md:text-right'>
                <h3 className=' text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                <p className='text-zinc-600 mt-2'>{item.para }</p>
            </div>
        </div>
    )
})



const rightvalues = values.slice(2).map(item =>{
    return (
        <div key={item.id} className=' flex items-center  gap-7'>
            <div>
                <span className=' flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-white text-3xl'>
                    {item.icon}
                    </span>
            </div>

            <div className=' '>
                <h3 className=' text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                <p className='text-zinc-600 mt-2'>{item.para }</p>
            </div>
        </div>
    )
})

  return (
   <>
   <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>

        <Heading highlight='Our' heading='Values' />

        <div className=' flex md:flex-row flex-col gap-15 md:gap-5 mt-15 '>
            {/* left values */}
            <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
             {leftvalues}
            </div>

            {/* image */}

            <div className='md:flex w-1/2 hidden'>
                <img src={basket} alt="" />
            </div>


            {/* right values */}
            <div className='md:min-h-100  gap-15 flex flex-col justify-between'>
             { rightvalues}
            </div>

        </div>


    </div>

   </section>
   </>
      
   
  )
}
