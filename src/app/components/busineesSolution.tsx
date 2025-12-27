import { Amphora, ChevronsRight, Droplets, Factory, TowerControl } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local'
import { services } from '@/lib/newsData';
// 1. Load the local font file
const apricotsFont = localFont({
    // Go up two levels (../../) to get out of /components and /app, then into /lib/fonts
    // src: '../../lib/fonts/Apricots.otf', 
    src: '../../lib/fonts/Horizon.otf',
    display: 'swap',
})
const BusinessSolutions = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className={`
    text-[60px] lg:text-[90px] text-center mb-12 mx-auto 
    
    /* Red (0-49%), Thin White Line (49-51%), Black (51-100%) */
    bg-[linear-gradient(to_bottom,#cc2221_44%,#ffffff_44%,#ffffff_46%,black_46%)]
    
    bg-clip-text text-transparent
    ${apricotsFont.className}
`}>
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
