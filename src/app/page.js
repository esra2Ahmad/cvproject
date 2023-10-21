
import Navbar from './Components/Navbar'
import About from './Components/About.'
import './globals.css' 
import Services from './Components/Services'
import Skilles from './Components/Skilles'
import OurPortfolio from './Components/OurPortfolio'
import Comma from './Components/Comma'
import Test from './Components/Test'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
const page = () => {
   
  return (
   
    <div className=" bg-zinc-800  w-full  ">
      <Navbar />
      
      <div id="about">
      <About/>
      </div>
      <div id="services">
      <Services/>
      </div> 
      <div id="skills">
        <Skilles/>


      </div>
      <div id="ourportfolio">
        <OurPortfolio/>
      </div>
      <Comma/>
      <div id='testimilions'>
        <Test/>
      </div>
      <div id="pricing">
        <Pricing/>
      </div>
      <div id="contact">
        <Contact/> 
      </div>
      </div>
      
  
  )
}

export default page