import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";



import logo from "../../images/logo.png";
import { Link } from 'react-router-dom'

import { ImWhatsapp } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";

const copyToClipboard = () => {
  navigator.clipboard.writeText("+919116562979");
};




const Navbar = () => {
  const [visible, setvisibility] = useState('false');

  const handleCategoryChange=(option)=>{
    setvisibility(option)

  }
  return (


    <div>
      <div className="navContainer">
        <div className="translateicon">

        <FaBars  className="bars icon" onClick={() => handleCategoryChange('true')}  />
        </div>
        <div className={`navbar ${visible === 'true' ? 'visible' : 'hide'}`}>
        <RxCross1  className="cross icon" onClick={() => handleCategoryChange('false')}/>
          <div className="left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="middle">
            <ul>
              <li><Link to={"/"}>Home</Link></li>

              <li className="start_business">
                Start Business
                <div className="Starlist list">
                  <div className="listleft ">
                    BUSINESS REGISTRATIONS
                    <ul>
                      <li><Link to={"/Private_Limited"}>Private Limited Company Registration</Link></li>
                      <li><Link to={"/Limited_Liability_Partnership_Registration"}>Limited Liability Partnership Registration</Link></li>
                      <li>Partnership Firm Registration</li>
                      <li>Proprietorship Firm Registration</li>

                    </ul>
                  </div>
                  <div className="listright">
                    GST- GOODS & SERVICES TAX
                    <ul>
                      <li><Link to={"/GST_Registration"}>GST Registration</Link></li>
                      <li><Link to={"/FSSAI_Registration"}>FSSAI Registration</Link></li>
                      <li>PF/ESI Registration</li>
                      <li>MSME Registration</li>
                      <li>Shop Act Registration</li>
                      <li>RERA Registration</li>
                      <li>Drug Licence</li>

                    </ul>
                  </div>
                </div>
              </li>
              <li className="Tax">
                Tax
                <div className="Taxlist list">
                  <div className="listleft ">
                    ITR-INCOME TAX RETURN
                    <ul>
                      <li>ITR Filing for NRIs</li>
                      <li>ITR Filing for Individuals</li>
                      <li>ITR Filing for Company</li>
                      <li>ITR Filing for Society/Trust</li>
                      <li>ITR Filing for Partnership Firms</li>
                      <li>TDS Returns Filing</li>
                      <li>Income Tax Notice Reply</li>
                      <li>Scrutiny Notice</li>
                    </ul>
                  </div>
                  <div className="listright">
                    GST- GOODS & SERVICES TAX
                    <ul>
                      <li>GST Registration</li>
                      <li>GST Returns Filing</li>
                      <li>GST Annual Returns</li>
                      <li>GST Audit</li>
                      <li>GST Cancellation</li>
                      <li>E-Way Bills</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><Link to={"/About"}>About</Link></li>
              <li><Link to={"/Contact"}>Contact</Link></li>
              <li className="serviceNav"><Link to={"/Contact"}>Services</Link></li>
            </ul>
          </div>
          <div className="right">
            <a href="https://wa.me/+919116562979" target="_blank">
              <ImWhatsapp className="navIcons" />
            </a>
            <FaPhoneSquareAlt onClick={copyToClipboard} className="navIcons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
