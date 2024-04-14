import './Whowe.css'
import Whoimage from '../../images/whoweclear.png'

const Whowe = () => {
    return (
        <>
            <div className="whowe_container">
                <fieldset className="whowe_card">
                    <legend><span>Who</span> we are</legend>
                    <div className="weLeft">
                        <img src={Whoimage} alt="image" />
                    </div>

                    <div className="weRight">
                        <h1><span className='spanone'>Hi,</span> we are <span className='spantwo'>CA consultants</span></h1>
                        <p>We offer business registrations, compliances, taxation and intellectual property services that help entrepreneurs start, manage, protect and grow their businesses.</p>
                        <ul>
                            <li>Team of Chartered Accountants, Company Secretaries & Lawyers</li>
                            <li>Save time and money with Rapid Fast Process</li>
                            <li>Rely on an award-wining Customer Support</li>
                        </ul>
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default Whowe