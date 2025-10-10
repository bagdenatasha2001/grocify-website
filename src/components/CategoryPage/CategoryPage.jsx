import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
// const categories = ['All', 'Fruits','Vegetables','Dairy','SeaFood']
export default function CategoryPage({title,bgImage,categories=[]}) {

    let filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter(item=>categories.includes(item.category))

    const renderProducts = filteredItems.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price ={product.price}/>
        )
    })

  return (
    <div>
        <Banner title={title} bgImage={bgImage}/>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
            {renderProducts}
            
        </div>
      
    </div>
  )
}
