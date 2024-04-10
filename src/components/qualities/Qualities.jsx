import React from 'react'
// import { QualityCard } from './QualityCard'
import { QualityCrousal } from './QualityCrousal'
import './qualities.css'

export const Qualities = () => {
  return (
    <div className='qualities'>

    <div className="leftPart">
<div className="qualitiesHeading">Why <span>Legal Yodha</span> is the Best Choice ?</div>
<div className="discription1 discription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo veritatis dolore neque eos molestiae autem eum error nisi obcaecati, saepe minima aliquam maiores dignissimos cupiditate sunt quibusdam.</div>
<div className="discription2 discription"> Sit nulla culpa commodi praesentium velit voluptate tenetur vel nesciunt necessitatibus. Earum quis officia ipsa ab modi distinctio similique blanditiis eius illum neque, enim deleniti praesentium? In, repellat? Iste.</div>
    </div>
<div className="RightCrousal">
<QualityCrousal></QualityCrousal>
    
</div>
    </div>
  )
}
