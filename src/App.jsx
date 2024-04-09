import { Qualities } from "./components/qualities/Qualities"
import Services from "./components/services/Services"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      < Navbar />
      <Hero />
      <Qualities />
      <Services />
      <Footer />
    </>
  )
}

export default App
