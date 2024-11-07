import {motion} from "framer-motion";

export default function SectionHeader({id, title, subtitle , des}: any) {
    return (
        <div id={id} className=' pt-5 sm:pt-8 text-center'>
            <motion.p
                className='uppercase text-sm text-[#BBBBBC]'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            >
                {subtitle}
            </motion.p>
            <motion.h1
                className='mt-6 text-white font-semibold text-[30px] sm:text-[50px] md:text-[60px] md:leading-[64px]'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7, delay: 0.2}}
            >
                {title}
            </motion.h1>
            <motion.p
                className=' flex justify-center  m-auto items-center w-full sm:w-[50%] text-sm mt-3 text-[#BBBBBC]'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
            >
                {des}
            </motion.p>

        </div>
    )
}