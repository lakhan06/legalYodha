import { Qualities } from "./components/qualities/Qualities"
import Services from "./components/services/Services"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

function App() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Qualities></Qualities>
      <Services></Services>
    </>
  )
}

export default App
