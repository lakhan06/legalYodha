
import "./MinRequirement.css"
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const requirementsData = [
    'Minimum three persons as Director and maximum fifteen',
    'Minimum one Director shall be Indian resident',
    'Minimum seven persons as Members',
    'Minimum one Director shall be Indian resident',
    'Minimum seven persons as Members'
    // Add more requirements as needed
];

const MinRequirement = () => {
    return (
        <div className="minReqCompoContainer">
            <h1 className="min_req_heading"><span>Minimum</span> Requirements</h1>
            <div className="minReqContainer">
                {requirementsData.map((requirement, index) => (
                    <div key={index} className="singleMinReq">
                        <BsFillArrowRightSquareFill className="leftDivForIcon" />
                        <p>{requirement}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MinRequirement