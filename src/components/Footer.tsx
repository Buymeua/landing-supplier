import {useLocation} from "react-router-dom";
import React from "react";
import Button from "./UI/Button";
import {ArrowUpIcon} from "../icons";
import {Link} from "react-scroll";

export default function Footer() {
    const location = useLocation()

    const navigation = [
        {label: 'Про нас', path: 'about'},
        {label: 'Переваги', path: 'feature'},
        {label: 'Функціонал', path: 'functions'},
        {label: 'Інтеграції', path: 'integration'},
        {label: 'Відгуки', path: 'feedback'},
        {label: 'FAQ', path: 'faq'}
    ];

    return (
        <footer>
            <div
                className='max-w-[1096px] relative flex px-4 sm:px-0 flex-col z-10 overflow-hidden sm:overflow-visible sm:h-auto mt-[120px] m-auto'>
                {location.pathname !== '/' &&
                    <div className={'flex justify-between flex-col gap-8 sm:flex-row'}>
                        <div className={'flex mb-6 md:mb-[52px] flex-col gap-12'}>
                            <h1
                                className='leading-9 text-white font-bold text-[26px] sm:text-[32px] md:text-[48px] lg:text-[54px]  md:leading-[60px] '
                            >
                                Готові до <span
                                className='bg-gradient-to-r from-[#333333] via-[#777777] to-[#CCCCCC] text-transparent bg-clip-text'> розвитку </span>
                                <br/> вашого бізнесу?
                            </h1>
                            <div>
                                <Button>
                                    Зареєструватися
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8">
                            <div>
                                <h2 className="mb-5 text-base md:text-xl text-[#BBBBBC] font-semibold dark:text-white">Навігація</h2>
                                <ul className="text-[#FFFFFF] text-sm md:text-base font-light">
                                    {navigation.map((item: any, index: number) => (
                                            <li key={index} className="mb-4">
                                                <Link
                                                    to={item.path}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={50}
                                                    className="hover:underline"
                                                >{item.label} </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-5 text-base md:text-xl  text-[#BBBBBC] font-semibold dark:text-white">Соцмережі</h2>
                                <ul className="text-[#FFFFFF] text-sm md:text-base font-light">
                                    <li className="mb-4 flex gap-1 items-center">
                                        <a href="#" className="hover:underline">Facebook</a> <ArrowUpIcon/>
                                    </li>
                                    <li className="mb-4 flex gap-1 items-center">
                                        <a href="#" className="hover:underline">Instagram</a> <ArrowUpIcon/>
                                    </li>
                                    <li className="mb-4  flex gap-1 items-center">
                                        <a href="#" className="hover:underline">Telegram</a> <ArrowUpIcon/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                <div className={'border-t border-[#1F1F30] py-6 sm:py-8 flex justify-between w-full items-center '}>
                    <span className=' text-sm  font-light sm:text-base text-[#BBBBBC]'>© 2024</span>
                    <p className={' text-sm font-light sm:text-base text-[#F8F8FC]'}>hello.buyme.com</p>
                </div>
            </div>

        </footer>
    )
}