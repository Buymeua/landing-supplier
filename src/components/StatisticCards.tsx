import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BoltIcon } from "../icons";
import { Frame98Png } from "../assets";

const StatisticCards = () => {
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const [isCard1Visible, setIsCard1Visible] = useState(false);
    const [isCard2Visible, setIsCard2Visible] = useState(false);

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === card1Ref.current) {
                        setIsCard1Visible(true);
                        observer.unobserve(entry.target);
                    }
                    if (entry.target === card2Ref.current) {
                        setIsCard2Visible(true);
                        observer.unobserve(entry.target);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (card1Ref.current) observer.observe(card1Ref.current);
        if (card2Ref.current) observer.observe(card2Ref.current);

        return () => {
            if (card1Ref.current) observer.unobserve(card1Ref.current);
            if (card2Ref.current) observer.unobserve(card2Ref.current);
        };
    }, []);

    return (
        <div className="w-full flex gap-[30px]">
            {/* First Card */}
            <motion.div
                ref={card1Ref}
                className="w-fit min-w-[254px] bg-[#101111] overflow-hidden relative z-10 px-6 py-8 flex gap-[10px] items-center rounded-3xl text-white border border-[#373737]"
                initial={{ opacity: 0, y: 40 }} // Slide from bottom
                animate={isCard1Visible ? { opacity: 1, y: 0 } : {}} // Animate when visible
                transition={{ duration: 0.7 }}
            >
                <motion.h1
                    className="font-bold text-[40px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isCard1Visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    40K
                </motion.h1>
                <motion.p
                    className="max-w-[124px] text-center text-sm text-[#787878] font-light"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isCard1Visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Унікальних товарів від постачальників
                </motion.p>
            </motion.div>

            {/* Second Card */}
            <motion.div
                ref={card2Ref}
                className="overflow-hidden w-full relative z-10 px-4 py-6 bg-[#121314] flex flex-col gap-1 rounded-3xl text-white border border-[#373737]"
                initial={{ opacity: 0, x: 50 }} // Slide from right
                animate={isCard2Visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isCard2Visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <BoltIcon />
                    <h2 className="text-lg text-[#F0F0F0] relative z-20 font-medium">Більше, аніж просто додаток</h2>
                </motion.div>
                <motion.p
                    className="text-[#787878] max-w-[214px] relative z-20 font-light text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isCard2Visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Ваш провідник між постачальником та продавцем
                </motion.p>
                <motion.div
                    className=" bg-frame bg-contain bg-no-repeat h-[154px] opacity-60 w-[318px] absolute -right-4 top-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isCard2Visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                />
            </motion.div>
        </div>
    );
};

export default StatisticCards;
