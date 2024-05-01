import { Qualities } from "./components/qualities/Qualities"
import Services from "./components/services/Services"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from "./components/footer/Footer"
import Whowe from "./components/whowe/Whowe"
import HeroService from "./components/servicePage_components/HeroService/HeroService"
import services from './components/servicePage_components/service.json'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Home from "./components/home/Home"
import About from "./pages/about/about"
import ContactUs from "./pages/contact/contactUs";


function App() {
  return (

    <Router>


      <div>


        <Navbar></Navbar>
  
        <Routes>


          <Route path="/" element={<Home />} />
      <Route path="/Contact" element={ <ContactUs/>} />
      <Route path="/About" element={ <About/>} />
          <Route path="/Private_Limited" element={<HeroService data={services.Private_Limited_Company_Registration} />} />
          <Route path="/Limited_Liability_Partnership_Registration" element={<HeroService data={services.Limited_Liability_Partnership_Registration} />} />
          <Route path="/GST_Registration" element={<HeroService data={services.GST_Registration} />} />
          <Route path="/FSSAI_Registration" element={<HeroService data={services.FSSAI_Registration} />} />
    </Routes>
      <Footer />
    </div>
     
    </Router>
    
  )
}

export default App
