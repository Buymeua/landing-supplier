import { useState } from "react";
import { Customer1, Customer2, Customer3, Customer4 } from "../assets";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import { BackgroundCircles } from "./desing/Hero";
import { ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import { AppleIcon, GooglePlayIcon, WebBrowserIcon } from "../icons";
import { useStore } from "../store/store";

interface HeroProps {
    props: {
        title: string;
        description: string;
        showCustomer: boolean;
    };
    handleFocus: () => void;
}

export default function Hero({ props, handleFocus }: HeroProps) {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

    const setSelection = useStore((state) => state.setSelection);

    const handleSelect = (type: 'for_dropshipping' | 'for_suppliers') => {
        if (selectedType !== type) {
            setSelectedPlatform(null);
            setSelectedType(type);
            setSelection({
                action: type,
                platform: type === 'for_suppliers' ? 'supplier' : null,
            });
            if (type === 'for_suppliers') {
                handleFocus();
            }
        }
    };

    const handlePlatformClick = (platform: 'apple' | 'google' | 'browser') => {
        setSelectedPlatform(platform);
        setSelection({
            action: 'for_dropshipping',
            platform,
        });
        handleFocus();
    };

    return (
        <div className="relative">
            <div className="mt-10 sm:mt-auto max-w-[1096px] m-auto px-4 sm:px-0 py-2 sm:py-20">
                <BackgroundCircles />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        to="/terms"
                        className="text-center gap-1 flex items-center relative z-20 text-white text-base cursor-pointer justify-center mt-5"
                    >
                        ✅ <span className="underline">Умови співробітництва</span>
                    </Link>
                </motion.div>

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
                                <img src={Customer2} className="-ml-2 w-6 sm:w-auto" alt="customer" />
                                <img src={Customer3} className="-ml-2 w-6 sm:w-auto" alt="customer" />
                                <img src={Customer4} className="-ml-2 w-6 sm:w-auto" alt="customer" />
                            </div>
                            <h1 className="text-xs sm:text-sm pr-1 sm:pr-6">Більше 50К виконаних замовлень</h1>
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

                    <motion.div
                        className="mt-8 m-auto w-full justify-center flex-col sm:flex-row flex items-center gap-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <Button
                            onClick={() => handleSelect("for_dropshipping")}
                            variant={selectedType === "for_dropshipping" ? 'filled' : 'outline'}
                            className="flex items-center gap-2 !border
                             transition duration-300 ease-in-out hover:scale-[.995] hover:shadow-lg"
                        >
              <span className={`w-4 h-4 rounded-full border border-white flex items-center justify-center transition-all duration-300
                ${selectedType === null ? 'animate-pulse' : ''}`}>
                <span className={`w-2.5 h-2.5 rounded-full bg-[#ab0000] transform transition-transform duration-300 ease-out
                  ${selectedType === "for_dropshipping" ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
              </span>
                            Для дропшиперів
                        </Button>

                        <Button
                            onClick={() => handleSelect("for_suppliers")}
                            variant={selectedType === "for_suppliers" ? 'filled' : 'outline'}
                            className="flex items-center gap-2 !border transition duration-300 ease-in-out hover:scale-[.995] hover:shadow-lg"
                        >
              <span className={`w-4 h-4 rounded-full border border-white flex items-center justify-center transition-all duration-300
                ${selectedType === null ? 'animate-pulse' : ''}`}>
                <span className={`w-2.5 h-2.5 rounded-full bg-[#ab0000] transform transition-transform duration-300 ease-out
                  ${selectedType === "for_suppliers" ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
              </span>
                            Для постачальників
                        </Button>
                    </motion.div>
                </div>

                {selectedType === 'for_dropshipping' && (
                    <motion.div
                        className="mt-6 flex-col sm:flex-row sm:mt-12 m-auto justify-center flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0 }}
                    >
                        {[
                            { key: 'apple', label: 'App Store', Icon: AppleIcon },
                            { key: 'google', label: 'Google Play', Icon: GooglePlayIcon },
                            { key: 'browser', label: 'У браузері', Icon: WebBrowserIcon },
                        ].map(({ key, label, Icon }) => {
                            const isActive = selectedPlatform === key;
                            return (
                                <a
                                    key={key}
                                    onClick={() => handlePlatformClick(key as 'apple' | 'google' | 'browser')}
                                    className="py-2 sm:py-3 justify-center group text-white font-medium text-sm sm:text-xl cursor-pointer relative z-10 border flex items-center gap-2 border-white rounded-xl px-3 sm:px-5"
                                >
                                    <Icon />
                                    <span>{label}</span>
                                    <div
                                        className={`absolute inset-0 h-full w-full rounded-xl transition-all duration-300
                      ${isActive ? 'scale-100 bg-white/20' : 'scale-0 group-hover:scale-100 group-hover:bg-white/20'}
                    `}
                                    />
                                </a>
                            );
                        })}
                    </motion.div>
                )}

                <div
                    className={`absolute left-0 bg-pattern w-full h-[620px] ${
                        selectedType === "for_dropshipping" ? 'top-[180px]' : 'top-[380px]'
                    }`}
                />
            </div>
        </div>
    );
}
