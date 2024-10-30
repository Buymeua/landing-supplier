import {Customer1, Customer2, Customer3, Customer4} from "../assets";
import Button from "./UI/Button";
import Link from "./UI/Link";
import LinkButton from "./UI/Link";
import {BackgroundCircles, Gradient} from "./desing/Hero";
import {ScrollParallax} from "react-just-parallax";
import {useRef} from "react";


export default function Hero() {


    return (
        <div>
            <div className='max-w-[1096px] m-auto px-4 sm:px-0 py-2 sm:py-20'>
                <BackgroundCircles/>
                <ScrollParallax isAbsolutelyPositioned={false}>

                    <div
                        className="bg-white/10 mb-14 sm:mb-8 relative z-[9000] p-1  w-fit m-auto text-white flex gap-2 items-center rounded-3xl">
                        <div className="flex relative">
                            <img src={Customer1} className={'w-6 sm:w-auto'} alt={'customer'}/>
                            <img className="-ml-2 w-6 sm:w-auto" src={Customer2} alt={'customer'}/>
                            <img className="-ml-2 w-6 sm:w-auto" src={Customer3} alt={'customer'}/>
                            <img className="-ml-2 w-6 sm:w-auto" src={Customer4} alt={'customer'}/>
                        </div>
                        <h1 className="text-xs sm:text-sm pr-1 sm:pr-6">Більше 1K задоволених користувачів.</h1>
                    </div>
                </ScrollParallax>
                <div className={'mt-4 relative z-[9000] '}>
                    <h1 className="text-center text-white font-bold text-[30px] sm:text-[50px] md:text-[60px]  lg:text-[80px]  lg:leading-[90px]">
                        Дропшипінг з Buyme: <br/> шлях до успішного бізнесу
                    </h1>
                    <p className="mt-4 text-center text-base  sm:text-lg lg:text-xl text-[#A3A3A3]">
                        Втілюйте свої мрії легко з нашою інноваційною <br/> платформою для дропшипінгу
                    </p>

                    <div className="mt-8 m-auto w-full justify-center flex-col sm:flex-row flex items-center gap-5">
                        <Button>
                            Для постачальників
                        </Button>

                        <LinkButton href='/'>Для дропшиперів </LinkButton>
                    </div>
                </div>
                <div className=' absolute left-0 top-[380px]  bg-pattern w-full h-[680px] '/>

                <div>

                </div>
            </div>

        </div>
    );
}
