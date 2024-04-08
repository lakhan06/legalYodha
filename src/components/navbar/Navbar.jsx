import './Navbar.css'
import logo from '../../images/logo.png';
import phone from '../../images/phone-call.png'
import whatsapp from '../../images/WhatsApp_icon.png'

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="navbar">
          <div className="left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="middle">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="right">
            <img src={whatsapp} alt="Whatsapp" />
            <img src={phone} alt="phone" style={{ width: '40px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar