import React from 'react'
import CategoryPage from '../Categorypage/CategoryPage'
import BgAll from '../../assets/images/all-banner.jpg'


export default function Allproducts() {
  return (
    <div>
        <CategoryPage  title= "All Products" bgImage={BgAll} categories={['All']} />
    </div>
  )
}
