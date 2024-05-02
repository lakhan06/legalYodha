import { useState } from "react";
import "./Services.css";

const StartBusinessData = [
    {
        title: 'GST Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }, {
        title: 'GST Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }, {
        title: 'GST Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }, {
        title: 'GST Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }
    // Add more service objects for the Start Business category
];

const RegistrationData = [
    {
        title: 'FSSAI Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }, {
        title: 'FSSAI Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }, {
        title: 'FSSAI Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }, {
        title: 'FSSAI Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    }
    // Add more service objects for the Registration category
];

const TrademarkData = [
    {
        title: 'Trademark Registration',
        price: '₹10000/-',
        features: [
            'Trademark search and filing',
            'Application processing',
            'Consultation with experts',
            'Status tracking',
            'Issue resolution'
        ]
    }, {
        title: 'Trademark Registration',
        price: '₹10000/-',
        features: [
            'Trademark search and filing',
            'Application processing',
            'Consultation with experts',
            'Status tracking',
            'Issue resolution'
        ]
    }, {
        title: 'Trademark Registration',
        price: '₹10000/-',
        features: [
            'Trademark search and filing',
            'Application processing',
            'Consultation with experts',
            'Status tracking',
            'Issue resolution'
        ]
    }, {
        title: 'Trademark Registration',
        price: '₹10000/-',
        features: [
            'Trademark search and filing',
            'Application processing',
            'Consultation with experts',
            'Status tracking',
            'Issue resolution'
        ]
    }
    // Add more service objects for the Trademark category
];

const IncomeTaxData = [
    {
        title: 'Income Tax Filing',
        price: '₹10000/-',
        features: [
            'Individual or business tax filing',
            'Tax computation and planning',
            'Audit and compliance',
            'Tax-saving strategies',
            'Consultation with tax experts'
        ]
    }, {
        title: 'Income Tax Filing',
        price: '₹10000/-',
        features: [
            'Individual or business tax filing',
            'Tax computation and planning',
            'Audit and compliance',
            'Tax-saving strategies',
            'Consultation with tax experts'
        ]
    }, {
        title: 'Income Tax Filing',
        price: '₹10000/-',
        features: [
            'Individual or business tax filing',
            'Tax computation and planning',
            'Audit and compliance',
            'Tax-saving strategies',
            'Consultation with tax experts'
        ]
    }, {
        title: 'Income Tax Filing',
        price: '₹10000/-',
        features: [
            'Individual or business tax filing',
            'Tax computation and planning',
            'Audit and compliance',
            'Tax-saving strategies',
            'Consultation with tax experts'
        ]
    }
    // Add more service objects for the Income Tax category
];

const Services = () => {

    const [selectedCategory, setSelectedCategory] = useState('startBusiness');
    const [serviceData, setServiceData] = useState(StartBusinessData);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);

        switch (category) {
            case 'startBusiness':
                setServiceData(StartBusinessData);
                break;
            case 'registration':
                setServiceData(RegistrationData);
                break;
            case 'trademark':
                setServiceData(TrademarkData);
                break;
            case 'incomeTax':
                setServiceData(IncomeTaxData);
                break;
            default:
                setServiceData(StartBusinessData); // Default to Start Business data
                break;
        }
    };


    return (
        <>
            <section className="servicesSection">
                <fieldset className="servicesCardContainer">
                    <legend><span>O</span>ur <span>S</span>ervices</legend>


                    <div className="serviceCatagories">
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'startBusiness' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('startBusiness')}
                        >
                            Start Business
                        </div>
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'registration' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('registration')}
                        >
                            Registration
                        </div>
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'trademark' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('trademark')}
                        >
                            Trademark/IP
                        </div>
                        <div
                            className={`singleServiceCategory ${selectedCategory === 'incomeTax' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('incomeTax')}
                        >
                            Income Tax/GST
                        </div>
                    </div>

                    <div className="serviceCards">
                        {serviceData.map((service, index) => (
                            <div key={index} className="singleServiceCard">
                                <h3>{service.title}</h3>
                                <div className="servicePricing">
                                    <p>Starting</p>
                                    <span>{service.price}</span>
                                </div>
                                <ul>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="learn_more">
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                        ))}
                    </div>

                </fieldset>
            </section>
        </>
    );
};

export default Services;
// ctrl+alt+4 -> ₹




// <div className="serviceCatagories">
// <div className="singleServiceCatagorie">
//     Start Business
// </div>
// <div className="singleServiceCatagorie">
//     Registration
// </div>
// <div className="singleServiceCatagorie">
//     Trademark/IP
// </div>
// <div className="singleServiceCatagorie">
//     Income Tax/GST
// </div>
// </div>

// <div className="serviceCards">
// {serviceData.map((service, index) => (
//     <div key={index} className="singleServiceCard">
//         <h3>{service.title}</h3>
//         <div className="servicePricing">
//             <p>Starting</p>
//             <span>{service.price}</span>
//         </div>
//         <ul>
//             {service.features.map((feature, idx) => (
//                 <li key={idx}>{feature}</li>
//             ))}
//         </ul>
//         <div className="learn_more">
//             <a href="">Learn More</a>
//         </div>
//     </div>
// ))}
// </div>