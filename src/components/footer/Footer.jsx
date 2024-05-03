import './Footer.css'
import { FaMobile } from "react-icons/fa";
import { PiArrowFatLinesUpBold } from "react-icons/pi";

const Footer = () => {
    return (
        <section className='footerSection'>
            <div className="footServiceContainer">
                <div className="ftrServiceColumn">
                    <h4>Start Business</h4>
                    <ul>
                        <li>Private Limited Company</li>
                        <li>Limited Liability Partnership</li>
                        <li>Section NPO</li>
                    </ul>
                </div>
                <div className="ftrServiceColumn">
                    <h4>Business Registrations</h4>
                    <ul>
                        <li>GST Registration</li>
                        <li>FSSAI Registration</li>
                        <li>ISO Certificate</li>
                        <li>Import Export Code (IEC)</li>
                        <li>ESIC and PF Registration</li>
                        <li>MSME Registration</li>
                    </ul>
                </div>
                <div className="ftrServiceColumn">
                    <h4>IP Registrations</h4>
                    <ul>
                        <li>Trademark Registration</li>
                        <li>Copyright Registration</li>
                        <li>Design Registration</li>
                    </ul>
                </div>
                <div className="ftrServiceColumn">
                    <h4>Income TAX/GST</h4>
                    <ul>
                        <li>Income Tax Return</li>
                        <li>GST Return</li>
                        <li>TDS Return</li>
                        <li>Income Tax Notice</li>
                    </ul>
                </div>
            </div>

            <div className="footerStrip">
                <div className="footerStripLinks">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <a href="tel:9116562979">
                    <div className="ftrPhoneButton">
                        <FaMobile className='ftrMobileLogo' />
                        <p>91165-62979</p>
                    </div>
                </a>
            </div>

            <span onClick={() => window.scrollTo(0, 0)} className='onTopFooter'><PiArrowFatLinesUpBold /></span>

            <p className='copyrightLine'>©2024 LegalYodha Pvt. Ltd. All Rights Reserved.</p>

        </section>
    )
}

export default Footer