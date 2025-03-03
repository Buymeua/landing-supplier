import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {
    Screen1,
    Screen2,
    Screen3, Screen4, Screen5, Screen6, Screen7, Screen8, Screen9
} from "../../assets";
import {isTablet} from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PreviewFunc = () => {
    return (
        <div id='functions'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={headerVariants}
                viewport={{ once: true }}
                className="flex px-4 w-full mt-12"
            >
                <h1 className=' text-[26px] m-auto sm:text-[60px] font-bold text-center text-white'>Функціонал</h1>
            </motion.div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HorizontalScrollCarousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            slideToClickedSlide={true} // This will center the clicked slide
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                1900: { slidesPerView: 6 },
            }}
            navigation
            className="w-full justify-center flex items-center mt-10"
        >
            {cards.map((card) => (
                <SwiperSlide className={'flex  justify-center items-center'} key={card.id}>
                    <Card card={card} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className={`group flex flex-col items-center relative rounded-[20px] sm:rounded-[24px] h-[580px] sm:h-[612px] w-[306px] sm:w-[348px] overflow-hidden ${
                card.id === 3 ? 'justify-start' : 'justify-between'
            } ${card.className}`}
        >
            <div className="p-4 sm:p-8 text-white space-y-2">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardTitleVariants}
                    className="text-xl  sm:font-bold"
                >
                    {card.title}
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardDescriptionVariants}
                    className="font-sans text-[#f3f3f3] font-light text-sm"
                >
                    {card.des}
                </motion.p>
            </div>
            <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardImageVariants}
                className={card.id === 3 ? 'w-[180px]' : ''}
                src={card.pic}
            />
        </div>
    );
};

const cardTitleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardImageVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { duration: 0.9 } },
};

const cardDescriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default PreviewFunc;

type CardType = {
    pic: any;
    title: string;
    des: string;
    id: number;
    className: string;
};

const cards: CardType[] = [
    {
        pic: Screen1,
        title: "Додавання товару у платформі постачальників",
        des: "Внесення основної інформації про товари (назва, ціна, кількість, опис) для їх доступності замовникам.",
        id: 1,
        className: 'card-gradient-1',
    },
    {
        pic: Screen2,
        title: "Автоматизований імпорт товарів у форматі YML",
        des: "Автоматичне завантаження товарів з файлів у форматі YML для швидкого оновлення даних на платформі.",
        id: 2,
        className: 'card-gradient-2',
    },
    {
        pic: Screen3,
        title: "Синхронізація товару з додатком BuyMe",
        des: "Автоматичне оновлення даних товарів на платформі в додатку BuyMe.",
        id: 3,
        className: 'card-gradient-3',
    },
    {
        pic: Screen4,
        title: "Налаштування нової пошти та контрагентів",
        des: "Додавання та налаштування Нової пошти і контрагентів для автоматизації відправок у платформі постачальників.",
        id: 4,
        className: 'card-gradient-4',
    },
    {
        pic: Screen5,
        title: "Налаштування методів оплати",
        des: "Вибір способів оплати: накладений платіж, баланс дропшипера, онлайн-оплата MonoBank, реквізити.",
        id: 5,
        className: 'card-gradient-5',
    },
    {
        pic: Screen6,
        title: "Обмін повідомленями між дропшипером та постачальником",
        des: "Комунікація між дропшипером та постачальником через платформу для узгодження деталей співпраці.",
        id: 6,
        className: 'card-gradient-6',
    },
    {
        pic: Screen7,
        title: "Система балансів",
        des: "Контроль і управління фінансовими балансами для зручності розрахунків і моніторингу.",
        id: 7,
        className: 'card-gradient-7',
    },
    {
        pic: Screen8,
        title: "Розрахунок з дропшиперами",
        des: "Автоматичний розрахунок та облік фінансових операцій з дропшиперами для швидких і точних обчислень.",
        id: 8,
        className: 'card-gradient-8',
    },
    {
        pic: Screen9,
        title: "Створення власного інтернент-магазину",
        des: "Створюйте власний інтернент-магазин на основі товарів постачальника.",
        id: 9,
        className: 'card-gradient-9',
    }
];
