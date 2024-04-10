import './Footer.css'
import logo from '../../images/logo.png';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import FactCheckIcon from '@mui/icons-material/FactCheck';

// <HomeIcon sx={{ color: pink[500] }} />

const Footer = () => {
    return (
        <div>
            <div className="footerContainer">

                <div className="footerLeft">
                    <img src={logo} alt="Logo" />
                    <p>Strategic Solutions, Trusted Guidance: Elevate your financial journey with our CA consultancy expertise. </p>
                    <div className="phmail ph">
                        {/* <span>{PhoneIcon}</span> */}
                        <span>+91-9116562979</span>
                    </div>
                    <div className="phmail mail">
                        {/* <span>{EmailIcon}</span> */}
                        <span>legalYodha@gmail.com</span>
                    </div>
                </div>

                <div className="footerMiddle">
                    <ul>
                        <li> Home</li>
                        <li> About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footerRight">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='E-mail' />
                    <textarea name="Message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                    <div className='frmBtn'>Submit</div>
                </div>
            </div>


        </div>
    )
}

export default Footer