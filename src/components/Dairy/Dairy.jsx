import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/images/Dairy-Banner.jpg'

export default function Dairy() {
  return (
    <div>
           <CategoryPage title= "Dairy & Eggs"   bgImage={BgDairy} categories={['Dairy']} />
  
    </div>
  )
}
