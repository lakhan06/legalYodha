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
            <Link to={"/"}>
              <a href="#" className="nav__logo">
                <img src={logo} alt="" />
                <div className="LOgoname">
                  <span>Legal</span> Yodha
                </div>
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
                    <Link to={"/Private_Limited"}  onClick={() => setShow(!show)}>
                  <li className="dropdown__link">
                      {" "}
                      Private Limited Company Registration
                  </li>
                    </Link>
                    <Link to={"/Limited_Liability_Partnership_Registration"}  onClick={() => setShow(!show)}>
                  <li className="dropdown__link">
                      Limited Liability Partnership Registration
                  </li>
                    </Link>
                  {/* <li className="dropdown__link">
                   <Link to={''}> Partnership Firm Registration</Link>
                  </li>
                  <li className="dropdown__link">
                  <Link to={''}> Proprietorship Firm Registration</Link>
                  </li> */}<Link to={"/Section_NPO"} onClick={() => setShow(!show)}>
                  <li className="dropdown__link"  >
                    Section NPO
                  </li></Link>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Business Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <Link to={"/GST_Registration"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    {" "}
                   GST Registration
                  </li></Link>
                 <Link to={"/FSSAI_Registration"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    {" "}
                    FSSAI Registration
                  </li></Link>
                 <Link to={"/ISO_Certification"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    {" "}
                    ISO Certificate
                  </li></Link>
                  <Link to={"/IEC_Code_Registration"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                   
                      Import Export Code(IEC)
                   
                  </li> </Link>
                 <Link to={"/PF_ESI_Registration"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    
                      ESI and PF Regiistration
                    
                  </li></Link>
                  <Link to={"/MSME_Registration"}  onClick={() => setShow(!show)}><li className="dropdown__link">
                    {" "}
                     MSME Registration
                  </li></Link>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  IP Registration{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                   <Link to={"/Trademark_Registration"}  onClick={() => setShow(!show)}><li className="dropdown__link">
                    {" "}
                   
                      Trademark Registration
                    
                  </li></Link>
                 <Link to={"/Copyright_Registration"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    
                      Copyright Registration
                    
                  </li></Link>
                 <Link to={"/Design_Registration"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    Design Registration
                  </li></Link>
                </ul>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Income TAX/GST{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                   <Link to={"/Income_Tax_Return"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    {" "}
                  Income Tax Return
                  </li></Link>
                  <Link to={"/GST_Return"}  onClick={() => setShow(!show)}><li className="dropdown__link">
                    {" "}
                    GST Return
                  </li></Link>
                  <Link to={"/TDS_Return"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    {" "}
                    TDS Return
                  </li></Link>
                  <Link to={"/Income_Tax_Notice"}  onClick={() => setShow(!show)}> <li className="dropdown__link">
                    {" "}
                   Income Tax Notice
                  </li></Link>
                </ul>
              </li>

             <Link to={"/About"} className="nav__link"  onClick={() => setShow(!show)}> <li>
                
                  About
                
              </li></Link>

             <Link to={"/Contact"} className="nav__link"  onClick={() => setShow(!show)}> <li>
                
                  Contact
                
              </li></Link>
            </ul>
          </div>
        </nav>
        <div className="right-nav-icons">
          <a href="https://wa.me/+919057771028" target="_blank">
            <ImWhatsapp className="navIcons" />
          </a>
          <a href="tel:9057771028">
            <FaPhoneSquareAlt className="navIcons" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
