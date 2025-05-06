import React, {forwardRef, useImperativeHandle, useRef, useState, useEffect} from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import axios from "axios";

const UsernameForm = forwardRef((_, ref) => {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [inputType, setInputType] = useState(""); // "username", "phone", or ""
    const [success, setSuccess] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [errorMessages, setErrorMessages] = useState<any>([]);
    const [validationError, setValidationError] = useState("");

    const inputRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current?.focus();
        }
    }));

    useEffect(() => {
        validateAndFormatInput(input);
    }, [input]);

    const extractUsernameFromLink = (value:string) => {
        const telegramLinkRegex = /(?:https?:\/\/)?t\.me\/([a-zA-Z0-9_]{5,32})/i;
        const telegramLinkMatch = value.match(telegramLinkRegex);

        if (telegramLinkMatch) {
            return `@${telegramLinkMatch[1]}`;
        }
        return null;
    };

    const processInput = (value:any) => {
        let processed = value.trim();

        if (processed.startsWith('@ ')) {
            processed = '@' + processed.slice(2).replace(/\s+/g, '');
        }
        else if (/^\s*[a-zA-Z0-9_]/.test(processed) && !processed.includes('+') && !/^\d+$/.test(processed)) {
            processed = '@' + processed.replace(/\s+/g, '');
        }
        else if (processed.startsWith('@')) {
            processed = '@' + processed.slice(1).replace(/\s+/g, '');
        }

        const usernameFromLink = extractUsernameFromLink(processed);
        if (usernameFromLink) {
            return usernameFromLink;
        }

        return processed;
    };

    const validateAndFormatInput = (value:any) => {
        setUsername("");
        setPhone("");
        setInputType("");
        setIsValid(false);
        setValidationError("");

        if (!value.trim()) {
            return;
        }

        const processedInput = processInput(value);

        if (processedInput.startsWith('@')) {
            validateUsername(processedInput);
            return;
        }

        validatePhoneNumber(processedInput);
    };

    const validateUsername = (value:any) => {
        let formattedUsername = value.replace(/\s+/g, '');

        if (!formattedUsername.startsWith('@')) {
            formattedUsername = `@${formattedUsername}`;
        }

        const usernameRegex = /^@[a-zA-Z0-9_]{5,32}$/;

        if (usernameRegex.test(formattedUsername)) {
            setUsername(formattedUsername);
            setInputType("username");
            setIsValid(true);
            setInput(formattedUsername);
        } else {
            setValidationError("Невалідний формат username. Повинен бути у форматі @username (5-32 символів, латинські букви, цифри та підкреслення)");
        }
    };

    const validatePhoneNumber = (value:any) => {
        const digitsOnly = value.replace(/^\+/, 'PLUS').replace(/[^\d]/g, '').replace(/^PLUS/, '+');

        let formattedPhone = digitsOnly;

        if (formattedPhone.startsWith('0') && formattedPhone.length === 10) {
            formattedPhone = `+38${formattedPhone}`;
        }

        if (formattedPhone.length === 9 && !formattedPhone.startsWith('+')) {
            formattedPhone = `+380${formattedPhone}`;
        }

        const phoneRegex = /^\+?380\d{9}$/;

        if (phoneRegex.test(formattedPhone)) {
            setPhone(formattedPhone);
            setInputType("phone");
            setIsValid(true);
            setInput(formattedPhone);
        } else {
            setValidationError("Невалідний номер телефону. Підтримуються тільки українські номери у форматі +380XXXXXXXXX або 0XXXXXXXXX");
        }
    };

    const handleSubmit = async () => {
        if (!isValid) {
            setErrorMessages(["Будь ласка, введіть коректний Telegram-username або номер телефону"]);
            return;
        }

        setLoadingSubmit(true);
        setSuccess(false);
        setErrorMessages([]);

        try {
            const payload = inputType === "username"
                ? { telegram_user_name: username }
                : { phone_number: phone };

            const response = await axios.post(
                'https://buymeua.shop/api/v1/register-from-landing-page',
                payload
            );

            // Проверяем наличие поля success в ответе
            if (response.data && response.data.success === true) {
                setInput('');
                setUsername('');
                setPhone('');
                setInputType('');
                setIsValid(false);
                setSuccess(true);
            } else {
                // Если success = false, обрабатываем в соответствии с кодом ошибки
                if (response.data && response.data.code === 'tg_user_not_found') {
                    setErrorMessages(['Користувач Telegram не знайдений.']);
                } else {
                    setErrorMessages(['Не вдалося завершити реєстрацію. Будь ласка, спробуйте ще раз.']);
                }
            }
        } catch (error:any) {
            setSuccess(false);

            if (error.response && error.response.status === 422) {
                const serverErrors = error.response.data.errors;
                if (serverErrors) {
                    const messages = Object.values(serverErrors).flat();
                    setErrorMessages(messages);
                } else {
                    setErrorMessages(['Невідома помилка при перевірці даних.']);
                }
            } else if (error.response && error.response.data && error.response.data.code === 'tg_user_not_found') {
                setErrorMessages(['Користувач Telegram не знайдений. Перевірте правильність введених даних або зареєструйтеся в Telegram.']);
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
                                className="relative w-full sm:w-[220px]"
                            >
                                <input
                                    type="text"
                                    ref={inputRef}
                                    placeholder="@username або телефон"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className={`bg-transparent w-full border-b ${validationError ? 'border-red-500' : 'border-[#4A4A59]'} 
                                      text-white focus:outline-none py-2`}
                                />
                                {validationError && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-red-400 p-1  text-xs mt-1"
                                    >
                                        {validationError}
                                    </motion.p>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                <Button
                                    width={'175px'}
                                    onClick={handleSubmit}
                                    disabled={!isValid || loadingSubmit}
                                >
                                    {loadingSubmit ? (
                                        <>
                                            Відправка
                                            <div
                                                className="inline-block h-4 w-4 ml-2 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                                role="status"
                                            >
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </>
                                    ) : (
                                        'Надіслати'
                                    )}
                                </Button>

                            </motion.div>
                        </div>
                        {success && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-400 text-sm pt-2"
                            >
                                Дані успішно надіслано ✅
                            </motion.p>
                        )}
                        {errorMessages.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-400 text-sm pt-2 space-y-1"
                            >
                                {errorMessages.map((msg:string, index:number) => (
                                    <p key={index}>{msg}</p>
                                ))}
                            </motion.div>
                        )}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            className="text-gray-400 text-xs pt-4"
                        >
                            Введіть ваш Telegram-username (@username) або <br className={'hidden sm:block'}/>  номер телефону в форматі +380XXXXXXXXX
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});

export default UsernameForm;