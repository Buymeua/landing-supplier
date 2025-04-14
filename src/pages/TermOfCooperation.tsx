import { motion } from "framer-motion";

export default function TermOfCooperation() {
    const items = [
        "Актуальні залишки товару",
        "Заміри, фото та відео",
        "Обмін та повернення",
        "Післяплата (наложений платіж)",
        "Відправка за вашими ТТН",
        "Вигрузки на Prom, Rozetka, Епіцентр",
        "Виплати — щочетверга на ваші реквізити",
    ];

    return (
        <div className="relative">
            <div className="max-w-[1100px] pb-0 mt-10 sm:mt-auto mx-auto px-4 sm:px-6 pt-8 sm:pt-20">
                <div className="absolute left-0 bg-pattern w-full h-[620px] top-[170px]" />
                <div className="mt-4 relative z-10">
                    <motion.h1
                        className="text-center text-white font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[72px] lg:leading-[90px] mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Умови співробітництва
                    </motion.h1>

                    <motion.div
                        className="text-center max-w-4xl text-base sm:text-lg lg:text-xl text-[#A3A3A3] mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className="mb-4">Відправки товару кожен день (вихідний неділя)</p>
                        <p>Замовлення прийняті до 13:00 їдуть того ж дня</p>
                    </motion.div>

                    <div className="bg-[#1d1d1d80] rounded-xl shadow-lg p-6 mb-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.4 + index * 0.2,
                                }}
                                className="text-lg sm:text-base text-[#E0E0E0] leading-relaxed mt-4"
                            >
                                <motion.span
                                    className="font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
                                >
                                    •{" "}
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                                >
                                    {item}
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
