import React, { useState } from "react";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import axios from "axios";

export default function PhoneForm() {
    const [phone, setPhone] = useState("");
    const [success, setSuccess] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const handleSubmit = async () => {
        setLoadingSubmit(true)
        try {
            const response = await axios.put('/edpoint',{
                phone: phone.replace(/\s/g, "")
            });
            setPhone('')
            setSuccess(true)
            console.log(response);
        } catch (error) {
            console.error(error);
            setSuccess(true)
        } finally {
            setLoadingSubmit(false)
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
                        Зв'яжіться з нами
                    </motion.h4>
                    <motion.p
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-gray-300 font-light mb-8"
                    >
                        Напиши свій номер телефону
                    </motion.p>
                    <div className="space-y-2">
                        <div className="flex font-light flex-col sm:flex-row gap-10 sm:gap-20">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            >
                                <InputMask
                                    mask="+38 (999) 999-99-99"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                >
                                    {(inputProps: any) => (
                                        <input
                                            {...inputProps}
                                            type="text"
                                            placeholder='+38 (___) ___-__-__'
                                            className="bg-transparent sm:w-[220px] border-b border-[#4A4A59] text-white focus:outline-none py-2"
                                        />
                                    )}
                                </InputMask>
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                <Button
                                    onClick={handleSubmit}
                                    disabled={!phone || phone.includes("_") || loadingSubmit}
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
                                Номер телефону успішно надіслано ✅
                            </motion.p>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
