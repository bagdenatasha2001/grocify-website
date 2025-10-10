import React from 'react'
import Banner from '../components/Banner/Banner'
import Process from '../components/Process/Process'
import BgProcess from '../assets/images/process-banner.jpg'

export default function ProcessPage() {
  return (
    <div>
        <Banner title="Process"  bgImage={BgProcess}/>



        <Process/>

        {/* <div className="py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-orange-600">Our Process</h1>
      <p className="text-gray-700 max-w-3xl mx-auto">
        Our process ensures that every product you receive is fresh, safe, and sustainably sourced.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Sourcing</h2>
          <p className="text-gray-600">We partner with trusted farmers and suppliers who share our commitment to quality.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Quality Control</h2>
          <p className="text-gray-600">Every item goes through strict quality checks to maintain freshness and hygiene.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Delivery</h2>
          <p className="text-gray-600">We ensure timely and safe delivery right to your doorstep.</p>
        </div>
      </div>
    </div> */}
      
    </div>
  )
}
