import React from 'react'
import BgAll from '../../assets/images/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'


export default function Allproducts() {
  return (
    <div>
        <CategoryPage   title= "All Products" bgImage={BgAll} categories={['All']}/>
    </div>
  )
}
