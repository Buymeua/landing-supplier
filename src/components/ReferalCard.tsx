import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ReferalCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Set visibility to true when in view
                        observer.unobserve(entry.target); // Stop observing after it comes into view
                    }
                });
            },
            { threshold: 0.05 } // Trigger when 5% of the card is visible
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current); // Clean up the observer
            }
        };
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className="w-[392px] overflow-hidden justify-end bg-refImage bg-cover relative z-10 px-6 py-6 bg-[#121314] flex flex-col gap-4 rounded-3xl text-white border border-[#373737]"
            initial={{ opacity: 0, x: 100 }} // Initial state: hidden and slightly translated right
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate to visible position
            transition={{ duration: 0.7 }} // Duration of the animation
        >
            <div className={'absolute w-full h-full left-0 top-0 inner-shadow'} />
            <div className={'text-[#F0F0F0] relative z-20'}>
                <motion.h1
                    className={'text-lg font-normal'}
                    initial={{ opacity: 0, y: 10 }} // Initial state for text
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} // Animate text
                    transition={{ duration: 0.7 }} // Duration for text animation
                >
                    Запроси друга та отримай 5% знижки
                </motion.h1>
                <motion.p
                    className={'text-base font-light'}
                    initial={{ opacity: 0, y: 10 }} // Initial state for text
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} // Animate text
                    transition={{ duration: 0.7, delay: 0.2 }} // Duration and delay for text animation
                >
                    Наш додаток включає систему лояльності
                </motion.p>
            </div>
        </motion.div>
    );
};

export default ReferalCard;
