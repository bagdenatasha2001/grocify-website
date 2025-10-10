import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'
import BgDairy from '../../assets/images/dairy-banner.jpg'

export default function Dairy() {
  return (
    <div>
           <CategoryPage title= "Dairy & Eggs"   bgImage={BgDairy} categories={['Dairy']} />
  
    </div>
  )
}
