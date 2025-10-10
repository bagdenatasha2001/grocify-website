import React from 'react'
import Banner from '../components/Banner/Banner.jsx'
import BgAbout from '../assets/images/about-banner.avif'

export default function About() {
  return (
    <div>
     <Banner title=" About Us"   bgImage={ BgAbout}/>

     <div className="py-12 px-6 text-center">
      {/* <h1 className="text-4xl font-bold mb-4 text-orange-600">About Us</h1> */}
      <p className="text-gray-700 max-w-3xl mx-auto">
        Welcome to Grocify! We are committed to delivering fresh and organic produce straight from farms to your doorstep. 
        Our goal is to make healthy living easy and accessible by providing high-quality groceries that you can trust.
      </p>
      <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
        From fruits and vegetables to dairy and seafood, every product is carefully selected to ensure freshness, safety, and sustainability.
      </p>
    </div>
      
    </div>
  )
}
