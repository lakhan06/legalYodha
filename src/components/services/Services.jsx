import React from "react";
import "./Services.css";


const Services = () => {
  return (
    <div className="services">
      <div className="serviceHeading"><span>Our</span> Services</div>
     <div className="carddiv">
        <div className="card cardleft">
           <img src="images/start busiess.jpg" alt="error" />
            <div className="content">
                <div className="serviceHeading">Start Bussiness</div>
                <div className="serviceDiscription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim sapiente cumque aliquam excepturi cum, iusto soluta qui rerum iste, iure tempore perspiciatis nam? Cum quo unde est iure sequi excepturi provident dolorum doloremque maxime nam aliquid rerum in, consequatur ipsum voluptas tempora ducimus. Facere mollitia at amet tenetur atque.</div>
                <div className="serviceButton">Explore</div>
            </div>
        </div>
        <div className="card cardright">
            <div className="content">
                <div className="serviceHeading">Income Tax/GST</div>
                <div className="serviceDiscription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim sapiente cumque aliquam excepturi cum, iusto soluta qui rerum iste, iure tempore perspiciatis nam? Cum quo unde est iure sequi excepturi provident dolorum doloremque maxime nam aliquid rerum in, consequatur ipsum voluptas tempora ducimus. Facere mollitia at amet tenetur atque.</div>
                <div className="serviceButton">Explore</div>
            </div>
            <div className="image"><img src="images/income-tax.webp" alt="error" /></div>
        </div>
        <div className="card cardleft">
            <div className="image"><img src="images/registraion3.jpeg" alt="error" /></div>
            <div className="content">
                <div className="serviceHeading">Registration</div>
                <div className="serviceDiscription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim sapiente cumque aliquam excepturi cum, iusto soluta qui rerum iste, iure tempore perspiciatis nam? Cum quo unde est iure sequi excepturi provident dolorum doloremque maxime nam aliquid rerum in, consequatur ipsum voluptas tempora ducimus. Facere mollitia at amet tenetur atque.</div>
                <div className="serviceButton">Explore</div>
            </div>
        </div>
     </div>
         
    </div>
  );
};

export default Services;
