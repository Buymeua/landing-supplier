import { motion } from "framer-motion";
import { BackgroundCircles } from "../components/desing/Hero";

export default function PrivacyPolicy() {
    return (
        <div className="relative">
            <div className="max-w-[1100px] pb-0 mt-10 sm:mt-auto mx-auto px-4 sm:px-6 pt-8 sm:pt-20">
                <div
                    className={`absolute left-0 bg-pattern w-full h-[620px] top-[170px]`}/>
                <div className="mt-4 relative z-10">
                    <motion.h1
                        className="text-center text-white font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[72px] lg:leading-[90px] mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Політика конфіденційності
                    </motion.h1>

                    <motion.p
                        className="text-center max-w-4xl text-base sm:text-lg lg:text-xl text-[#A3A3A3] mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Ми поважаємо вашу конфіденційність та прагнемо захищати ваші особисті дані. Ця політика конфіденційності пояснює, як ми збираємо, використовуємо, зберігаємо та захищаємо вашу інформацію під час користування нашим вебсайтом.
                    </motion.p>

                    <div className="bg-[#1d1d1d80] rounded-xl shadow-lg p-6 mb-8">
                        {[...Array(5)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.4 + index * 0.4, // Sequential delay for each item
                                }}
                                className="text-lg sm:text-base text-[#E0E0E0] leading-relaxed mt-4"
                            >
                                <motion.span
                                    className="font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.4 + index * 0.4 }}
                                >
                                    {index + 1}.{" "}
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.6 + index * 0.4 }}
                                >
                                    {[
                                        "Збір інформації: Ми можемо збирати персональні дані, такі як ім’я, адреса електронної пошти та платіжні дані, коли ви використовуєте наші послуги.",
                                        "Використання даних: Ваші дані використовуються для обробки замовлень, покращення послуг та комунікації з вами.",
                                        "Зберігання інформації: Всі дані зберігаються у безпечному середовищі з використанням стандартних заходів захисту.",
                                        "Поділ інформації: Ми не передаємо ваші дані третім особам, окрім випадків, передбачених законом.",
                                        "Ваші права: Ви маєте право на доступ до ваших даних, їх виправлення або видалення.",
                                    ][index]}
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
