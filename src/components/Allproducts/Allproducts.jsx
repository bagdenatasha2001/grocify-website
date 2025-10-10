import React from 'react'
import BgAll from '../../assets/images/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'


export default function Allproducts() {
  return (
    <div>
        <CategoryPage   title= "All Products" bgImage={BgAll} categories={['All']}/>
    </div>
  )
}
