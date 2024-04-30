import "./Process.css"


const processesData = [
    {
        id: 1,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    },
    {
        id: 2,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    },
    {
        id: 3,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxiipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    },
    {
        id: 4,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    },
    {
        id: 2,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    },
    {
        id: 3,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    },
    {
        id: 4,
        title: 'Complete the Application Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae natus illo obcaecati, vel in voluptatum fugiat eveniet repellendus ad aliquid aspernatur quasi maxime excepturi blanditiis? Rerum ad possimus quaerat?'
    }
];

const Process = () => {
    return (
        <div>
            <h1 className="process_heading"><span>Process</span> of Incorporation of Public Limited Company</h1>
            <div className="processes_container">
                {processesData.map(process => (
                    <div key={process.id} className="singleProcess">
                        <p className="PHBold">{process.id}. {process.title}</p>
                        <p className="processDescription">{process.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Process