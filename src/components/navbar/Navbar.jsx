import "./Navbar.css";
import logo from "../../images/logo.png";
import phone from "../../images/phone-call.png";
import whatsapp from "../../images/WhatsApp_icon.png";
import { Link } from 'react-router-dom'

const copyToClipboard = () => {
  navigator.clipboard.writeText("+919116562979");
};

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
              <li><Link to={"/"}>Home</Link></li>

              <li className="start_business">
                Start Business
                <div className="Starlist list">
                  <div className="listleft ">
                   BUSINESS REGISTRATIONS
                    <ul>
                      <li><Link to={"/Private_Limited"}>Private Limited Company Registration</Link></li>
                      <li>Limited Liability Partnership Registration</li>
                      <li>Partnership Firm Registration</li>
                      <li>Proprietorship Firm Registration</li>
                    
                    </ul>
                  </div>
                  <div className="listright">
                    GST- GOODS & SERVICES TAX
                    <ul>
                      <li>GST Registration</li>
                      <li>FSSAI Registration</li>
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
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="right">
            <a href="https://wa.me/+919116562979" target="_blank">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            {/* <a href="tel:+919829587654"> */}
            <img
              onClick={copyToClipboard}
              src={phone}
              alt="phone"
              style={{ width: "40px", cursor: "pointer" }}
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
