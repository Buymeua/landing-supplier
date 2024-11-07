import { Customer1, Customer2, Customer3, Customer4 } from "../assets";
import Button from "./UI/Button";
import LinkButton from "./UI/Link";
import { BackgroundCircles } from "./desing/Hero";
import { ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import {useTypingEffect} from "../hooks/useTypingEffect";
import {Link} from "react-router-dom";
import {AppleIcon, GooglePlayIcon} from "../icons";

export default function Hero({ props }:any) {
    return (
        <div className="relative">
            <div className="max-w-[1096px] m-auto px-4 sm:px-0 py-2 sm:py-20">
                <BackgroundCircles />
                <ScrollParallax isAbsolutelyPositioned={false}>
                    {props.showCustomer && (
                        <motion.div
                            className="bg-white/10 mb-14 sm:mb-8 relative z-[9000] p-1 w-fit m-auto text-white flex gap-2 items-center rounded-3xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex relative">
                                <img src={Customer1} className="w-6 sm:w-auto" alt="customer" />
                                <img className="-ml-2 w-6 sm:w-auto" src={Customer2} alt="customer" />
                                <img className="-ml-2 w-6 sm:w-auto" src={Customer3} alt="customer" />
                                <img className="-ml-2 w-6 sm:w-auto" src={Customer4} alt="customer" />
                            </div>
                            <h1 className="text-xs sm:text-sm pr-1 sm:pr-6">Більше 1K задоволених користувачів.</h1>
                        </motion.div>
                    )}
                </ScrollParallax>

                <div className="mt-4 relative z-10">
                    <motion.h1
                        className="text-center text-white font-bold text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] lg:leading-[90px]"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {props.title}
                    </motion.h1>

                    <motion.p
                        className="mt-4 text-center m-auto max-w-[480px] text-base sm:text-lg lg:text-xl text-[#A3A3A3]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {props.description}
                    </motion.p>

                    {/* Button Section */}
                    <motion.div
                        className="mt-8 m-auto w-full justify-center flex-col sm:flex-row flex items-center gap-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <Link to={props.button.link} >
                        <Button>{props.button.text}</Button>
                        </Link>
                        <LinkButton href={props.link.href} >{props.link.text}</LinkButton>
                    </motion.div>
                </div>

                {props.showStores &&
                <motion.div className=' mt-6 sm:mt-12 m-auto justify-center  flex gap-3'

                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                >
                    <a className=' py-2 sm:py-3 text-white group font-medium text-sm sm:text-xl cursor-pointer relative z-10 border flex items-center gap-2 border-white  rounded-xl px-3 sm:px-5'>
                        <AppleIcon />
                        <span>App Store</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>

                    </a>
                    <a className=' py-2 sm:py-3 group text-white font-medium text-sm sm:text-xl cursor-pointer relative z-10 border flex items-center gap-2 border-white  rounded-xl px-3 sm:px-5'>
                        <GooglePlayIcon />
                        <span>Google Play</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>

                    </a>
                </motion.div>
                }

                <div className={`absolute left-0 bg-pattern w-full h-[620px] ${props.showStores ? 'top-[180px]' : 'top-[380px]'}`} />
            </div>
        </div>
    );
}
