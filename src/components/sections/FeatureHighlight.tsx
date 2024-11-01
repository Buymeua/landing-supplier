import SectionHeader from "./SectionHeader";
import { FeatureIcon } from "../../icons";
import { motion } from "framer-motion";

type featureType = { title: string; des: string};

export default function FeatureHighlight() {

    const features: featureType[] = [
        {
            title: 'Синхронізація наявності',
            des: 'Ведення наявності товару на вашому складі + Google-таблиця наявності (автоматично синхронізується з CRM)'
        },
        {
            title: 'Обробка даних про посилки',
            des: 'Автоматичне створення ТТН відповідно до даних: вага / об’єм / опис / кількість місць'
        },
        {
            title: 'Оформлення та ведення замовлень',
            des: 'Дозволяє в легкий та зручний спосіб інтегрувати нашу CRM з іншими програмами та платформами'
        },
        {
            title: 'Необмежена кількість контрагентів НП',
            des: 'Кабінети контрагентів додаються через АРI-ключ і перемикаються в один клік'
        }
    ];

    return (
        <div className='max-w-[1096px] pb-10 overflow-hidden sm:overflow-visible sm:h-auto mt-3 sm:mt-[148px] m-auto'>
            <SectionHeader
                title='Більше ніж просто додатокs'
                subtitle='Переваги'
                des='Buyme є мультизадачним помічником, який спрощує, пришвидшує та автоматизує 90% процесів між постачальником та продавцем'
            />

            <div className='mt-20 px-4 md:px-0 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {features.map((feature: featureType, index: number) => {
                    const initialAnimation =
                        index === 0 ? { x: -50, opacity: 0 } :       // From left
                            index ==  1 ? { y: -50, opacity: 0 } :       // From top
                                index === 2 ? { y: -50, opacity: 0 } :        // From bottom
                                    { x: 50, opacity: 0 };        // From right

                    return (
                        <motion.div
                            key={index}
                            initial={initialAnimation}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className='flex gap-4 flex-col justify-center bg-[#FFFFFF08] h-[132px] p-4 sm:h-[484px] rounded-[24px]'
                        >
                            <div className='flex flex-row sm:flex-col items-center gap-4 sm:gap-8'>
                                <div className='w-fit border p-2 sm:p-5 border-[#FFFFFF33] h-fit rounded-full bg-black'>
                                    <FeatureIcon />
                                </div>
                                <h1 className='font-semibold text-white text-base sm:text-2xl text-center'>
                                    {feature.title}
                                </h1>
                            </div>
                            <p className='w-full sm:max-w-[260px] text-sm text-center text-[#BBBBBC]'>
                                {feature.des}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
