import { Amphora, ChevronsRight, Droplets, Factory, TowerControl } from 'lucide-react';
import Link from 'next/link';


const BusinessSolutions = () => {
    const services = [
        {
            icon: TowerControl,
            title: "METALS & FOUNDRY",
            description: "Mega Foundries connects businesses with premium foundry metals, castings, and alloy products. Our platform enables seamless sourcing for automotive, construction, engineering, and large-scale industrial manufacturing.",
        },
        {
            icon: Factory,
            title: "INDUSTRIAL MACHINERY",
            description: "We provide access to high-performance industrial machinery—from heavy equipment and CNC machines to material handling systems—helping industries scale operations with reliable and quality-certified products.",
        },
        {
            icon: Amphora,
            title: "STEEL & METAL SUPPLIES",
            description: "Mega Foundries supports the oil, gas, and petrochemical sectors with equipment, pipelines, valves, and safety systems, ensuring industries meet operational standards and project demands with trusted suppliers.",
        },
        {
            icon: Droplets,
            title: "WATER & INFRASTRUCTURE",
            description: "Our platform connects industries with advanced water management, treatment, and infrastructure solutions—supporting sustainable operations for manufacturing plants, municipalities, and engineering projects.",
        },
    ];

    return (
        <section className="py-12 bg-white">

            {/* Title Section */}
            <h2 className="text-7xl  font-extrabold text-[#cc2221] text-center mb-12 mx-auto">
                World of Metals
            </h2>
            <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 text-start border border-[#cc2221] rounded-2xl">
                            <div className="flex justify-center lg:justify-start mb-4">
                                {/* The icon in the image uses a red container/base */}
                                <div className="relative p-2 rounded-full  ">
                                    <div className="w-8 h-8 text-[#cc2221]"><service.icon size={32} /></div>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-[#cc2221] mb-3">{service.title}</h3>
                            <p className="text-sm text-neutral-600 mb-4 h-20 overflow-hidden">
                                {service.description}
                            </p>

                            <Link
                                href="#"
                                // onClick={() => console.log(`Learn More about ${service.title}`)}
                                className="inline-flex text-sm items-center  font-semibold hover:text-[#cc2221] transition-colors group"
                            >
                                Learn More
                                <ChevronsRight className='h-3 w-3 ml-3' />
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions
