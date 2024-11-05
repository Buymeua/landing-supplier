import React from "react";
import Button from "../UI/Button";
import {Customer5} from "../../assets";
import {QuoteIcon} from "../../icons";

export default function ContactUs() {
    return (
        <div className="max-w-[1096px] mx-auto sm:px-0 py-10 mt-12 sm:mt-[120px]">
            <div className=" bg-transparent  sm:bg-[#FFFFFF08] p-4 sm:p-10 rounded-[32px] flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-[78px]">
                <div className=" w-full ">
                    <h2 className="text-3xl sm:text-[44px] font-semibold text-white mb-4">
                        Зв'яжіться з нами
                    </h2>
                    <p className="text-gray-300 font-light mb-4 md:mb-[105px]">
                        Залишились питання? Напишіть нам на пошту і наш консультант відповість вам протягом 24 годин
                    </p>
                    <div className="space-y-8">
                        <div className="flex font-light flex-col sm:flex-row gap-6">
                            <input
                                type="text"
                                placeholder="Ім'я"
                                className="bg-transparent border-b border-[#4A4A59] text-white focus:outline-none w-full sm:w-1/2 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border-b border-[#4A4A59] text-white focus:outline-none w-full sm:w-1/2 py-2"
                            />
                        </div>
                        <textarea
                            placeholder="Коментар"
                            className="bg-transparent border-b border-[#4A4A59] text-white focus:outline-none w-full"
                        />
                       <Button>
                            Надіслати
                        </Button>
                    </div>
                </div>

                <div className=" w-full lg:max-w-[498px] h-auto   flex flex-col gap-8 sm:gap-16 bg-qoute bg-no-repeat bg-cover overflow-hidden rounded-[24px] p-4 sm:p-[60px] text-white">
                    <div>
                        <QuoteIcon />
                    </div>
                    <p className="text-base sm:text-xl font-light max-w-[378px] leading-relaxed">
                        Ми співпрацюємо з Buyme від моменту створення додатку до сьогоднішнього дня. Функціонал платформи перевершує всі інші аналоги, які представлені на ринку.
                    </p>
                    <div className="flex items-center gap-4">
                        <img className={' sm:w-[54px] sm:h-[54px]'} src={Customer5} />
                        <div>
                            <h3 className="font-normal">Андрій Шевченко</h3>
                            <p className=" text-xs font-light sm:text-sm text-[#FFFFFFB8] ">CEO, Voskhodr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
