
import Navbar from "./Components/Navbar";
import About from "./Components/About.";
import "./globals.css";
import Services from "./Components/Services";
import Skilles from "./Components/Skilles";
import OurPortfolio from "./Components/OurPortfolio";
import Comma from "./Components/Comma";
import Test from "./Components/Test";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Navlinks from "./Components/Navlinks";
import Outline from "./Components/Outline";
import Testimilions from "./Components/Testimilions";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <About />
        <Outline />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Skilles />
      </div>
      <div>
        <OurPortfolio/>
      </div>
    
      <div>
        <Test/>
      </div>
      <div>
        <Pricing/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Blog/>
        <p className='text-white text-center mt-11'>© 2023 Gavi is Proudly Powered <span className='text-lime-300 underline'>by Ui-ThemeZ </span></p>

      </div>
    </div>
  );
};

export default page;
