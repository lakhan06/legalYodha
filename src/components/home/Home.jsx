import React from 'react'
import Hero from '../hero/Hero'
import Whowe from '../whowe/Whowe'
import { Qualities } from '../qualities/Qualities'
import Services from '../services/Services'

  

const Home = () => {
  return (
    <div className='app'>

         <Hero></Hero>
        <Whowe></Whowe>
        <Qualities></Qualities>
        <Services></Services>
    </div>
  )
}

export default Home