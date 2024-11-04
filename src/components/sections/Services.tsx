import SectionHeader from "./SectionHeader";
import {FeatureIcon} from "../../icons";
import {motion} from "framer-motion";


type servicesType = { title: string; des: string, iconPath: any };

export default function Services() {

    const services: servicesType[] = [
        {
            title: 'Nova Poshta',
            des: 'Повна інтеграція з НП. Створення ТТН, додавання контрагентів, трекінг, фактичні відмови та багато іншого.',
            iconPath: ''
        },
        {
            title: 'Checkbox',
            des: 'Вам не потрібен касовий апарат, ми інтегрували в CRM кращий програмний РРО для вашого бізнесу.',
            iconPath: ''
        },
        {
            title: 'Prom.UA',
            des: 'Вивантаження всіх ваших позицій  у потрібному форматі та актуальній наявності.',
            iconPath: ''
        }, {
            title: 'Telegram',
            des: 'Отримуйте всі найважливіші сповіщення  в нашому Telegram боті.',
            iconPath: ''
        },

    ];


    return (
        <div
            className='max-w-[1096px] pb-10 overflow-hidden sm:overflow-visible sm:h-auto  mt-[-100px] sm:mt-[-80px] m-auto'>
            <SectionHeader
                title='Зв’язок з іншими сервісами'
            />

            <div className='mt-20 px-4 md:px-0 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {services.map((service: servicesType, index: number) =>
                    <motion.div
                        key={index}
                        viewport={{once: true}}
                        className='flex gap-4 flex-col justify-center bg-[#FFFFFF08] p-4 h-[140px]  sm:h-[353px] rounded-[24px]'
                    >
                        <div className='flex flex-row sm:flex-col items-center gap-4 sm:gap-8'>
                            <div className='w-fit border p-2 sm:p-5 border-[#FFFFFF33] h-fit rounded-full bg-black'>
                                <FeatureIcon/>
                            </div>
                            <h1 className='font-semibold text-white text-base sm:text-2xl text-center'>
                                {service.title}
                            </h1>
                        </div>
                        <p className='w-full sm:max-w-[260px] text-sm text-center text-[#BBBBBC]'>
                            {service.des}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
