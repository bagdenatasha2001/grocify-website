import React from 'react'
import Heading from '../Heading/Heading'
import fruitscat from '../../assets/images/fruits-and-veggies.png'
import dairycat from '../../assets/images/dairy-and-eggs.png'
import seafoodcat from '../../assets/images/meat-and-seafood.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function Category() {

const category = [
    { id:1,
      title:'Fruits & Veggies',
      description:'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
      image:fruitscat,
      path:'/fruits'
    },
    { id:2,
      title:'Dairy & Eggs',
      description:'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
      image:dairycat,
      path:'/dairy'
    },
    { id:3,
      title:'Meat & SeaFood',
      description:'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
      image:seafoodcat,
       path:'/seafood'
    },]

    const renderCards = category.map(card=>{
        return(
                 //card
            <div className='flex-1 basis-[300px] ' key={card.id}>
                {/* card image */}
                <div className=' w-full min-h-[30vh] relative -mb-10'>
                   <img src={card.image} alt=""  className='bottom-0 absolute'/>
                </div> 

                {/*card content */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className=' text-zinc-800 font-bold text-3xl'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    {/* <Button content=" See All"/> */}
                    <Link to={card.path} className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All
                    </Link>
                  
                </div>

            </div>

        )
    })



  return (
    <>
    <section>
        <div className=' max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="shop" heading = "by category" />
            
            {/* category cards */}
            <div className='flex flex-wrap  gap-10 md:mt-15 '>
                {renderCards}
             </div>
        </div>
    </section>
      
    </>
  )
}
