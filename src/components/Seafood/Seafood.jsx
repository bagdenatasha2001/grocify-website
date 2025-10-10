import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'
import BgSeafood from '../../assets/images/seafood-banner.jpg'

export default function Seafood() {
  return (
    <div>
     <CategoryPage title= "Meat & Seafood"   bgImage={ BgSeafood } categories={['Meat', 'SeaFood']} />
    
    </div>
  )
}
