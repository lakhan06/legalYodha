import "./Services.css";

const serviceData = [
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
    },
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
    },
    {
        title: 'Partnership Registration',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations',
            'Composition Registration',
            'Beneficial as provides input tax Credit'
        ]
    },
    {
        title: 'Import & Export Code',
        price: '₹10000/-',
        features: [
            'Service Providers Having 20 lakh turnover',
            'Goods suppliers having 40 lakh turnover',
            'Voluntary Registrations'
        ]
    }
];

const Services = () => {
    return (
        <>
            <section className="servicesSection">
                <fieldset className="servicesCardContainer">
                    <legend><span>O</span>ur <span>S</span>erivices</legend>

                    <div className="serviceCatagories">
                        <div className="singleServiceCatagorie">
                            Start Business
                        </div>
                        <div className="singleServiceCatagorie">
                            Registration
                        </div>
                        <div className="singleServiceCatagorie">
                            Trademark/IP
                        </div>
                        <div className="singleServiceCatagorie">
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