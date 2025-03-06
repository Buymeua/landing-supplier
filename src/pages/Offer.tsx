import { motion } from "framer-motion";
import { BackgroundCircles } from "../components/desing/Hero";

export default function Offer() {
    return (
        <div className="relative">
            <div className="max-w-[1100px] mt-10 sm:mt-auto pb-0 mx-auto px-4 sm:px-6 pt-8 sm:pt-20">
                <div className="absolute left-0 bg-pattern w-full h-[620px] top-[170px]" />

                <div className="mt-4 relative z-10">
                    {/* Title */}
                    <motion.h1
                        className="text-center text-white font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[72px] lg:leading-[90px] mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Публічна оферта
                    </motion.h1>

                    {/* Intro Paragraph */}
                    <motion.p
                        className="text-center max-w-4xl text-base sm:text-lg lg:text-xl text-[#A3A3A3] mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Цей документ є офіційною пропозицією укласти договір на надання послуг між сайтом BuyMeUA та користувачем.
                    </motion.p>

                    {/* Sections */}
                    <motion.div
                        className="text-white space-y-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        {/* Загальні положення */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">1. Загальні положення</h2>
                            <p className="text-[#A3A3A3] leading-relaxed">
                                Ця публічна оферта регулює умови використання сервісу BuyMeUA та покупки товарів через платформу.
                            </p>
                        </div>

                        {/* Терміни та визначення */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">2. Терміни та визначення</h2>
                            <p className="text-[#A3A3A3] leading-relaxed">
                                <strong>Сайт</strong> – веб-платформа https://buymeua.shop/<br />
                                <strong>Продавець</strong> – адміністрація сайту BuyMeUA.<br />
                                <strong>Покупець</strong> – особа, яка оформлює замовлення.
                            </p>
                        </div>

                        {/* Порядок оформлення замовлення */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">3. Порядок оформлення замовлення</h2>
                            <p className="text-[#A3A3A3] leading-relaxed">
                                Покупець обирає товар, оформлює замовлення та оплачує його відповідно до інструкцій.
                            </p>
                        </div>

                        {/* Оплата та доставка */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">4. Оплата та доставка</h2>
                            <p className="text-[#A3A3A3] leading-relaxed">
                                Доступні способи оплати: Visa, Mastercard, Google Pay, Apple Pay.<br />
                                Доставка здійснюється службами Нова Пошта або кур'єрською службою.
                            </p>
                        </div>

                        {/* Гарантії та повернення */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">5. Гарантії та повернення</h2>
                            <p className="text-[#A3A3A3] leading-relaxed">
                                Ви маєте право повернути товар протягом 14 днів, якщо він не був використаний.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
