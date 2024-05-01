import "./DocRequired.css";
import { IoDocumentSharp } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { SiLibreofficeimpress } from "react-icons/si";

const documentsData = [
    
        <IoDocumentSharp className="docRecLogo" />,
        <IoNewspaper className="docRecLogo" />,
        <IoNewspaper className="docRecLogo" />,
        <SiLibreofficeimpress className="docRecLogo" />,
        <SiLibreofficeimpress className="docRecLogo" />,
        <IoNewspaper className="docRecLogo" />,
    // Add more documents as needed
];

const DocRequired = ({data}) => {
    return (
        
        <section className="docRecSection">
            <h1 className="docRecHeading"><span>Documents</span> Required</h1>
            <div className="docRecContainer">
                {data &&data.map((document, index) => (
                    <div key={index} className="singleDocRec">
                        <div className="sdrLeft">
                            {documentsData[index]}
                        </div>
                        <div className="sdrRight">
                            <p>{document}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DocRequired