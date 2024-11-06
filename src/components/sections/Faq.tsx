import React, {useState} from "react";
import {motion} from "framer-motion";
import Button from "../UI/Button";
import {MinusIcon, PlusIcon} from "../../icons";

const faqItems = [
    {
        question: "Як відбувається процес оформлення замовлень?",
        answer: (
            <>
                Тобі підійде наш додаток, якщо ти:
                <ul className="list-disc ml-4 mt-2">
                    <li>Постачальник, який працює по дропу. Також доступне оформлення власних онлайн і офлайн замовлень
                        на роздріб;
                    </li>
                    <li>Постачальник, який продає власний товар в роздріб, без роботи по дропу. Як онлайн, так і офлайн
                        продажі;
                    </li>
                    <li>Продавець, який працює по дропу з постачальниками з Buyme, або інших платформ.</li>
                </ul>
                <p className="mt-2">* можливе створення індивідуального комбінованого варіанту</p>
            </>
        )
    },
    {
        question: "Кому підходить наш додаток Buyme?",
        answer: (
            <>
                Тобі підійде наш додаток, якщо ти:
                <ul className="list-disc ml-4 mt-2">
                    <li>Постачальник, який працює по дропу. Також доступне оформлення власних онлайн і офлайн замовлень
                        на роздріб;
                    </li>
                    <li>Постачальник, який продає власний товар в роздріб, без роботи по дропу. Як онлайн, так і офлайн
                        продажі;
                    </li>
                    <li>Продавець, який працює по дропу з постачальниками з Buyme, або інших платформ.</li>
                </ul>
                <p className="mt-2">* можливе створення індивідуального комбінованого варіанту</p>
            </>
        )
    },
    {
        question: "Як часто оновлюється функціонал?",
        answer: (
            <>
                Тобі підійде наш додаток, якщо ти:
                <ul className="list-disc ml-4 mt-2">
                    <li>Постачальник, який працює по дропу. Також доступне оформлення власних онлайн і офлайн замовлень
                        на роздріб;
                    </li>
                    <li>Постачальник, який продає власний товар в роздріб, без роботи по дропу. Як онлайн, так і офлайн
                        продажі;
                    </li>
                    <li>Продавець, який працює по дропу з постачальниками з Buyme, або інших платформ.</li>
                </ul>
                <p className="mt-2">* можливе створення індивідуального комбінованого варіанту</p>
            </>
        )
    },
    {
        question: "Чи потрібно платити за користування додатком?",
        answer: (
            <>
                Тобі підійде наш додаток, якщо ти:
                <ul className="list-disc ml-4 mt-2">
                    <li>Постачальник, який працює по дропу. Також доступне оформлення власних онлайн і офлайн замовлень
                        на роздріб;
                    </li>
                    <li>Постачальник, який продає власний товар в роздріб, без роботи по дропу. Як онлайн, так і офлайн
                        продажі;
                    </li>
                    <li>Продавець, який працює по дропу з постачальниками з Buyme, або інших платформ.</li>
                </ul>
                <p className="mt-2">* можливе створення індивідуального комбінованого варіанту</p>
            </>
        )
    }
];

const AccordionItem = ({question, answer, isOpen, onClick}) => (
    <div
        className={`border-[#1F1F30] border-b md:border-0 transition  py-6 md:p-8 rounded-none md:rounded-2xl ${isOpen ? 'bg-[#FFFFFF08]' : 'bg-transparent'} `}>
        <div
            onClick={onClick}
            className="flex cursor-pointer justify-between w-full  text-left text-white text-base sm:text-lg"
        >
            <h1 className={'text-[#F8F8FC] text-base sm:text-xl'}>
                {question}
            </h1>

            <motion.button
                whileInView="visible"
                initial={{opacity: 0, rotate: 45}}
                animate={{opacity: 1, rotate: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="text-xl"
            >
                {!isOpen ? <PlusIcon/> : <MinusIcon/>}
            </motion.button>

        </div>
        <motion.div
            whileInView="visible"
            initial={{height: 0}}
            animate={{height: isOpen ? "auto" : 0}}
            transition={{duration: 0.3}}
            className="overflow-hidden mt-3"
        >
            <div className="text-[#BBBBBC] font-light text-sm sm:text-base ">
                {answer}
            </div>
        </motion.div>
    </div>
);

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1096px] mx-auto px-4 md:px-0 py-10 mt-12 sm:mt-[120px]">
            <div className='flex flex-col md:flex-row justify-between'>
                <div className={'w-full md:w-[340px]'}>
                    <h1 className={'text-[#F8F8FC] text-2xl sm:text-4xl md:text-[60px] '}>FAQs</h1>
                    <div className={'mt-3 md:mt-12'}>
                        <p className={'font-light mb-6 text-[#BBBBBC] text-sm sm:text-base'}>Потрібна допомога? Не
                            зволікайте та напишіть нам у Telegram.</p>
                        <Button>Написати</Button>
                    </div>
                </div>

                <div className=" max-w-[762px] mt-3 md:-mt-8">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleAccordion(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
