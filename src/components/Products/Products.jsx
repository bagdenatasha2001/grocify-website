import React, { useState } from 'react'
import Heading from '../Heading/Heading.jsx'
import productList from '../ProductList/ProductList.js'
import Cards from '../Cards/Cards.jsx'
import { Link } from 'react-router-dom'

useState

export default function Products() {

  const categories = ['All', 'Fruits','Vegetables','Dairy','SeaFood']
  const [ isActive , setIsActive] = useState("All")


  const filteredItems = isActive === 'All' ?  productList : productList.filter(item =>item.category === isActive)



    const rendercards = filteredItems.slice(0,8).map((products=>{

    return(
        <Cards image ={products.image} name={products.name} price={products.price}/>
    )
  }))


  return (
    <>
    <section>
        <div className=' max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading = "Products" className='' />

            {/* Tabs */}

            <div className=' flex  flex-wrap gap-3 justify-center mt-10'>
            {categories.map(category=>{
                return(
                    <button key={category} 
                    className={` text-lg py-2 px-5 rounded-lg cursor-pointer
                     ${isActive === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'} `}
                     onClick={()=>setIsActive(category)}
                     >
                     { category}
                    </button>
                )
            })}
             
            </div>


            {/* products listing */}
            <div className=' grid grid-cols-1  md:grid-cols-4 gap-9 mt-20'>
                {rendercards}
            </div>

            <div className=' mt-15 mx-auto w-fit'>
               
                <Link to = '/allproducts' className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View All
                 </Link>
            </div>

        </div>

    </section>
    </>
  )
}
