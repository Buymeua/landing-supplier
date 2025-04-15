import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import axios from "axios";

const UsernameForm = forwardRef((_, ref) => {

    const [username, setUsername] = useState("");
    const [success, setSuccess] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current?.focus();
        }
    }));

    const handleSubmit = async () => {
        setLoadingSubmit(true);
        setSuccess(false);
        setErrorMessages([]);

        try {
            const response = await axios.post(
                'https://buymeua.shop/api/v1/register-from-landing-page',
                {
                    telegram_user_name: username
                }
            );

            setUsername('');
            setSuccess(true);
        } catch (error: any) {
            setSuccess(false);

            if (error.response && error.response.status === 422) {
                const serverErrors = error.response.data.errors;
                if (serverErrors) {
                    const messages = Object.values(serverErrors).flat();
                    setErrorMessages(messages);
                } else {
                    setErrorMessages(['Невідома помилка при перевірці даних.']);
                }
            } else {
                setErrorMessages(['Щось пішло не так. Спробуйте ще раз пізніше.']);
            }
        } finally {
            setLoadingSubmit(false);
        }
    };

    return (
        <div className="max-w-[1096px] relative z-50 sm:-mt-16 mx-4 sm:mx-auto sm:px-0 py-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-transparent sm:bg-[#FFFFFF08] p-4 sm:p-10 rounded-[32px] flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-[78px]"
            >
                <div className="w-full">
                    <motion.h4
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-2xl sm:text-3xl font-semibold text-white mb-4"
                    >
                        Запустіть свій магазин
                    </motion.h4>
                    <motion.p
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-gray-300 font-light mb-8"
                    >
                        За 5 хвилин — залиште Telegram!
                    </motion.p>
                    <div className="space-y-2">
                        <div className="flex font-light flex-col sm:flex-row gap-10 sm:gap-20">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            >
                                <input
                                    type="text"
                                    ref={inputRef}
                                    placeholder="@username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-transparent w-full sm:w-[220px] border-b border-[#4A4A59] text-white focus:outline-none py-2"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                <Button
                                    onClick={handleSubmit}
                                    disabled={!username.trim() || loadingSubmit}
                                >
                                    {loadingSubmit ? 'Відправка' : 'Надіслати'}
                                </Button>
                            </motion.div>
                        </div>
                        {success && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-400 text-sm pt-2"
                            >
                                Ім’я користувача успішно надіслано ✅
                            </motion.p>
                        )}
                        {errorMessages.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-400 text-sm pt-2 space-y-1"
                            >
                                {errorMessages.map((msg, index) => (
                                    <p key={index}>{msg}</p>
                                ))}
                            </motion.div>
                        )}

                    </div>
                </div>
            </motion.div>
        </div>
    );
});

export default UsernameForm
