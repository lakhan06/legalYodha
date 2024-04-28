import { Qualities } from "./components/qualities/Qualities"
import Services from "./components/services/Services"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from "./components/footer/Footer"
import Whowe from "./components/whowe/Whowe"
import HeroService from "./components/servicePage_components/HeroService/HeroService"

function App() {
  return (
    <>
    
      < Navbar />
      <HeroService></HeroService>
      <Hero />
      <Whowe />
      <Qualities />
      <Services />
      <Footer />
    </>
  )
}

export default App
