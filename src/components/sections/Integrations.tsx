import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import React from "react";
import { CSvg, HSvg, PromSvg, TgSvg } from "../../assets";

type integrationsType = { title: string; des: string, iconPath: any };

export default function Integrations() {
    const integrations: integrationsType[] = [
        {
            title: 'Nova Poshta',
            des: 'Повна інтеграція з НП. Створення ТТН, додавання контрагентів, трекінг, фактичні відмови та багато іншого.',
            iconPath: HSvg
        },
        {
            title: 'Checkbox',
            des: 'Вам не потрібен касовий апарат, ми інтегрували в CRM кращий програмний РРО для вашого бізнесу.',
            iconPath: CSvg
        },
        {
            title: 'Prom.UA',
            des: 'Вивантаження всіх ваших позицій  у потрібному форматі та актуальній наявності.',
            iconPath: PromSvg
        },
        {
            title: 'Telegram',
            des: 'Отримуйте всі найважливіші сповіщення  в нашому Telegram боті.',
            iconPath: TgSvg
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className='max-w-[1096px] pb-10 overflow-hidden sm:overflow-visible sm:h-auto m-auto'>
            <SectionHeader id='integration' title='Зв’язок з іншими сервісами' />

            <div className='mt-20 px-4 md:px-0 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
                {integrations.map((integration: integrationsType, index: number) =>
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true }}
                        className='flex gap-4 flex-col justify-center bg-[#FFFFFF08] items-start sm:items-center p-4 h-[140px] sm:h-[353px] rounded-[24px]'
                    >
                        <div className='flex flex-row sm:flex-col items-center gap-4 sm:gap-8'>
                            <motion.div
                                className='w-12 h-12 sm:w-[72px] sm:h-[72px] border p-1.5 sm:p-5 border-[#FFFFFF33] flex items-center justify-center rounded-full bg-black'
                                initial="hidden"
                                whileInView="visible"
                                variants={titleVariants}
                                viewport={{ once: true }}
                            >
                                <img src={integration.iconPath} alt={`integration ${index + 1}`} />
                            </motion.div>
                            <motion.h1
                                className='font-semibold text-white text-base sm:text-2xl text-center'
                                initial="hidden"
                                whileInView="visible"
                                variants={titleVariants}
                                viewport={{ once: true }}
                            >
                                {integration.title}
                            </motion.h1>
                        </div>
                        <motion.p
                            className='w-full text-sm text-start max-w-[450px] sm:text-center text-[#BBBBBC]'
                            initial="hidden"
                            whileInView="visible"
                            variants={descriptionVariants}
                            viewport={{ once: true }}
                        >
                            {integration.des}
                        </motion.p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
