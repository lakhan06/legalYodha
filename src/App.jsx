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


function App() {
  return (

    <Router>

   
    <div>

    
    <Navbar></Navbar>
    <Routes>


      <Route path="/" element={ <Home/>} />
      <Route path="/Private_Limited" element={ <HeroService data={services.Private_Limited_Company_Registration}/>} />
      
 
    </Routes>
      <Footer />
    </div>
     
    </Router>
    
  )
}

export default App
