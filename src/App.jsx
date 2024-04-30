import { Qualities } from "./components/qualities/Qualities"
import Services from "./components/services/Services"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from "./components/footer/Footer"
import Whowe from "./components/whowe/Whowe"
import DocRequired from "./components/servicePage_components/docRequired/DocRequired"
import MinRequirement from "./components/servicePage_components/minRequirement/MinRequirement"
import Process from "./components/servicePage_components/processOfRegistration/Process"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whowe />
      <Qualities />
      <DocRequired />
      <MinRequirement />
      <Process />
      <Services />
      <Footer />
    </>
  )
}

export default App
