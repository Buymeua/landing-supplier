import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TgIcon } from "../icons";
import { Icon } from '@iconify/react';
import { Link as ScrollLink, scroller } from 'react-scroll';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const navigation = [
    { label: 'Про нас', path: 'about' },
    { label: 'Переваги', path: 'feature' },
    { label: 'Функціонал', path: 'functions' },
    { label: 'Інтеграції', path: 'integration' },
    { label: 'Відгуки', path: 'feedback' },
    { label: 'Політика конфіденційності', path: 'privacy-policy' },
    { label: 'FAQ', path: 'faq' }
  ];

  useEffect(() => {
    if (location.pathname === "/providers" && targetSection) {

      setTimeout(()=>{
        scroller.scrollTo(targetSection, {
          smooth: true,
          duration: 500,
          offset: 40,
        });
      },500)

      setTargetSection(null);
    }
  }, [location.pathname, targetSection]);

  const handleNavigation = (section: string) => {
    if (section === "privacy-policy") {
      navigate("/privacy-policy"); // Переход на отдельную страницу
    } else if (location.pathname === "/providers") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: 40,
      });
    } else {
      setTargetSection(section);
      navigate("/providers");
    }
    setIsMobileMenuOpen(false);
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

              <ul className="hidden sm:flex justify-center gap-6 lg:gap-8">
                {navigation.map((item, idx) => (
                    <li key={idx}>
                      <button
                          onClick={() => handleNavigation(item.path)}
                          className="text-white text-[10px] lg:text-base shadow cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </li>
                ))}
              </ul>

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

              <a href={'https://t.me/buy_me_ua'} target={'_blank'} className="hidden sm:flex transition-opacity duration-150 hover:opacity-80 ease-in-out max-h-[40px] bg-white font-medium text-base text-[#18191A] rounded-2xl py-3 px-4 gap-2 items-center">
                <span>Telegram </span>
                <TgIcon />
              </a>
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
                  variants={{
                    hidden: { opacity: 0, y: "-100%" },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: "-100%" }
                  }}
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
                <ul className="flex flex-col gap-6 text-center -mt-10">
                  {navigation.map((item, idx) => (
                      <li key={idx}>
                        <button
                            onClick={() => handleNavigation(item.path)}
                            className="text-white lg:text-base shadow cursor-pointer"
                        >
                          {item.label}
                        </button>
                      </li>
                  ))}
                </ul>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}
