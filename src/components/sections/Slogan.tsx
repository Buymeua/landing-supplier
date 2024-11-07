import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import React from "react";
import { Elips1 } from "../../assets";

export default function Slogan() {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
    };

    return (
        <div className='max-w-[1096px] w-full relative flex px-2 sm:px-0 flex-col pb-10 overflow-hidden sm:overflow-visible sm:h-auto mt-[120px] m-auto'>
            <motion.div
                className='absolute flex justify-center w-full h-full py-0 md:py-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageVariants}
            >
                <img src={Elips1} alt="" />
            </motion.div>

            <motion.div
                className='relative z-10 w-full flex items-start'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                transition={{ delay: 1.2 }}
            >
                <h1 className='leading-9 font-bold text-[40px] sm:text-[56px] md:text-[74px] lg:text-[80px] text-[#F8F8FC] md:leading-[88px]'>
                    Оптимізуй <br /> свою роботу
                </h1>
            </motion.div>

            <motion.div
                className='relative mt-4 sm:0 z-10 w-full flex justify-end items-end'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                transition={{ delay: 1.4 }}
            >
                <h1
                    className='leading-9 font-bold text-[40px] sm:text-[56px] md:text-[74px] lg:text-[80px] text-end md:leading-[88px] bg-gradient-to-r from-[#333333] via-[#777777] to-[#CCCCCC] text-transparent bg-clip-text'
                >
                    Користуйся <br /> додатком Buyme
                </h1>
            </motion.div>
        </div>
    );
}
