import {motion} from 'framer-motion';
import { EnergyIcon } from "../../icons";
import { useRef } from "react";

export default function OptimizationData() {
    const sectionRefSecond = useRef(null);

    return (
        <div
            className='max-w-[1096px] overflow-hidden sm:overflow-visible sm:h-auto mt-[148px] m-auto'
        >
            <div className='pt-20 text-center'>
                <motion.p
                    className='text-[#BBBBBC]'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}

                >
                    Про нас в цифрах
                </motion.p>
                <motion.h1
                    className='mt-8 text-white font-semibold text-[60px]'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Оптимізовані процеси <br /> обробки даних
                </motion.h1>
            </div>
            <div ref={sectionRefSecond} className='mt-16 min-h-[600px] flex gap-4 items-end pb-20'>
                <motion.div
                    className={'w-[320px] flex flex-col justify-between rounded-[32px] gradient-1'}
                    initial={{ scale: 0.8, opacity: 0, height: 180 }}
                    whileInView={{ scale: 1, opacity: 1, height: 341 }}
                    transition={{ duration: 0.7, delay: 0 }}
                    viewport={{ root: sectionRefSecond, once:true }}
                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-[180px] flex-col flex justify-between pb-8'}>
                        <motion.h1
                            className='text-center text-[#F8F8FC] text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {'<'}2K ТТН
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>Оновлення статусів за хвилину</p>
                    </div>
                </motion.div>

                <motion.div
                    className={'w-[320px] flex flex-col justify-between rounded-[32px] gradient-2'}
                    initial={{ scale: 0.8, opacity: 0, height: 180 }}
                    whileInView={{ scale: 1, opacity: 1, height: 500 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}

                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-[180px] flex-col flex justify-between pb-8'}>
                        <motion.h1
                            className='text-center text-[#F8F8FC] text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay:0.8 }}
                        >
                          41K+
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>Унікальних товарів</p>
                    </div>
                </motion.div>

                <motion.div
                    className={'w-[320px] flex flex-col justify-between rounded-[32px] gradient-3'}
                    initial={{ scale: 0.8, opacity: 0, height: 180 }}
                    whileInView={ { scale: 1, opacity: 1, height: 480 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}

                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-[180px] flex-col flex justify-between pb-8'}>
                        <motion.h1
                            className='text-center text-[#F8F8FC] text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            34 сек
                        </motion.h1>
                        <p className={'text-center text-[#F8F8FC] font-light '}>оформлення замовлення</p>
                    </div>
                </motion.div>
                <motion.div
                    className={'w-[320px] flex flex-col justify-between rounded-[32px] gradient-4'}
                    initial={{ scale: 0.8, opacity: 0, height: 180 }}
                    whileInView={{ scale: 1, opacity: 1, height: 400 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    viewport={{ once: true }}

                >
                    <div className='rounded-full bg-[#FFFFFF1A] border-4 border-white/10 w-fit m-3 p-3'>
                        <EnergyIcon />
                    </div>
                    <div className={'h-[180px] flex-col flex justify-between pb-8'}>
                        <motion.h1
                            className='text-center text-[#F8F8FC] text-[54px] font-semibold'
                            initial={{ y: 20, opacity: 0 }}
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
