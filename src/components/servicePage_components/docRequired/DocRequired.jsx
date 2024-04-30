import "./DocRequired.css";
import { IoDocumentSharp } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { SiLibreofficeimpress } from "react-icons/si";

const documentsData = [
    {
        icon: <IoDocumentSharp className="docRecLogo" />,
        text: 'PAN Card of the Member and Directors of the proposed Company (Passport in case of Foreign Nationals)'
    },
    {
        icon: <IoNewspaper className="docRecLogo" />,
        text: 'Identity Proof of the Member and Directors of the proposed Company (Aadhar / Voter ID / Driving License / Passport)'
    },
    {
        icon: <SiLibreofficeimpress className="docRecLogo" />,
        text: 'PAN Card of the Member and Directors of the proposed Company (Passport in case of Foreign Nationals)'
    },
    {
        icon: <IoNewspaper className="docRecLogo" />,
        text: 'Identity Proof of the Member and Directors of the proposed Company (Aadhar / Voter ID / Driving License / Passport)'
    },
    {
        icon: <SiLibreofficeimpress className="docRecLogo" />,
        text: 'PAN Card of the Member and Directors of the proposed Company (Passport in case of Foreign Nationals)'
    }
    // Add more documents as needed
];

const DocRequired = () => {
    return (
        <section className="docRecSection">
            <h1 className="docRecHeading"><span>Documents</span> Required</h1>
            <div className="docRecContainer">
                {documentsData.map((document, index) => (
                    <div key={index} className="singleDocRec">
                        <div className="sdrLeft">
                            {document.icon}
                        </div>
                        <div className="sdrRight">
                            <p>{document.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DocRequired