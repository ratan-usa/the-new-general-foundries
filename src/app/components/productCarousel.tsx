'use client';

import { HandFist, MapPinIcon, Radar, Target } from 'lucide-react';

interface ProductItemCardProps {
    id: number;
    count: string;
    label: string;
    index: number; // Added index to determine color
}

interface ScrollRowProps {
    data: Omit<ProductItemCardProps, 'index'>[]; // Data doesn't have index yet
    duration: number;
}

const MetricSection = () => {
    // ... (MetricSection code remains unchanged)
    return (
        <section className="max-w-5xl mx-auto">
            <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
                <h2 className="text-[30px] text-white font-extrabold text-center mb-16 max-w-3xl mx-auto">
                    Boundless patterns and innovations
                </h2>
            </div>
        </section>
    );
};

// --- PRODUCT CAROUSEL COMPONENTS ---

const ProductItemCard = ({ count, label, index }: ProductItemCardProps) => {
    // Logic: Even index = Red, Odd index = Dark/Black
    // We use neutral-900 instead of pure black so it stands out from the section bg
    const isRed = index % 2 === 0;

    return (
        <div
            className={`
            shrink-0 rounded-xl p-4 transition-transform duration-300 hover:scale-105
            w-[250px] h-[100px] flex flex-col justify-center items-center shadow-sm cursor-pointer border border-white/10
            ${isRed ? 'bg-[#cc2221]' : 'bg-neutral-900'} 
        `}
        >
            <p className="font-extrabold text-white text-xl mb-1">{count}</p>
            <p className="text-center text-white text-[13px] leading-tight opacity-90">{label}</p>
        </div>
    );
};

const ProductCarousel = () => {
    const productData = [
        { id: 1, count: "1200+", label: "Manholes Patterns" },
        { id: 2, count: "4000+", label: "Curb Inlet Patterns" }, // Fixed typo "Intet" -> "Inlet"
        { id: 3, count: "3000+", label: "Catch Basin Patterns" },
        { id: 4, count: "1500+", label: "Water Works Patterns" },
        { id: 5, count: "200+", label: "Cleanout Patterns" },
        { id: 6, count: "5000+", label: "Trench Patterns" },
    ];

    // Create an array that is duplicated so the scrolling is seamless
    const scrollingData = [...productData, ...productData];

    const cardWidth = 236; 
    const totalItems = productData.length;
    // Note: scrollDistance needs to be calculated based on the FULL width of the unique set
    // totalItems (6) * cardWidth.
    const scrollDistance = totalItems * cardWidth; 

    const ScrollRow = ({ data, duration }: ScrollRowProps) => (
        <div
            className="flex space-x-4 pb-4 px-1 whitespace-nowrap"
            style={{
                animation: `marquee ${duration}s linear infinite`
            }}
        >
            {data.map((item, index) => (
                <ProductItemCard
                    key={`${item.label}-${index}`}
                    id={item.id}
                    count={item.count}
                    label={item.label}
                    index={index} // Pass index here to control color
                />
            ))}
        </div>
    );

    return (
        <section className="py-10 bg-black">
            <MetricSection />
            <div className="space-y-4 w-full">
                {/* Row 1 */}
                <div
                    className="relative flex overflow-x-hidden"
                    style={{
                        maskImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)`,
                        WebkitMaskImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)`,
                    }}
                >
                    <ScrollRow data={scrollingData} duration={30} />
                </div>

                {/* Row 2 (Optional: Reverse direction or just another row) */}
                {/* To make this interesting, we can offset the index on the second row so the colors are swapped vertically */}
                <div
                    className="relative flex overflow-x-hidden"
                    style={{
                        maskImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)`,
                        WebkitMaskImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)`,
                    }}
                >
                     {/* We pass a modified data set or just rely on the same logic. 
                         If you want the second row to start with Black instead of Red, 
                         we can pass index + 1 logic inside, but simpler is just to render it. */}
                    <div
                        className="flex space-x-4 pb-4 px-1 whitespace-nowrap"
                        style={{
                            animation: `marquee ${35}s linear infinite reverse` // Added reverse for visual variety
                        }}
                    >
                         {scrollingData.map((item, index) => (
                            <ProductItemCard
                                key={`${item.label}-${index}-row2`}
                                id={item.id}
                                count={item.count}
                                label={item.label}
                                index={index + 1} // Offset by 1 so the colors are opposite to the top row
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${scrollDistance}px); }
                }
            `}</style>
        </section>
    );
};

export default ProductCarousel;