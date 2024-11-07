import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { TgIcon } from "../icons";
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';



export default function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { label: 'Про нас', path: 'about' },
    { label: 'Переваги', path: 'feature' },
    { label: 'Функціонал', path: 'functions' },
    { label: 'Інтеграції', path: 'integration' },
    { label: 'Відгуки', path: 'feedback' },
    { label: 'FAQ', path: 'faq' }
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" }
  };

  return (
      <>
      <nav className="bg-[#191A1B] relative z-20 border-b border-b-[#FFFFFF1A] h-16 sm:h-20 flex items-center shadow-lg backdrop-blur-md">
        <div className="page container">
          <div className="items-center flex justify-between w-full">
            <div className="flex items-center">
              <a href="/">
                <img
                    src='/logo.svg'
                    width={100}
                    height={40}
                    alt="Float UI logo"
                />
              </a>
            </div>

            {location.pathname == '/providers' && (
                <ul className="hidden sm:flex justify-center gap-6 lg:gap-8">
                  {navigation.map((item, idx) => (
                      <li key={idx}>
                        <Link
                            to={item.path}
                            smooth={true}
                            duration={500}
                            offset={40}
                            className="text-white text-sm lg:text-base shadow cursor-pointer"
                        >{item.label} </Link>
                      </li>
                  ))}
                </ul>
            )}

            <button
                className="block sm:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-[30px] h-[30px] border border-white/40 flex items-center justify-center rounded-lg">
                <div className="grid grid-cols-2 grid-rows-2 gap-[4px]">
                  <div className="w-[5.86px] h-[5.86px] bg-white rounded-full"></div>
                  <div className="w-[5.86px] h-[5.86px] bg-white/40 rounded-full"></div>
                  <div className="w-[5.86px] h-[5.86px] bg-white/40 rounded-full"></div>
                  <div className="w-[5.86px] h-[5.86px] bg-white rounded-full"></div>
                </div>
              </div>
            </button>

            <button className="hidden sm:flex transition-opacity duration-150 hover:opacity-80 ease-in-out max-h-[40px] bg-white font-medium text-base text-[#18191A] rounded-2xl py-3 px-4 gap-2 items-center">
              <span>Telegram </span>
              <TgIcon />
            </button>
          </div>

        </div>
      </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  className="fixed top-0 left-0 w-full h-screen bg-[#191a1bfc] flex flex-col items-center justify-center z-[100]"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={mobileMenuVariants}
                  transition={{ duration: 0.3 }}
              >
                <button
                    className="absolute top-4 right-4 text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-[30px] h-[30px] border border-white/40 flex items-center justify-center rounded-lg">
                    <Icon icon={'line-md:close'} />
                  </div>
                </button>
                <ul className="flex flex-col gap-6 text-center">
                  {navigation.map((item, idx) => (
                      <li key={idx}>
                        <Link
                            to={item.path}
                            smooth={true}
                            onClick={()=>setIsMobileMenuOpen(false)}
                            duration={500}
                            offset={50}
                            className="text-white lg:text-base shadow cursor-pointer"
                        >{item.label} </Link>
                      </li>
                  ))}
                </ul>
              </motion.div>
          )}
        </AnimatePresence>

      </>
  );
}
