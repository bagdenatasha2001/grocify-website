import React from 'react'
import Hero from '../Hero/Hero.jsx'
import Category from '../Category/Category.jsx'
import Values from '../Values/Values.jsx'
import Products from '../Products/Products.jsx'
import Discount from '../Discount/Discount.jsx'
import Process from '../Process/Process.jsx'
import Testimonials from '../Testimonials/Testimonials.jsx'

export default function Home() {
  return (
    <div>
        
        <Hero/>
        <Category/>
        <Values/>
        <Products/>
        <Discount/>
        <Process/>
        <Testimonials/>
     
    </div>
  )
}
