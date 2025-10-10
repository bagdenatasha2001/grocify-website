import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'
import BgFriuits from '../../assets/images/fruits-banner.jpg'

export default function Fruits() {
  return (
    <div>
       <CategoryPage title= "Fruits & Veggies"   bgImage={BgFriuits} categories={['Fruits' , 'Vegetables']} />
      
    </div>
  )
}
