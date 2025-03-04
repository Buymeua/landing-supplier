import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {AppsIcon} from "../../icons";
import {CSvg, HSvg, PromSvg, TgSvg} from "../../assets";

const IntegrationCard = () => {
    const cardRef = useRef<any>(null);
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
            {threshold: 0.05} // Trigger when 5% of the card is visible
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
            className="w-full relative z-10 px-4 py-6 bg-[#121314] flex flex-col gap-4 rounded-3xl text-white border border-[#373737]"
            initial={{opacity: 0, y: -40}}
            animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: -40}}
            transition={{duration: 0.7}}
        >
            <AppsIcon/>
            <div className='flex flex-col gap-1'>
                <h2 className="text-lg text-[#F0F0F0] font-medium">Інтеграція з іншими сервісами</h2>
                <p className="text-[#787878] font-light text-base">
                    Всі необхідні інтеграції зібрані в одному додатку
                </p>
            </div>
            <div className={'mt-5 cursor-pointer flex gap-3'}>
                {[HSvg, PromSvg, CSvg, TgSvg].map((imgSrc, index) => (
                    <motion.div
                        key={index}
                        className="  w-16 h-16 sm:w-20  sm:h-20 bg-black flex justify-center items-center rounded-full border border-[#FFFFFF33] p-4"
                        initial={{opacity: 0, y: 20}} // Starts slightly below and invisible
                        animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: 20}} // Animate up and fade in
                        transition={{
                            duration: 0.5,
                            delay: isVisible ? index * 0.2 : 0
                        }} // Staggered delay for each icon
                    >
                        <img src={imgSrc} alt={`Service ${index + 1}`}/>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default IntegrationCard;
