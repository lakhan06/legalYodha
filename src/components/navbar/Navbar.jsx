import "./Navbar.css";
import { useState } from "react";

import logo from "../../images/logomain.png";
import { Link } from "react-router-dom";

import { ImWhatsapp } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <Link to={'/'} >

              <a href="#" className="nav__logo">
                <img src={logo} alt="" />
                <div className="LOgoname"><span>Legal</span> Yodha</div>
              </a>
            </Link>

            <div
              className={`nav__toggle ${show ? "show-icon" : ""}`}
              id="nav-toggle"
              onClick={() => setShow(!show)}
            >
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

          <div className={`nav__menu ${show ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
              {/* <li>
                <Link to={'/'} className="nav__link">
                  Home
                </Link>
              </li> */}

              <li className="dropdown__item">
                <div className="nav__link">
                  Start Business{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">
                    <Link to={'/Private_Limited'}> Private Limited Company Registration</Link>
                  </li>
                  <li className="dropdown__link">
                    <Link to={'/Limited_Liability_Partnership_Registration'}>Limited Liability Partnership Registration</Link>
                  </li>
                  {/* <li className="dropdown__link">
                   <Link to={''}> Partnership Firm Registration</Link>
                  </li>
                  <li className="dropdown__link">
                  <Link to={''}> Proprietorship Firm Registration</Link>
                  </li> */}
                  <li className="dropdown__link">
                    <Link to={'/Section_NPO'}>Section NPO</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Business Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">  <Link to={'/GST_Registration'}>GST Registration</Link></li>
                  <li className="dropdown__link"> <Link to={'/FSSAI_Registration'}>FSSAI Registration</Link></li>
                  <li className="dropdown__link">  <Link to={'/ISO_Certification'}>ISO Certificate</Link></li>
                  <li className="dropdown__link"><Link to={'/IEC_Code_Registration'}>Import Export Code(IEC)</Link></li>
                  <li className="dropdown__link"><Link to={'/PF_ESI_Registration'}>ESI and PF Regiistration</Link></li>
                  <li className="dropdown__link"> <Link to={'/MSME_Registration'}> MSME Registration</Link></li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  IP Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link"> <Link to={'/Trademark_Registration'}>Trademark Registration</Link></li>
                  <li className="dropdown__link"><Link to={'/Copyright_Registration'}>Copyright Registration</Link></li>
                  <li className="dropdown__link"><Link to={'/Design_Registration'}>Design Registration</Link></li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Income TAX/GST{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link"> <Link to={''}>Income Tax Return</Link></li>
                  <li className="dropdown__link"> <Link to={''}>GST Return</Link></li>
                  <li className="dropdown__link"> <Link to={''}> TDS Return</Link></li>
                  <li className="dropdown__link"> <Link to={''}>Income Tax Notice</Link></li>
                </ul>
              </li>

              <li><Link to={'/About'} className="nav__link">About</Link></li>

              <li>
                <Link to={'/Contact'} className="nav__link">
                  Contact
                </Link>
              </li>
              {/* 
              <li className="navwhatsappicon">
                {" "}
                <a href="https://wa.me/+919116562979" target="_blank" className="nav-link">
                  <ImWhatsapp className="navIcons" />
                </a>
              </li>
              <li>
                <FaPhoneSquareAlt
                  onClick={copyToClipboard}
                  className="navIcons"
                />
              </li> */}
            </ul>
          </div>
        </nav>
        <div className="right-nav-icons">
          <a href="https://wa.me/+919116562979" target="_blank">
            <ImWhatsapp className="navIcons" />
          </a>
          <a href="tel:9116562979">
            <FaPhoneSquareAlt className="navIcons" />
          </a>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
