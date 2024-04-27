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
              <li>Contact</li>
              <li class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
             
              <li>Tax</li>
              <li>Registration</li>
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