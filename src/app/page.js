import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About.'

import Services from './Components/Services'

const page = () => {
  return (
    <div className=" bg-zinc-800 blur-none ">
      <Navbar />
      
      <div id="about">
      <About/>
      </div>
      <div id="services">
      <Services/>
      </div> 
      </div>
  
  )
}

export default page