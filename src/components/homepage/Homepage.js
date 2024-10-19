import React from 'react'
import Hero from './Hero'
import Pets from './Pets'
import Banner1 from '../Banners/Banner1'
import Products from './Product'



const Homepage = () => {
  return (
    <div className='z-0'>
        <Hero/>
        <Pets/>
        <Banner1/>
        <Products/>
    </div>
  )
}

export default Homepage