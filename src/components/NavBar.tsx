import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import {TgIcon} from "../icons";


export default function NavBar() {
    const location = useLocation()

    const navigation = [
        {label: 'Про нас', path: '#'},
        {label: 'Переваги', path: '#'},
        {label: 'Функціонал', path: '#'},
        {label: 'Інтеграції', path: '#'},
        {label: 'Відгуки', path: '#'},
        {label: 'FAQ', path: '#'}
    ]


    return (
        <nav
            className=" bg-[#191A1B] border-b border-b-[#FFFFFF1A] h-16 sm:h-20 flex items-center  shadow-lg backdrop-blur-md">
            <div className="page container">
                <div className="items-center flex">
                    <div className="flex items-center justify-between py-1 md:block md:py-3 ">
                        <a href="/">
                            <img
                                src='/logo.png'
                                width={100}
                                height={40}
                                alt="Float UI logo"
                            />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                            >

                            </button>
                        </div>
                    </div>
                    <div
                        className={`mt-0 flex-1 justify-self-center pb-3 md:block md:pb-0  `}
                    >
                        {location.pathname !== '/' &&
                            <ul className="flex  justify-center gap-6 lg:gap-8 ">
                                {navigation.map((item, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                        >
                                            <motion.a className={'text-white text-sm lg:text-base  shadow'} href={item.path}>
                                              {item.label}
                                            </motion.a>
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                    <div>
                        <button
                            className="hidden transition-opacity duration-150 hover:opacity-80 ease-in-out sm:flex max-h-[40px] bg-white font-medium text-base text-[#18191A] rounded-2xl py-3 px-4  gap-2 items-center">
                            <span>Telegram </span>
                            <TgIcon/>
                        </button>
                        <button className="block sm:hidden">
                            <div
                                className="w-[30px] h-[30px] border border-white/40  flex items-center justify-center  rounded-lg">
                                <div className="grid grid-cols-2 grid-rows-2 gap-[4px]">
                                    <div className="w-[5.86px] h-[5.86px] bg-white rounded-full"></div>
                                    <div className="w-[5.86px] h-[5.86px] bg-white/40 rounded-full"></div>
                                    <div className="w-[5.86px] h-[5.86px] bg-white/40 rounded-full"></div>
                                    <div className="w-[5.86px] h-[5.86px] bg-white rounded-full"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
