import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Divace9, Divace2, Divace3, Divace4, Divace5, Divace6, Divace7, Divace8 } from "../../assets";
import {isTablet} from "../../utils";

const PreviewFunc = () => {
    return (
        <div>
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
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", isTablet()  ? "-95%" : "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className={`group flex flex-col items-center relative rounded-[24px] h-[612px] w-[348px] overflow-hidden ${
                card.id === 3 ? 'justify-start' : 'justify-between'
            } ${card.className}`}
        >
            <div className="p-8 text-white space-y-4">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardTitleVariants}
                    className="text-xl font-bold"
                >
                    {card.title}
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardDescriptionVariants}
                    className="font-sans font-normal text-sm"
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
        pic: Divace2,
        title: "Додавання товару у платформі постачальників",
        des: "Внесення основної інформації про товари (назва, ціна, кількість, опис) для їх доступності замовникам.",
        id: 1,
        className: 'card-gradient-1',
    },
    {
        pic: Divace3,
        title: "Автоматизований імпорт товарів у форматі YML",
        des: "Автоматичне завантаження товарів з файлів у форматі YML для швидкого оновлення даних на платформі.",
        id: 2,
        className: 'card-gradient-2',
    },
    {
        pic: Divace4,
        title: "Синхронізація товару з додатком BuyMe",
        des: "Автоматичне оновлення даних товарів на платформі в додатку BuyMe.",
        id: 3,
        className: 'card-gradient-3',
    },
    {
        pic: Divace5,
        title: "Налаштування нової пошти та контрагентів",
        des: "Додавання та налаштування Нової пошти і контрагентів для автоматизації відправок у платформі постачальників.",
        id: 4,
        className: 'card-gradient-4',
    },
    {
        pic: null,
        title: "Налаштування методів оплати",
        des: "Вибір способів оплати: накладений платіж, баланс дропшипера, онлайн-оплата MonoBank, реквізити.",
        id: 5,
        className: 'card-gradient-5',
    },
    {
        pic: Divace6,
        title: "Обмін повідомленями між дропшипером та постачальником",
        des: "Комунікація між дропшипером та постачальником через платформу для узгодження деталей співпраці.",
        id: 6,
        className: 'card-gradient-6',
    },
    {
        pic: Divace7,
        title: "Система балансів",
        des: "Контроль і управління фінансовими балансами для зручності розрахунків і моніторингу.",
        id: 7,
        className: 'card-gradient-7',
    },
    {
        pic: Divace8,
        title: "Розрахунок з дропшиперами",
        des: "Автоматичний розрахунок та облік фінансових операцій з дропшиперами для швидких і точних обчислень.",
        id: 8,
        className: 'card-gradient-8',
    },
    {
        pic: Divace9,
        title: "Створення власного інтернент-магазину",
        des: "Створюйте власний інтернент-магазин на основі товарів постачальника.",
        id: 9,
        className: 'card-gradient-9',
    },
];
