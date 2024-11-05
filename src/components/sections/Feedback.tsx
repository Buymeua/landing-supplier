import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Customer1, Customer2, Customer3, Customer6, Elips1, Elips2 } from "../../assets";
import { ArrowIcon } from "../../icons";

const testimonials = [
    {
        name: "Катерина",
        company: "Luxury Drop",
        text: "Платформа дала змогу економити багато часу та займатись розвитком бізнесу більш активно.",
        customerIcon: Customer6
    },
    {
        name: "Іван",
        company: "TechNova",
        text: "Завдяки цій платформі ми знизили витрати і підвищили продуктивність.",
        customerIcon: Customer2
    },
    {
        name: "Ольга",
        company: "GreenLife",
        text: "Ми швидко впровадили нові ідеї, і це допомогло нашому зростанню.",
        customerIcon: Customer3
    },
    {
        name: "Сергій",
        company: "BuildSmart",
        text: "Платформа допомогла нам удосконалити процеси і стати більш ефективними.",
        customerIcon: Customer1
    }
];

const TestimonialText = ({ text }) => {
    const words = text.split(" ");
    return (
        <h1 className="text-white relative z-10 text-2xl sm:text-[44px] md:text-[60px] font-semibold sm:leading-[56px] md:leading-[72px]">
            {words.map((word, index) => {
                if (index >= 2 && index <= 4) {
                    return (
                        <span
                            key={index}
                            className=' text-2xl sm:text-[44px] md:text-[60px] font-semibold sm:leading-[56px] md:leading-[72px] text-end  bg-gradient-to-r from-[#333333] via-[#777777] to-[#CCCCCC] text-transparent bg-clip-text'
                        >
                            {word}{" "}
                        </span>
                    );
                }
                return `${word} `;
            })}
        </h1>
    );
};

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="max-w-[1096px] mx-auto px-4 sm:px-0 py-10 mt-12 sm:mt-[120px]">
            <div className="flex flex-col gap-8">
                <div className="relative h-[120px] sm:h-[300px] flex justify-center items-center">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, position: "static" }}
                            animate={{ opacity: 1, position: "static" }}
                            exit={{ opacity: 0, position: "absolute" }}
                            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                            className="text-center"
                        >
                            <TestimonialText text={testimonials[currentIndex].text} />
                        </motion.div>
                    </AnimatePresence>
                    <motion.div
                        className='absolute flex justify-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 2 } },
                        }}
                    >
                        <img src={Elips2} alt=""/>
                    </motion.div>
                </div>

                <div className="flex flex-row items-center justify-between sm:flex-col gap-4">
                    <div className="flex flex-row gap-2 sm:flex-col items-center">
                        <img className="w-12 h-12" src={testimonials[currentIndex].customerIcon} alt="Customer"/>
                        <div className="mb-0 sm:mb-8 text-start sm:text-center">
                            <h3 className="text-white text-base">{testimonials[currentIndex].name}</h3>
                            <h4 className="text-[#BBBBBC] font-light text-sm">{testimonials[currentIndex].company}</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrev}
                            className="bg-[#FFFFFF08] w-[50px] h-[50px] flex justify-center items-center rounded-full"
                        >
                            <span className="rotate-180">
                                <ArrowIcon color="#FFFFFF33" />
                            </span>
                        </motion.button>
                        <span className="text-[#BBBBBC] text-sm"> {currentIndex + 1} / {testimonials.length}</span>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="bg-[#FFFFFF08] rounded-full w-[50px] flex items-center justify-center h-[50px]"
                        >
                            <ArrowIcon color="white" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
