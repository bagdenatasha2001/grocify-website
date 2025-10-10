import React from 'react'
import Banner from '../components/Banner/Banner.jsx'
import Process from '../components/Process/Process.jsx'
import BgProcess from '../assets/images/process-banner.jpg'

export default function ProcessPage() {
  return (
    <div>
        <Banner title="Process"  bgImage={BgProcess}/>



        <Process/>

      
    </div>
  )
}
