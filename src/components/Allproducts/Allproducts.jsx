import React from 'react'
// import CategoryPage from '../../components/CategoryPage/CategoryPage'
import BgAll from '../../assets/images/all-banner.jpg'
import CategoryPage from '../Categorypage/CategoryPage'


export default function Allproducts() {
  return (
    <div>
        {/* <CategoryPage  title= "All Products" bgImage={BgAll} categories={['All']} /> */}
        <CategoryPage   title= "All Products" bgImage={BgAll} categories={['All']}/>
    </div>
  )
}
