import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../Categorypage/CategoryPage'
import BgSeafood from '../../assets/images/Seafood-Banner.jpg'

export default function Seafood() {
  return (
    <div>
     <CategoryPage title= "Meat & Seafood"   bgImage={ BgSeafood } categories={['Meat', 'SeaFood']} />
    
    </div>
  )
}
