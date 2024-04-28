import React from "react";
import { SiTicktick } from "react-icons/si";
import "./HeroService.css";

const HeroService = () => {
  return (
    <div className="HeroService">
      <div className="HeroServiceHeading">
        <span>Private Limited</span> Company Registration
      </div>
      <div className="bootom">
        Private limited company registration in Jaipur Starting at Just
        ₹9,000/-* only
      </div>
      <div className="features">
        <div className="feature">
          <SiTicktick className="tickicon" />
          <div className="featureLine"> Ideal for start-ups</div>
        </div>
        <div className="feature">
          <SiTicktick />
          <div className="featureLine"> Easy Transferability</div>
        </div>
        <div className="feature">
          <SiTicktick />
          <div className="featureLine"> Simple & Secure Online Process</div>
        </div>
        <div className="feature">
          <SiTicktick />
          <div className="featureLine"> Dedicated Professional</div>
        </div>
        <div className="feature">
          <SiTicktick />
          <div className="featureLine"> Takes 5-7 Days</div>
        </div>
        <div className="feature">
          <SiTicktick />
          <div className="featureLine">Get Post Incorporation Assistance</div>
        </div>
      </div>

      <div className="Serviceintroduction">
        <div className="ServiceIntroHeading">
          <span>INTRO</span>DUCTION 
        </div>
        <div className="paragraphintro">
          Introduction of Private Limited Company For starting a business in
          India Private Limited Company is the most popular and an effective
          medium for higher growth aspirants. It is incorporated under Companies
          Act, 2013 and has various benefits as it ensures limited liability and
          separate legal entity which means safeguarding of the personal
          property. This type of entity is mainly preferred by the start ups and
          the growing entities. So, if you are willing to start a Company your
          first priority is to get it registered Once the same is registered it
          increases its authenticity as well as offers various benefits which
          can be offering liability protection to protect the Company's assets,
          attraction of more and more funds etc.
        </div>
      </div>
    </div>
  );
};

export default HeroService;
