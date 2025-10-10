import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFriuits from '../../assets/images/Fruits-Banner.jpg'

export default function Fruits() {
  return (
    <div>
       <CategoryPage title= "Fruits & Veggies"   bgImage={BgFriuits} categories={['Fruits' , 'Vegetables']} />
      
    </div>
  )
}
