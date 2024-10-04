import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";


export const Gradient = () => {
    return (
        <>
            <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
            <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </>
    );
};


const Rings = () => {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </>
    );
};

export const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute left-0 lg:left-1/2 z-10  w-full lg:w-[78rem] aspect-square -translate-x-1/2  ">

            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                    <div
                        className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#ab0000] to-[#da1212] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    <div
                        className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#e00000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div
                        className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#e00000] to-[#ab0000] rounded-full xl:block transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div
                        className={`w-2 h-2 -ml-1.5 mt-52 bg-gradient-to-b from-[#ab0000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 -right-2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                    <div
                        className={`w-3 h-3 -ml-3 -mt-3 bg-gradient-to-b from-[#ab0000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                    <div
                        className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#ab0000] to-[#ab0000] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
            </MouseParallax>
        </div>
    );
};