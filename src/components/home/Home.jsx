import Hero from '../hero/Hero'
import Whowe from '../whowe/Whowe'
import { Qualities } from '../qualities/Qualities'
import Services from '../services/Services'



const Home = () => {
  return (
    <div className='app'>
      <Hero />
      <Whowe />
      <Qualities />
      <Services />
    </div>
  )
}

export default Home