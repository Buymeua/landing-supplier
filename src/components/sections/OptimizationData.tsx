import {motion} from 'framer-motion';
import { EnergyIcon } from "../../icons";
import { useRef } from "react";
import {isTablet} from "../../utils";
import SectionHeader from "./SectionHeader";

export default function OptimizationData() {
    const sectionRefSecond = useRef(null);

    return (
        <div
            className='max-w-[1096px] overflow-hidden sm:overflow-visible sm:h-auto mt-[148px] m-auto'>

            <SectionHeader id='about'  title={'Оптимізовані процеси обробки даних'} subtitle={'Про нас в цифрах'} />
            <div ref={sectionRefSecond} className='mt-16 px-4 md:px-0 min-h-[600px] flex flex-col md:flex-row gap-2 md:gap-4 items-end pb-20'>
                <motion.div
                    className={'w-full md:w-[320px] flex   flex-row-reverse md:flex-col justify-between  rounded-2xl md:rounded-[32px] gradient-1'}
                    initial={{ scale: 0.8, opacity: 0, height: isTablet() ? 40 : 180 }}
                    whileInView={{ scale: 1, opacity: 1, height: isTablet() ? 120 : 341 }}
                    transition={{ duration: 0.7, delay: 0 }}
                    viewport={{ root: sectionRefSecond, once:true }}
                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3 h-fit'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-full md:h-[180px] flex-col flex justify-between p-4 sm:pb-8'}>
                        <motion.h1
                            className=' text-start sm:text-center text-[#F8F8FC]  text-[30px]  sm:text-[42px] lg:text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {'<'}2K ТТН
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>Оновлення статусів за хвилину</p>
                    </div>
                </motion.div>

                <motion.div
                    className={'w-full md:w-[320px] flex flex-row-reverse md:flex-col justify-between  rounded-2xl md:rounded-[32px] gradient-2'}
                    initial={{ scale: 0.8, opacity: 0,  height: isTablet() ? 40 : 180  }}
                    whileInView={{ scale: 1, opacity: 1, height:isTablet() ? 120 : 500 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}

                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3 h-fit'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-full md:h-[180px] flex-col flex justify-between p-4 sm:pb-8'}>
                        <motion.h1
                            className=' text-start sm:text-center text-[#F8F8FC]  text-[30px]  sm:text-[42px] lg:text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay:0.8 }}
                        >
                          41K+
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>Унікальних товарів</p>
                    </div>
                </motion.div>

                <motion.div
                    className={'w-full md:w-[320px] flex  flex-row-reverse md:flex-col justify-between  rounded-2xl md:rounded-[32px] gradient-3'}
                    initial={{ scale: 0.8, opacity: 0, height: isTablet() ? 40 : 180  }}
                    whileInView={ { scale: 1, opacity: 1, height:isTablet() ? 120 : 480 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}

                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3 h-fit'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-full md:h-[180px] flex-col flex justify-between p-4 sm:pb-8'}>
                        <motion.h1
                            className='text-start sm:text-center text-[#F8F8FC] text-[30px]  sm:text-[42px] lg:text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            34 сек
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>оформлення замовлення</p>
                    </div>
                </motion.div>
                <motion.div
                    className={'w-full md:w-[320px] flex  flex-row-reverse md:flex-col justify-between rounded-2xl md:rounded-[32px] gradient-4'}
                    initial={{ scale: 0.8, opacity: 0, height: isTablet() ? 40 : 180  }}
                    whileInView={{ scale: 1, opacity: 1, height:isTablet() ? 120 : 400 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    viewport={{ once: true }}
                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3 h-fit'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-full md:h-[180px] flex-col flex justify-between p-4 sm:pb-8'}>
                        <motion.h1
                            className=' text-start sm:text-center text-[#F8F8FC]  text-[30px]  sm:text-[42px] lg:text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                        >
                            90%
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>оптимізація процесів</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
