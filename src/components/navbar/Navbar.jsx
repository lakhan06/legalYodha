import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

import logo from "../../images/finallogo.jpg";
import { Link } from "react-router-dom";

import { ImWhatsapp } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";

const copyToClipboard = () => {
  navigator.clipboard.writeText("+919116562979");
};

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <a href="#" className="nav__logo">
              <img src={logo} alt="" />
            </a>

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
              <li>
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>

              <li className="dropdown__item">
                <div className="nav__link">
                  Start Business{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">
                    Private Limited Company Registration
                  </li>
                  <li className="dropdown__link">
                    Limited Liability Partnership Registration
                  </li>
                  <li className="dropdown__link">
                    Partnership Firm Registration
                  </li>
                  <li className="dropdown__link">
                    Proprietorship Firm Registration
                  </li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Business Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">GST Registration</li>
                  <li className="dropdown__link">FSSAI Registrati</li>
                  <li className="dropdown__link">ISO Certificate</li>
                  <li className="dropdown__link">Import Export Co</li>
                  <li className="dropdown__link">ESIC and PF Regi</li>
                  <li className="dropdown__link">MSME Registratio</li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  IP Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">Trademark Registration</li>
                  <li className="dropdown__link">Copyright Registration</li>
                  <li className="dropdown__link">Design Registration</li>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Income TAX/GST{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li className="dropdown__link">Income Tax Return</li>
                  <li className="dropdown__link">GST Return</li>
                  <li className="dropdown__link">TDS Return</li>
                  <li className="dropdown__link">Income Tax Notice</li>
                </ul>
              </li>

              <li><a href="#" className="nav__link">About</a></li>

              <li>
                <a href="#" className="nav__link">
                  Contact
                </a>
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
            <FaPhoneSquareAlt onClick={copyToClipboard} className="navIcons" />
          </div>
      </header>
    </div>
  );
};

export default Navbar;
