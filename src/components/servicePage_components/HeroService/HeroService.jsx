import React from "react";
import { SiTicktick } from "react-icons/si";
import "./HeroService.css";
import DocRequired from "../docRequired/DocRequired";
import MinRequirement from "../minRequirement/MinRequirement";
import Process from "../processOfRegistration/Process";

const HeroService = ({ data }) => {
  return (
    <div className="HeroService">
      <div className="HeroServiceHeading">
        <span>Private_Limited</span> Company Registration
      </div>
      <div className="bootom">{data.tagline}</div>
      <div className="features">
        {data.features.map((feature, i) => {
          return (
            <div className="feature" key={i}>
              <SiTicktick className="tickicon" />
              <div className="featureLine">{feature}</div>
            </div>
          );
        })}
      </div>

      <div className="Serviceintroduction">
        <div className="ServiceIntroHeading">
          <span>INTRO</span>DUCTION
        </div>
        <div className="paragraphintro">
         {data.introduction}
        </div>
      </div>

      <DocRequired data={data.Documents_required}></DocRequired>
      <MinRequirement data={data.Minimum_Requirements}></MinRequirement>
      <Process data={data.process} ></Process>
    </div>
  );
};

export default HeroService;
