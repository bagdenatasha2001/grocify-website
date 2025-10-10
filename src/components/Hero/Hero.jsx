import React from 'react'
import grocery from '../../assets/images/grocery.png'
import { Link } from 'react-router-dom'


export default function () {
  return (
    <>
    <section>
       <div className=' min-h-screen max-w-[1400px] mx-auto px-10  flex  md:flex-row flex-col items-center md:pt-25 pt-35'>
       
       {/* hero content */}
       <div  className='flex-1'>
        <span className=' bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality ...</span>
         
         <h1 className=' md:text-7xl/20 text-5xl/14 font-bold capitalize mt-4'>
            Testy  organic <span className=' text-orange-500'>fruits</span> & <span className=' text-orange-500'>veggies</span><br/>   in your city
         </h1>

         <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
           Bred for a high content of beneficial substances. Our products are all fresh and healthy.
         </p>
         
         {/* <Button  content="Shop Now"  /> */}
          <Link to='/product'className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>Shop Now
            </Link>
       </div>

       {/* hero image */}

       <div className='flex-1'>
        <img src={grocery} alt="hero img" />


       </div>


       </div>

    </section>




   </>
  )
}
